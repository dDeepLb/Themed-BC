import { defineConfig } from 'bc-deeplib/build';

export default defineConfig({
  entry: 'Themed.ts',
  outfile: 'themed.js',
  globalName: 'Themed',
  distDirName: 'dist',
  publicDirName: 'public',
  scripts: ['./scripts/compile_scss.js', './scripts/copy_files.js'],
  prodRemoteURL: 'https://ddeeplb.github.io/Themed-BC',
  devRemoteURL: 'https://ddeeplb.github.io/Themed-BC/dev',
  target: ['es2020'],
  plugins: [],
  defines: {},
  host: 'localhost',
  port: 45001,
});