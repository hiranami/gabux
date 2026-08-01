async function main() {
    console.log("Test getNode...");
    const node = await framer.agent.getNode({ id: "augiA20Il" });
    console.log("NODE:", JSON.stringify(node, null, 2).slice(0, 2000));
}
main().catch(err => console.error("ERR:", err));
