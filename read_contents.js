async function main() {
    const pageNode = await framer.agent.getNode({ id: "augiA20Il" });

    function collectTexts(node, textList = []) {
        if (!node) return textList;

        if (node.type === 'TextNode' || node.type === 'RichTextNode') {
            const txt = node.attributes?.text || node.attributes?.content || node.name;
            if (txt && typeof txt === 'string' && txt.trim()) {
                textList.push(txt.trim());
            }
        }

        if (Array.isArray(node.children)) {
            for (const child of node.children) {
                collectTexts(child, textList);
            }
        }
        return textList;
    }

    const breakpoints = pageNode.children || [];
    console.log(`=== ANÁLISE DE CONTEÚDO DOS BREAKPOINTS E FRAMES ===\n`);

    breakpoints.forEach((bp, i) => {
        const texts = collectTexts(bp);
        const attrs = bp.attributes || {};
        console.log(`--------------------------------------------------`);
        console.log(`BREAKPOINT / FRAME PRINCIPAL #${i + 1}`);
        console.log(`Nome: "${bp.name}" | ID: ${bp.id} | Width: ${attrs.width}`);
        console.log(`Total de elementos de texto extraídos: ${texts.length}`);
        console.log(`Amostra dos textos lidos:`);
        const sample = texts.slice(0, 15);
        sample.forEach(t => console.log(`  • "${t.replace(/\n/g, ' ')}"`));
        if (texts.length > 15) {
            console.log(`  ... e mais ${texts.length - 15} trechos de texto.`);
        }
    });
}

main().catch(err => console.error(err));
