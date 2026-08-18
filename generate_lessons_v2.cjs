const fs = require('fs');

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

// Update LessonExample interface to include options
if (!content.includes('options?: string[]')) {
    content = content.replace(
      /export interface LessonExample {/,
      "export interface LessonExample {\n  options?: string[];"
    );
}

function generateOptions(answer) {
    let opts = new Set([answer]);
    let count = 0;
    while (opts.size < 4 && count < 100) {
        let fake = answer;
        let r = Math.random();
        
        let nums = answer.match(/\d+/g);
        if (nums && nums.length > 0) {
            // randomly pick a number to change
            let idx = Math.floor(Math.random() * nums.length);
            let n = parseInt(nums[idx]);
            // change it by a random amount between -3 and +5, avoid 0 change
            let diff = Math.floor(Math.random() * 8) - 3;
            if (diff === 0) diff = 1;
            let newN = n + diff;
            if (newN < 0) newN = Math.abs(diff);
            
            fake = answer.replace(nums[idx], newN.toString());
        } else {
            let fallbacks = ['Lani', 'Edo', 'Siti', 'Budi', 'Cabai A', 'Cabai B', 'Tali Biru', 'Tali Merah', 'Keduanya salah', 'Sama saja', 'Jawaban tidak ada', 'Semua benar', 'Anton', 'Caca'];
            fake = fallbacks[Math.floor(Math.random()*fallbacks.length)];
        }
        
        if (fake !== answer) opts.add(fake);
        count++;
    }
    
    // If we still don't have 4, force add some generic ones
    let fallbackIndex = 0;
    let extras = ["A", "B", "C", "D", "E"];
    while(opts.size < 4) {
        opts.add(extras[fallbackIndex++]);
    }
    
    let arr = Array.from(opts);
    return arr.sort(() => Math.random() - 0.5);
}

// Remove old options if they exist (to allow rerunning cleanly)
// Actually we only need to replace if there isn't options already. 
// But let's just do a clean replace.
let modified = false;
content = content.replace(/answer:\s*'(.*?)',(\s*explanation)/g, (match, p1, p2) => {
    modified = true;
    let opts = generateOptions(p1);
    return `answer: '${p1}',\n        options: ${JSON.stringify(opts)},${p2}`;
});

if (modified) {
    fs.writeFileSync('src/data/lessons.ts', content);
    console.log('Lessons updated with multiple choice options.');
} else {
    console.log('No matches found for replacement.');
}
