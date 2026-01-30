const fs = require('fs');
const s = fs.readFileSync('src/pages/tools/json-diff.astro', 'utf8');
for (let i = 0; i < s.length; i++) {
  const c = s.charCodeAt(i);
  if (c > 127 || (c < 32 && c !== 9 && c !== 10 && c !== 13)) {
    const start = Math.max(0, i - 40);
    const end = Math.min(s.length, i + 40);
    console.log('pos', i, 'code', c, 'char', JSON.stringify(s[i]));
    console.log('context:', JSON.stringify(s.slice(start, end)));
  }
}
console.log('done');