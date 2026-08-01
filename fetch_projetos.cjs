const https = require('https');
const fs = require('fs');

const token = "figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl";
const fileKey = "6Z9FnHRzbhgRQiah2hWnGt";

console.log("Waiting 30 seconds to bypass Figma API rate limit...");
setTimeout(() => {
    const options = {
        hostname: 'api.figma.com',
        path: `/v1/files/${fileKey}`,
        headers: { 'X-Figma-Token': token }
    };

    https.get(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const parsed = JSON.parse(data);
                if (parsed.err) {
                    console.log("Figma Error:", parsed.err);
                    return;
                }
                const doc = parsed.document;
                fs.writeFileSync('figma_full.json', JSON.stringify(doc, null, 2));
                console.log("Full Figma Document Saved to figma_full.json!");
            } catch(e) {
                console.log("Parse Error:", e.message);
            }
        });
    }).on('error', err => console.log("HTTP Error:", err.message));
}, 30000);
