import { build } from 'esbuild';
import copy from 'esbuild-copy-files-plugin';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';

(async () => {
  const isPublic = !!process.env.environment;
  const isDev = process.env.environment === 'development';
  const testPath = 'http://127.0.0.1:1001/dist';
  const prodPath = 'https://ddeeplb.github.io/Themed-BC';

  const PUBLIC_URL = isPublic ? (prodPath + (isDev ? '/dev' : '')) : testPath;

  await build({
    entryPoints: ['./src/Themed.ts'],
    outfile: './dist/themed.js',
    format: 'iife',
    globalName: 'Themed',
    bundle: true,
    sourcemap: isDev || !isPublic,
    loader: {
      '.html': 'text',
      '.css': 'text',
      '.png': 'dataurl'
    },
    treeShaking: true,
    keepNames: true,
    define: { serverUrl: JSON.stringify(PUBLIC_URL) },
    plugins: [
      copy({
        source: ['./src/Translations'],
        target: './dist/translations',
        copyWithFolder: false
      }),
      progress(),
      time()
    ],
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
})();
