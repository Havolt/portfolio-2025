import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const frontendDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputDirectory = path.join(frontendDirectory, "dist");
const htmlPath = path.join(outputDirectory, "index.html");
const manifestPath = path.join(outputDirectory, ".vite", "manifest.json");

const vite = await createServer({
  root: frontendDirectory,
  configFile: path.join(frontendDirectory, "vite.config.ts"),
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const markup = renderToString(createElement(App));
  const [html, manifestContents] = await Promise.all([
    readFile(htmlPath, "utf8"),
    readFile(manifestPath, "utf8"),
  ]);
  const manifest = JSON.parse(manifestContents);
  const renderedHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  );

  if (renderedHtml === html) {
    throw new Error('Could not find the empty "#root" element in dist/index.html');
  }

  const htmlWithBuiltAssets = Object.entries(manifest).reduce(
    (result, [source, asset]) => {
      if (source.startsWith("src/assets/")) {
        return result.replaceAll(`/${source}`, `/${asset.file}`);
      }
      return result;
    },
    renderedHtml,
  );

  await writeFile(htmlPath, htmlWithBuiltAssets);
} finally {
  await vite.close();
}
