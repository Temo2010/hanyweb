const { mkdirSync, copyFileSync, existsSync } = require('fs');
const { dirname, join } = require('path');

const distServerDir = join(process.cwd(), 'dist', 'server');
const targetFile = join(distServerDir, 'server.js');
const sourceFile = join(distServerDir, 'index.mjs');

if (!existsSync(sourceFile)) {
  console.error(`Expected built entry not found: ${sourceFile}`);
  process.exit(1);
}

mkdirSync(dirname(targetFile), { recursive: true });
copyFileSync(sourceFile, targetFile);
console.log(`Created shim: ${targetFile}`);
