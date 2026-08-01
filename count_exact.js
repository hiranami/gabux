async function main() {
    const pageNode = await framer.agent.getNode({ id: "augiA20Il" });

    const f1440 = [];
    const f402 = [];

    function search(node, path = "") {
        if (!node) return;
        const currentPath = path ? `${path} > ${node.name || node.type}` : `${node.name || node.type}`;
        const attrs = node.attributes || {};
        const w = attrs.width;

        if (w === '1440px' || w === 1440 || w === '1440') {
            f1440.push({ id: node.id, name: node.name, type: node.type, path: currentPath, attrs });
        }
        if (w === '402px' || w === 402 || w === '402') {
            f402.push({ id: node.id, name: node.name, type: node.type, path: currentPath, attrs });
        }

        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                search(child, currentPath);
            }
        }
    }

    search(pageNode);

    console.log(`=== RESULTADO FINAL DE CONTAGEM ===`);
    console.log(`TOTAL 1440px: ${f1440.length}`);
    console.log(`TOTAL 402px: ${f402.length}`);

    console.log(`\n--- LISTA DE FRAMES 1440px (${f1440.length}) ---`);
    f1440.forEach((item, i) => {
        console.log(`${i + 1}. Name: "${item.name}" | Type: ${item.type} | ID: ${item.id}`);
    });

    console.log(`\n--- LISTA DE FRAMES 402px (${f402.length}) ---`);
    f402.forEach((item, i) => {
        console.log(`${i + 1}. Name: "${item.name}" | Type: ${item.type} | ID: ${item.id}`);
    });
}

main().catch(err => console.error(err));
