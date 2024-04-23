import process from "process";
import * as dotenv from "dotenv";

/**
 * Use a mixed approach of bun + vite behavior of loading .env files in the following order:
 *  - .env
 *  - .env.{mode} (mode is NODE_ENV lowercased, default is development)
 *  - .env.local
 *
 * @links https://bun.sh/docs/runtime/env, https://vitejs.dev/guide/env-and-mode
 */
export function load(): void {
  if (process.execArgv.includes("--env-file")) {
    return;
  }

  if (
    process.versions.bun &&
    process.env.NODE_ENV &&
    ["production", "development", "test"].includes(process.env.NODE_ENV)
  ) {
    // This case is handled by bun
    return;
  }

  dotenv.config();

  const mode = process.env.NODE_ENV?.toLowerCase() ?? "development";
  dotenv.config({ path: `.env.${mode}`, override: true });

  dotenv.config({ path: ".env.local", override: true });
}
