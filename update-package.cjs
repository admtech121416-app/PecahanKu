const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.devDependencies.tsx = "4.19.3";
delete pkg.overrides;
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
