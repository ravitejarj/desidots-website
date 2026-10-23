// Stops a PRODUCTION build while the legal pages still contain draft notes, so an unfinished policy can never go live by accident.
// Use `npm run build:preview` for a private preview that is allowed to contain drafts.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../src/content/legal/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const patterns = [/\[DECIDE[^\]]*\]/g, /\[EFFECTIVE DATE\]/g, /DRAFT:/g, /\[[A-Z ]{4,}\]/g];
let problems = 0;

for (const file of readdirSync(dir).filter(f => f.endsWith('.md'))) {
  const text = readFileSync(join(dir, file), 'utf8');
  const found = new Set();
  for (const re of patterns) for (const m of text.matchAll(re)) found.add(m[0].slice(0, 70));
  if (found.size) {
    problems += found.size;
    console.log(`\n${file}`);
    for (const f of found) console.log(`   ${f}`);
  }
}

if (problems && !process.env.ALLOW_DRAFT) {
  console.error(`\nNot building: ${problems} draft note(s) are still in the legal pages (listed above).`);
  console.error('Finish them, or run "npm run build:preview" for a private preview.\n');
  process.exit(1);
}
console.log(problems ? `\n${problems} draft note(s) remain (preview build allowed).\n` : 'Legal pages are free of draft notes.');
