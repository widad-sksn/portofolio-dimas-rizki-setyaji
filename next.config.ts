import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

// next/font requires a literal path. Resolve the supplied format before compilation.
const supplied = ["pricedown.woff2", "pricedown.ttf", "pricedown.otf"].find((name) =>
  existsSync(path.join(process.cwd(), "public/fonts", name)),
);
const source = supplied
  ? "../public/fonts/" + supplied
  : "../node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2";
const modulePath = path.join(process.cwd(), "app/display-font.ts");
const fontModule = `import localFont from "next/font/local";
export const displayFace = localFont({
  src: "${source}", variable: "--face-display", display: "swap", weight: "400"
});
`;
if (!existsSync(modulePath) || readFileSync(modulePath, "utf8") !== fontModule) {
  writeFileSync(modulePath, fontModule);
}

const config: NextConfig = { turbopack: { root: process.cwd() } };
export default config;
