const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${fileKey}`,
  headers: {
    'X-Figma-Token': figmaToken
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const document = json.document;
      
      console.log('Document children:');
      if (document && document.children) {
        document.children.forEach(canvas => {
          console.log(`Canvas: ${canvas.name}`);
          if (canvas.children) {
            canvas.children.forEach(c => {
              console.log(`  - Frame/Node: "${c.name}" (id: ${c.id})`);
            });
          }
        });
      }
    } catch(e) {
      console.error(e);
    }
  });
});
