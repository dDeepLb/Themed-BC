import { build } from 'esbuild';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';
import copy from 'esbuild-copy-files-plugin';
import fs from 'fs';

(async () => {
    const serverPath = 'http://127.0.0.1:1001/dist';

    await build({
        entryPoints: ['./src/Themed.ts'],
        outfile: './dist/themed.js',
        format: 'iife',
        globalName: 'Themed',
        bundle: true,
        sourcemap: true,
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
            `(() => {\nconst serverUrl = '${serverPath}';`
        );
        fs.writeFileSync('./dist/themed.js', bundleContent);
    }).catch((error) => {
        process.exit(1);
    });
})();
