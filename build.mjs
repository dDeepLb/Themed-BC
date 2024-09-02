import { build, context } from 'esbuild';
import copy from 'esbuild-copy-files-plugin';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';

(async () => {
  /* if built on GitHub */
  const isRemote = !!process.env.environment;
  const isDev = process.env.environment === 'development';
  const prodPath = 'https://ddeeplb.github.io/Themed-BC';
  const devPath = `${prodPath}/dev`;
  const remotePath = isDev ? devPath : prodPath;

  const PORT = 1001;
  const HOST = 'localhost';
  const localPath = `http://${HOST}:${PORT}`;
  const isLocal = process.argv.includes('--dev') || !isRemote;

  const PUBLIC_URL = `${isLocal ? localPath : remotePath}/public`;

  /** @type {import('esbuild').BuildOptions} */
  const buildOptions = {
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
        target: './dist/public/',
        copyWithFolder: false
      }),
      progress(),
      time(),
    ],
  };

  if (isRemote) {
    await build(buildOptions)
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });

    return;
  } else if (isLocal) {
    const ctx = await context(buildOptions);

    await ctx.watch();
    console.info('Watching for changes...');

    const server = await ctx.serve({ host: HOST, port: PORT, servedir: 'dist' });
    console.info(`Server running at ${server.host}:${server.port}`);

    return;
  }

  throw new Error('Unknown environment. Shit happens.');
})();
