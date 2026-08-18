const fs = require('fs');

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

function generateOptions(answer) {
    let opts = new Set([answer]);
    let count = 0;
    while (opts.size < 4 && count < 100) {
        let fake = answer;
        let nums = answer.match(/\d+/g);
        if (nums && nums.length > 0) {
            let idx = Math.floor(Math.random() * nums.length);
            let n = parseInt(nums[idx]);
            let diff = Math.floor(Math.random() * 8) - 3;
            if (diff === 0) diff = 1;
            let newN = n + diff;
            if (newN < 0) newN = Math.abs(diff);
            
            // replace ONLY the specific occurrence
            // to be safe, just replace the first match of that number
            fake = answer.replace(new RegExp(`\\b${nums[idx]}\\b`), newN.toString());
            // if still same, try replacing globally
            if (fake === answer) {
                fake = answer.replace(nums[idx], newN.toString());
            }
        } else {
            let fallbacks = ['Lani', 'Edo', 'Siti', 'Budi', 'Cabai A', 'Cabai B', 'Tali Biru', 'Tali Merah', 'Keduanya salah', 'Sama saja', 'Anton', 'Caca', 'Ayam pertama', 'Ayam kedua'];
            fake = fallbacks[Math.floor(Math.random()*fallbacks.length)];
        }
        if (fake !== answer) opts.add(fake);
        count++;
    }
    let fallbackIndex = 0;
    let extras = ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"];
    while(opts.size < 4) {
        opts.add(extras[fallbackIndex++]);
    }
    return Array.from(opts).sort(() => Math.random() - 0.5);
}

// Regex to handle both `answer: '...'` and `"answer": "..."`
// and handle `explanation` or `"explanation"`
content = content.replace(/(["']?)answer\1\s*:\s*(["'])(.*?)\2,\s*(["']?)explanation\4/g, (match, q1, q2, answerContent, q4) => {
    let opts = generateOptions(answerContent);
    // keep the original quoting style for `answer` key and value
    return `${q1}answer${q1}: ${q2}${answerContent}${q2},\n        ${q1}options${q1}: ${JSON.stringify(opts)},\n        ${q4}explanation${q4}`;
});

fs.writeFileSync('src/data/lessons.ts', content);
console.log('Lessons updated with options.');
