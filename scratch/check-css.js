import fs from 'fs';
import path from 'path';

const cssPath = 'e:/lithos-agency/dist/assets/index-SrEWiNTD.css';
const css = fs.readFileSync(cssPath, 'utf8');

const targets = [
  '\\.grid',
  '\\.grid-cols-1',
  '\\.lg\\\\:grid-cols-12',
  '\\.lg\\\\:col-span-5',
  '\\.lg\\\\:col-span-7'
];

targets.forEach((pattern) => {
  const regex = new RegExp(`${pattern}[^{]*{[^}]*}`, 'g');
  const matches = css.match(regex);
  console.log(`=== Matches for pattern: ${pattern} ===`);
  if (matches) {
    matches.forEach(m => console.log(m));
  } else {
    console.log('No matches found.');
  }
});
