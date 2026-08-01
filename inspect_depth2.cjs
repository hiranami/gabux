const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${fileKey}?depth=2`,
  headers: {
    'X-Figma-Token': figmaToken
  }
};

https.get(options, (res) => {
  const chunks = [];
  res.on('data', chunk => chunks.push(chunk));
  res.on('end', () => {
    try {
      const body = Buffer.concat(chunks).toString('utf8');
      const json = JSON.parse(body);
      console.log('File name:', json.name);
      if (json.document && json.document.children) {
        json.document.children.forEach(canvas => {
          console.log(`Canvas ID: ${canvas.id}, Name: "${canvas.name}"`);
          if (canvas.children) {
            canvas.children.forEach(c => {
              console.log(`   Child ID: ${c.id}, Name: "${c.name}", Type: ${c.type}`);
            });
          }
        });
      }
    } catch(e) {
      console.error('Error:', e.message);
    }
  });
});
