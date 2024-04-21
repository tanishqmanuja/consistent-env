import { Glob } from "bun";

const glob = new Glob("./src/**/*.ts");
const entrypoints = [...glob.scanSync(".")];

await Bun.build({
  entrypoints,
  outdir: "./dist",
  splitting: true,
  external: ["dotenv"],
  target: "node",
  minify: true,
});
