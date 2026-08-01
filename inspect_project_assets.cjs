const fs = require('fs');
const path = require('path');

const filesDir = 'C:\\Users\\gabri\\.gemini\\antigravity\\scratch\\portfolio-gabux\\files';
const itemsInFiles = fs.readdirSync(filesDir);

// Find all directories matching 'Projeto'
const projectFolders = itemsInFiles.filter(name => name.startsWith('Projeto'));

function listRecursive(dir, level = 0) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        const indent = "  ".repeat(level);
        if (stat.isDirectory()) {
            console.log(`${indent}[DIR] ${item}`);
            listRecursive(fullPath, level + 1);
        } else {
            console.log(`${indent}  - ${item} (${(stat.size / 1024).toFixed(1)} KB)`);
        }
    }
}

for (const folder of projectFolders) {
    console.log(`\n=== FOLDER: ${folder} ===`);
    listRecursive(path.join(filesDir, folder), 1);
}
