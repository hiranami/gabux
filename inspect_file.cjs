const https = require('https');

const fileKey = '6Z9FnHRzbhgRQiah2hWnGt';
const figmaToken = 'figd_7avxRwCuggIbnbRFcMR8xMZwVkR5gpEhhsGEXhBl';

console.log('Waiting 15 seconds to clear Figma API rate limit...');
setTimeout(() => {
  const options = {
    hostname: 'api.figma.com',
    path: `/v1/files/${fileKey}?depth=4`,
    headers: {
      'X-Figma-Token': figmaToken,
      'User-Agent': 'Mozilla/5.0'
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
        if (json.document) {
          findDeliverables(json.document);
        } else {
          console.log('No document in response:', body.slice(0, 200));
        }
      } catch(e) {
        console.error('Error:', e.message);
      }
    });
  });
}, 15000);

function findDeliverables(node) {
  if (!node) return;
  if (node.name && (node.name.includes('ENTREGO') || node.name.includes('3-') || node.name.includes('O QUE'))) {
    console.log('=== FOUND SECTION ===', node.name, node.id);
    printNode(node, 0);
  }
  if (node.children) {
    node.children.forEach(c => findDeliverables(c));
  }
}

function printNode(node, depth) {
  const indent = '  '.repeat(depth);
  if (node.type === 'TEXT') {
    console.log(`${indent}[TEXT] "${node.name}": "${node.characters}"`);
  } else {
    console.log(`${indent}[${node.type}] "${node.name}"`);
  }
  if (node.children) {
    node.children.forEach(c => printNode(c, depth + 1));
  }
}
