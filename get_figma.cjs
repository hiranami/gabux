const https = require('https');
const fs = require('fs');

const token = "figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl";
const fileKey = "6Z9FnHRzbhgRQiah2hWnGt";

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
            fs.writeFileSync('figma_data.json', JSON.stringify(parsed, null, 2));
            console.log("Downloaded Figma Data!");
        } catch(e) {
            console.log("Parse Error:", e.message);
        }
    });
}).on('error', err => console.log("HTTP Error:", err.message));
