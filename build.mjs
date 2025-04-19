import { build, context } from 'esbuild';
import copy from 'esbuild-copy-files-plugin';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';
import simpleGit from 'simple-git';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

(async () => {
  /* if built on GitHub */
  const isRemote = !!process.env.environment;
  const isDev = process.env.environment === 'development';
  const prodPath = 'https://ddeeplb.github.io/Themed-BC';
  const devPath = `${prodPath}/dev`;
  const remotePath = isDev ? devPath : prodPath;

  const PORT = 45001;
  const HOST = 'localhost';
  const localPath = `http://${HOST}:${PORT}`;
  const isLocal = process.argv.includes('--dev') || !isRemote;

  const PUBLIC_URL = `${isLocal ? localPath : remotePath}/public`;

  const git = simpleGit();
  const LAST_COMMIT_HASH = (await git.log({ maxCount: 1 }));
  const VERSION_HASH = LAST_COMMIT_HASH.latest.hash.substring(0, 8);

  const IS_DEVEL = isDev || isLocal;

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
    define: {
      PUBLIC_URL: JSON.stringify(PUBLIC_URL),
      MOD_VERSION: JSON.stringify(packageJson.version),
      LAST_COMMIT_HASH: JSON.stringify(LAST_COMMIT_HASH),
      VERSION_HASH: JSON.stringify(VERSION_HASH),
      IS_DEVEL: JSON.stringify(IS_DEVEL),
    },
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

  if (isLocal && process.argv.includes('--dev')) {
    const ctx = await context(buildOptions);

    await ctx.watch();
    console.info('Watching for changes...');

    const server = await ctx.serve({ host: HOST, port: PORT, servedir: 'dist' });
    console.info(`Server running at ${server.host}:${server.port}`);

    return;
  }
  
  await build(buildOptions)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
})();
