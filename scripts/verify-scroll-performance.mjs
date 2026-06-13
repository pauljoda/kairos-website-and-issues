import { execFileSync, spawnSync } from "node:child_process";

const configuredUrl = process.env.KAIROS_PERF_URL ?? "http://127.0.0.1:4321/";
const urlObject = new URL(configuredUrl);
urlObject.searchParams.set("perf", String(Date.now()));
const url = urlObject.toString();
const maxP95FrameMs = Number(process.env.KAIROS_MAX_SCROLL_P95_MS ?? 80);
const maxOver50Frames = Number(process.env.KAIROS_MAX_SCROLL_OVER_50 ?? 4);

function runAgentBrowser(args, options = {}) {
  return execFileSync("agent-browser", args, {
    encoding: "utf8",
    stdio: options.stdio ?? ["ignore", "pipe", "pipe"],
    timeout: options.timeout ?? 120_000
  });
}

function evalInBrowser(script) {
  const result = spawnSync("agent-browser", ["eval", "--stdin"], {
    input: script,
    encoding: "utf8",
    timeout: 120_000,
    stdio: ["pipe", "pipe", "pipe"]
  });

  if (result.status !== 0) {
    throw new Error(`agent-browser eval failed\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`);
  }

  return result.stdout;
}

try {
  runAgentBrowser(["close", "--all"]);
} catch {
  // No active browser is fine; starting a fresh browser keeps measurements clean.
}

runAgentBrowser(["--args", "--no-sandbox", "open", url]);
runAgentBrowser(["wait", "--load", "networkidle"]);

const measurementScript = String.raw`
(async () => {
  window.scrollTo(0, 0);
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  const samples = [];
  let last = performance.now();
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const start = performance.now();
  const durationMs = 1800;

  await new Promise((resolve) => {
    function step(now) {
      samples.push(now - last);
      last = now;
      const progress = Math.min(1, (now - start) / durationMs);
      window.scrollTo(0, maxY * progress);
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });

  const sorted = samples.slice(1).sort((a, b) => a - b);
  const percentile = (p) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))] || 0;
  const animatedNebula = [...document.querySelectorAll('.nebula-blob')]
    .filter((element) => getComputedStyle(element).animationName !== 'none')
    .map((element) => ({ className: element.className, animationName: getComputedStyle(element).animationName }));

  return {
    url: location.href,
    frames: samples.length,
    avgFrameMs: Number((sorted.reduce((sum, value) => sum + value, 0) / sorted.length).toFixed(2)),
    p95FrameMs: Number(percentile(0.95).toFixed(2)),
    maxFrameMs: Number((sorted.at(-1) || 0).toFixed(2)),
    framesOver50Ms: sorted.filter((value) => value > 50).length,
    animatedNebula
  };
})()
`;

const rawMeasurement = evalInBrowser(measurementScript).trim();
const measurement = JSON.parse(rawMeasurement);
const failures = [];

if (measurement.animatedNebula.length > 0) {
  failures.push(`expected static nebula background, found animated elements: ${JSON.stringify(measurement.animatedNebula)}`);
}
if (measurement.p95FrameMs > maxP95FrameMs) {
  failures.push(`expected p95 frame <= ${maxP95FrameMs}ms, got ${measurement.p95FrameMs}ms`);
}
if (measurement.framesOver50Ms > maxOver50Frames) {
  failures.push(`expected <= ${maxOver50Frames} frames over 50ms, got ${measurement.framesOver50Ms}`);
}

if (failures.length > 0) {
  console.error("Scroll performance regression detected:");
  console.error(JSON.stringify(measurement, null, 2));
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Scroll performance verified:");
console.log(JSON.stringify(measurement, null, 2));
