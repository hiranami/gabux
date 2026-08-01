async function main() {
    const root = await framer.getCanvasRoot();
    console.log("ROOT:", root);
}
main().catch(err => console.error(err));
