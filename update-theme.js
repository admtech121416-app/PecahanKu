const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Text colors
  content = content.replace(/text-slate-[78]00/g, 'text-text-main');
  content = content.replace(/text-slate-[456]00/g, 'text-text-muted');
  
  // Solid backgrounds to transparent ones
  content = content.replace(/bg-blue-50\b/g, 'bg-blue-500/10');
  content = content.replace(/bg-blue-100\b/g, 'bg-blue-500/20');
  content = content.replace(/bg-green-50\b/g, 'bg-green-500/10');
  content = content.replace(/bg-green-100\b/g, 'bg-green-500/20');
  content = content.replace(/bg-red-50\b/g, 'bg-red-500/10');
  content = content.replace(/bg-yellow-50\b/g, 'bg-yellow-500/10');
  content = content.replace(/bg-purple-50\b/g, 'bg-purple-500/10');
  content = content.replace(/bg-amber-100\b/g, 'bg-amber-500/20');
  content = content.replace(/bg-emerald-100\b/g, 'bg-emerald-500/20');
  content = content.replace(/bg-violet-100\b/g, 'bg-violet-500/20');
  content = content.replace(/bg-orange-100\b/g, 'bg-orange-500/20');
  content = content.replace(/bg-pink-100\b/g, 'bg-pink-500/20');
  
  content = content.replace(/bg-slate-50\b/g, 'bg-text-main/5');
  content = content.replace(/bg-slate-100\b/g, 'bg-text-main/10');
  
  // Borders
  content = content.replace(/border-slate-200/g, 'border-text-main/10');
  content = content.replace(/border-white(\/\d+)?/g, 'border-glass-border');
  
  // White backgrounds and gradients
  content = content.replace(/from-white\/\d+/g, 'from-glass-bg');
  content = content.replace(/bg-white\/[23456]0/g, 'bg-glass-bg');
  content = content.replace(/bg-white\/[789]0/g, 'bg-glass-hover');
  content = content.replace(/bg-white\b/g, 'bg-glass-bg');
  
  fs.writeFileSync(file, content);
});
console.log('Update complete.');
