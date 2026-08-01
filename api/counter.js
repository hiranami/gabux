// Vercel Serverless Function: Guaranteed Persistent Real-Time Counter API
const DB_NAME = 'gabux_v1012_official_prod';
const DB_BASE_URL = `https://api.counterapi.dev/v1/${DB_NAME}`;

let serverVisitsCache = null;
let serverClapsCache = null;

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { action } = req.query || {};
    const ts = Date.now();

    try {
        if (action === 'visit') {
            const r = await fetch(`${DB_BASE_URL}/visits/up?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') serverVisitsCache = data.count;
            }
        } else if (action === 'clap_up') {
            const r = await fetch(`${DB_BASE_URL}/claps/up?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') serverClapsCache = data.count;
            }
        } else if (action === 'clap_down') {
            const r = await fetch(`${DB_BASE_URL}/claps/down?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') serverClapsCache = Math.max(0, data.count);
            }
        }

        // Always query current counts if cache is empty or for general poll
        if (serverVisitsCache === null || action !== 'visit') {
            const rV = await fetch(`${DB_BASE_URL}/visits?t=${ts}`, { cache: 'no-store' });
            if (rV.ok) {
                const dV = await rV.json();
                if (dV && typeof dV.count === 'number') serverVisitsCache = dV.count;
            }
        }
        if (serverClapsCache === null || (action !== 'clap_up' && action !== 'clap_down')) {
            const rC = await fetch(`${DB_BASE_URL}/claps?t=${ts}`, { cache: 'no-store' });
            if (rC.ok) {
                const dC = await rC.json();
                if (dC && typeof dC.count === 'number') serverClapsCache = Math.max(0, dC.count);
            }
        }
    } catch (err) {}

    return res.status(200).json({
        visits: serverVisitsCache !== null ? serverVisitsCache : 1,
        claps: serverClapsCache !== null ? serverClapsCache : 0
    });
}
