import { build } from 'esbuild';
import copy from 'esbuild-copy-files-plugin';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';
import fs from 'fs';

(async () => {
  const testPath = 'http://127.0.0.1:1001/dist';
  const prodPath = 'https://ddeeplb.github.io/Themed-BC';
  /** @type {boolean | undefined} */
  let isTestServerUp = undefined;

  await new Promise((resolve) => {
    fetch(testPath)
      .then(() => resolve(true))
      .catch(() => resolve(false));
  }).then((result) => {
    isTestServerUp = result;
  });

  await build({
    entryPoints: ['./src/Themed.ts'],
    outfile: './dist/themed.js',
    format: 'iife',
    globalName: 'Themed',
    bundle: true,
    sourcemap: isTestServerUp,
    loader: {
      ".html": "text",
      ".css": "text",
      ".png": "dataurl"
    },
    treeShaking: true,
    keepNames: true,
    plugins: [
      copy({
        source: ['./src/Translations'],
        target: './dist/translations',
        copyWithFolder: false
      }),
      progress(),
      time()
    ],
  }).then(() => {
    let bundleContent = fs.readFileSync('./dist/themed.js', 'utf-8');
    bundleContent = bundleContent.replace(
      '(() => {',
      `(() => {\nconst serverUrl = '${isTestServerUp ? testPath : prodPath}';`
    );
    fs.writeFileSync('./dist/themed.js', bundleContent);
  }).catch((error) => {
    process.exit(1);
  });
})();
