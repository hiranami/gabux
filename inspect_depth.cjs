const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${fileKey}?depth=3`,
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
      console.log('Figma name:', json.name);
      function printTree(node, depth = 0) {
        if (!node) return;
        const indent = '  '.repeat(depth);
        console.log(`${indent}[${node.type}] "${node.name}" (${node.id})`);
        if (node.children) {
          node.children.forEach(c => printTree(c, depth + 1));
        }
      }
      printTree(json.document);
    } catch(e) {
      console.error(e);
    }
  });
});
