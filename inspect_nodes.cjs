const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

// Let's query specific node IDs around 106:
const nodeIds = ['106:87', '106:86', '106:85', '106:90', '106:91', '106:92', '106:88', '106:89', '232:281'];

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${fileKey}/nodes?ids=${nodeIds.join(',')}`,
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
      console.log('Nodes found:');
      for (const id in json.nodes) {
        const node = json.nodes[id];
        if (node && node.document) {
          console.log(`Node ID ${id}: "${node.document.name}" (${node.document.type})`);
          printTree(node.document, 1);
        }
      }
    } catch(e) {
      console.error('JSON parse error:', e.message);
    }
  });
});

function printTree(node, depth = 0) {
  if (!node) return;
  const indent = '  '.repeat(depth);
  if (node.type === 'TEXT') {
    console.log(`${indent}[TEXT] "${node.name}": "${node.characters}"`);
  } else {
    console.log(`${indent}[${node.type}] "${node.name}"`);
  }
  if (node.children) {
    node.children.forEach(c => printTree(c, depth + 1));
  }
}
