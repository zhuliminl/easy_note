/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const fs = require('fs');

let directory_name = './icons';

let filenames = fs.readdirSync(directory_name);

filenames.forEach((file) => {
  const name = file.split('.')[0];
  const pname = 'Icon' + name.slice(0, name.length - 4);
  const pan = `export { ${name} as ${pname} } from './icons/${name}'`;
  console.log(pan);
});

// rm -rf index.tsx && node cli-index.js >> index.tsx
