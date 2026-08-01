const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

setTimeout(() => {
  const options = {
    hostname: 'api.figma.com',
    path: `/v1/files/${fileKey}/nodes?ids=106:87`,
    headers: {
      'X-Figma-Token': figmaToken,
      'User-Agent': 'Node.js'
    }
  };

  https.get(options, (res) => {
    console.log('Status code:', res.statusCode);
    const chunks = [];
    res.on('data', chunk => chunks.push(chunk));
    res.on('end', () => {
      const body = Buffer.concat(chunks).toString('utf8');
      try {
        const json = JSON.parse(body);
        console.log(JSON.stringify(json, null, 2));
      } catch(e) {
        console.log('Body:', body.slice(0, 300));
      }
    });
  });
}, 3000);
