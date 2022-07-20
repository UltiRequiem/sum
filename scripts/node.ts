import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage(
  {
    repoName: "@ultirequiem/sum",
    description: "Sum utilities.",
    homepage: "https://sum.js.org",
    keywords: ["math", "sum"],
    version: "2.0.0",
  },
  {
    entryPoints: ["./mod.ts", { name: "sum", path: "./sum.ts", kind: "bin" }],
    typeCheck: false,
    supportCJS: false,
    shims: { deno: true, prompts: true },
  },
);
