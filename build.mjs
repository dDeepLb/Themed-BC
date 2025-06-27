import { build, context } from 'esbuild';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';
import simpleGit from 'simple-git';
import { readFileSync } from 'fs';
import { exec } from 'child_process';
import { watch } from 'chokidar';
import { promisify } from 'util';

const execAsync = promisify(exec);

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
    treeShaking: true,
    keepNames: true,
    define: {
      PUBLIC_URL: JSON.stringify(PUBLIC_URL),
      MOD_VERSION: JSON.stringify(packageJson.version),
      VERSION_HASH: JSON.stringify(VERSION_HASH),
      IS_DEVEL: JSON.stringify(IS_DEVEL),
    },
    plugins: [
      progress(),
      time(),
    ],
  };

  if (isLocal) {
    const ctx = await context(buildOptions);

    await runBuild();
    watch(['./src', './public']).on('change', async () => {
      await runBuild();
    });

    console.info('Watching for changes...');

    const server = await ctx.serve({ host: HOST, port: PORT, servedir: 'dist' });
    console.info(`Server running at ${server.host}:${server.port}`);

    return;
  }

  runBuild();
  
  async function runBuild() {
    await build(buildOptions);

    try {
      const { stdout } = await execAsync('node ./scripts/prepare_public.js');
      console.log(stdout);
    } catch (err) {
      console.error(err);
    }
  }
})();
