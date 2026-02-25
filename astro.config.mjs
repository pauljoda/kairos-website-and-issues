import { defineConfig } from "astro/config";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;

export default defineConfig({
  output: "static",
  site: isGitHubActions && owner ? `https://${owner}.github.io` : undefined,
  base: isGitHubActions && repo ? `/${repo}` : "/"
});
