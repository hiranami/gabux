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
      
      function printTexts(node, depth = 0) {
        if (!node) return;
        const indent = '  '.repeat(depth);
        if (node.type === 'TEXT') {
          console.log(`${indent}[TEXT] "${node.name}": "${node.characters}"`);
        } else {
          if (node.name) console.log(`${indent}[${node.type}] ${node.name}`);
        }
        if (node.children) {
          for (const child of node.children) {
            printTexts(child, depth + 1);
          }
        }
      }

      function findNode(node, name) {
        if (!node) return null;
        if (node.name && typeof node.name === 'string' && node.name.toLowerCase().includes(name.toLowerCase())) return node;
        if (node.children && Array.isArray(node.children)) {
          for (const child of node.children) {
            const found = findNode(child, name);
            if (found) return found;
          }
        }
        return null;
      }

      const layoutWeb = findNode(document, 'layout-web');
      if (layoutWeb) {
        console.log('=== FOUND layout-web ===');
        const entregoSection = findNode(layoutWeb, '3-') || findNode(layoutWeb, 'entrego');
        if (entregoSection) {
          console.log('=== FOUND 3- O QUE ENTREGO ===');
          printTexts(entregoSection);
        } else {
          console.log('entregoSection not found in layoutWeb, listing top children:');
          if (layoutWeb.children) {
            layoutWeb.children.forEach(c => console.log(' - Child:', c.name, c.id, c.type));
          }
        }
      } else {
        console.log('layoutWeb not found');
      }
    } catch(e) {
      console.error(e);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
