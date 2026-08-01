async function main() {
    const pageNode = await framer.agent.getNode({ id: "augiA20Il" });

    const frames1440 = [];
    const frames402 = [];
    const otherWidthFrames = [];

    function traverse(node, path = []) {
        if (!node) return;

        const currentPath = [...path, `${node.name || node.type} (${node.id})`].join(' > ');
        const attrs = node.attributes || {};
        const width = attrs.width || attrs.style?.width;

        // Extract text if present
        let textContent = null;
        if (node.type === 'TextNode' || node.type === 'RichTextNode') {
            textContent = node.attributes?.text || node.attributes?.content || node.name;
        }

        const nodeInfo = {
            id: node.id,
            type: node.type,
            name: node.name,
            width: width,
            height: attrs.height,
            path: currentPath,
            attributes: attrs,
            hasText: textContent
        };

        if (width === '1440px' || width === 1440 || width === '1440') {
            frames1440.push(nodeInfo);
        } else if (width === '402px' || width === 402 || width === '402') {
            frames402.push(nodeInfo);
        } else if (width && (node.type === 'FrameNode' || node.type === 'StackNode' || node.type === 'ComponentNode')) {
            otherWidthFrames.push(nodeInfo);
        }

        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                traverse(child, [...path, `${node.name || node.type}`]);
            }
        }
    }

    traverse(pageNode);

    console.log("=== RESUMO DE FRAMES ===");
    console.log(`Quantidade de frames com width 1440px: ${frames1440.length}`);
    console.log(`Quantidade de frames com width 402px: ${frames402.length}`);
    console.log(`Quantidade de outros frames com largura definida: ${otherWidthFrames.length}`);

    console.log("\n=== DETALHES DOS FRAMES DE 1440px ===");
    frames1440.forEach((f, i) => {
        console.log(`[1440px #${i+1}] ID: ${f.id} | Nome: "${f.name}" | Tipo: ${f.type} | Caminho: ${f.path}`);
    });

    console.log("\n=== DETALHES DOS FRAMES DE 402px ===");
    frames402.forEach((f, i) => {
        console.log(`[402px #${i+1}] ID: ${f.id} | Nome: "${f.name}" | Tipo: ${f.type} | Caminho: ${f.path}`);
    });

    console.log("\n=== OUTROS FRAMES (Breakpoints / Containers) ===");
    otherWidthFrames.forEach((f, i) => {
        console.log(`[Other #${i+1}] ID: ${f.id} | Width: ${f.width} | Nome: "${f.name}" | Tipo: ${f.type}`);
    });
}

main().catch(err => console.error("ERR:", err));
