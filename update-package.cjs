const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.devDependencies.esbuild = "^0.25.0";
pkg.overrides = {
  "esbuild": "^0.25.0"
};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
