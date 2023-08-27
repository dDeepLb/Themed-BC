const esbuild = require('esbuild');

(async () => {
  const startTime = Date.now();

  try {
    await esbuild.build({
      entryPoints: ['./src/DarkBC.ts'],
      bundle: true,
      outfile: './dist/dark-bc.js',
      format: 'iife',
      globalName: 'DarkBC'
    });

    const endTime = Date.now();
    const buildTime = endTime - startTime;

    console.log('\x1b[32m✔ Done in ' + buildTime + 'ms.\x1b[0m');
  } catch (error) {
    console.error('\x1b[31m✖ Build failed:', error, '\x1b[0m');
    process.exit(1);
  }
})();