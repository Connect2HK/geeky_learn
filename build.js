const fs = require('fs');
let html = fs.readFileSync('app.html', 'utf8');
html = html.replace('%%GEMINI_KEY%%', process.env.GEMINI_KEY || '');
fs.writeFileSync('app.html', html);
console.log('✅ Build complete');