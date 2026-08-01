const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${fileKey}?depth=1`,
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
    console.log('Body snippet:', body.slice(0, 300));
  });
});
