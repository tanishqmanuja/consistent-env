import * as dotenv from "dotenv";

export const DEFAULT_ENV_FILE_MAP = {
  production: ".env.production",
  development: ".env.development",
  test: ".env.test",
};

type Config = Record<string, string | false | undefined>;
type ConfigFn = (defaultFilemap: Config) => Config;

/**
 * Replicate bun's behavior of loading .env files in the following order by default:
 *  - .env
 *  - .env.production, .env.development, .env.test (depending on NODE_ENV, default is development)
 *  - .env.local
 *
 * @link https://bun.sh/docs/runtime/env
 */
export function load(config: Config | ConfigFn = DEFAULT_ENV_FILE_MAP): void {
  if (process.versions.bun || process.execArgv.includes("--env-file")) {
    return;
  }

  dotenv.config();

  const c =
    typeof config === "function" ? config(DEFAULT_ENV_FILE_MAP) : config;

  const path = c[process.env.NODE_ENV ?? "development"];

  if (path) {
    dotenv.config({ path, override: true });
  }

  dotenv.config({ path: ".env.local", override: true });
}
