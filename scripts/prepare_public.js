import { exec } from 'child_process';

exec('node ./scripts/compile_scss.js', (err, stdout) => {
  if (err) console.error(err);
  else console.log(stdout);
});

exec('node ./scripts/copy_files.js', (err, stdout) => {
  if (err) console.error(err);
  else console.log(stdout);
});