import { build, context } from 'esbuild';
import copy from 'esbuild-copy-files-plugin';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';

(async () => {
  const PORT = 1001;
  const HOST = 'localhost';
  const devPath = `http://${HOST}:${PORT}`;
  const prodPath = 'https://ddeeplb.github.io/Themed-BC';
  const isDev = process.argv.includes('--dev');
  const PUBLIC_URL = `${isDev ? devPath : prodPath}/public`;

  const ctx = await (isDev ? context : build)({
    entryPoints: ['./src/Themed.ts'],
    outfile: './dist/themed.js',
    format: 'iife',
    globalName: 'Themed',
    bundle: true,
    sourcemap: true,
    target: ['es2020'],
    loader: {
      '.html': 'text',
      '.css': 'text',
    },
    treeShaking: true,
    keepNames: true,
    define: { PUBLIC_URL: JSON.stringify(PUBLIC_URL) },
    plugins: [
      copy({
        source: ['./public/'],
        target: './dist/',
        copyWithFolder: true
      }),
      progress(),
      time(),
    ],
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });

  if (isDev) {
    await ctx.watch();
    console.info('Watching for changes...');

    const server = await ctx.serve({ host: HOST, port: PORT, servedir: 'dist' });
    console.info(`Server running at ${server.host}:${server.port}`);
  }
})();
