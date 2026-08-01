async function main() {
    const pageNode = await framer.agent.getNode({ id: "augiA20Il" });

    function getTreeText(node) {
        if (!node) return [];
        let results = [];

        if (node.type === 'TextNode' || node.type === 'RichTextNode') {
            const txt = node.attributes?.text || node.attributes?.content || node.name;
            if (txt && typeof txt === 'string' && txt.trim()) {
                results.push({ name: node.name, text: txt.trim() });
            }
        }

        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                results = results.concat(getTreeText(child));
            }
        }
        return results;
    }

    const breakpoints = pageNode.children || [];
    console.log("=== EXTRAÇÃO DE CONTEÚDO COMPLETO DOS PROJETOS NO FRAMER ===\n");

    breakpoints.forEach(bp => {
        console.log(`\n========================================`);
        console.log(`FRAME: "${bp.name}" (ID: ${bp.id})`);
        console.log(`========================================`);
        const textEntries = getTreeText(bp);
        textEntries.forEach(entry => {
            console.log(`[${entry.name}] -> "${entry.text.replace(/\n/g, ' ')}"`);
        });
    });
}

main().catch(err => console.error(err));
