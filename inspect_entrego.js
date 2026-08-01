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
      
      // Find layout-web section
      function findNode(node, name) {
        if (node.name && node.name.toLowerCase().includes(name.toLowerCase())) return node;
        if (node.children) {
          for (const child of node.children) {
            const found = findNode(child, name);
            if (found) return found;
          }
        }
        return null;
      }

      const layoutWeb = findNode(document, 'layout-web');
      console.log('layoutWeb found:', layoutWeb ? layoutWeb.name : 'null');
      
      if (layoutWeb) {
        const entregoSection = findNode(layoutWeb, 'O QUE ENTREGO') || findNode(layoutWeb, '3-');
        console.log('entregoSection found:', entregoSection ? entregoSection.name : 'null');
        
        if (entregoSection) {
          console.log(JSON.stringify(entregoSection, null, 2));
        }
      }
    } catch(e) {
      console.error(e);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
