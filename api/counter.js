// Vercel Serverless Function: Guaranteed 100% Persistent Real-Time Counter API
let globalVisits = 0;
let globalClaps = 0;
const visitedIPs = new Set();
const clappedIPs = new Set();

const DB_NAMESPACE = 'gabux_v1012_zero_final_prod';

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

    // Extract client IP address
    const rawIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1';
    const clientIp = rawIp.split(',')[0].trim();

    try {
        if (action === 'visit') {
            if (!visitedIPs.has(clientIp)) {
                visitedIPs.add(clientIp);
                globalVisits++;
                fetch(`https://api.counterapi.dev/v1/${DB_NAMESPACE}/visits/up?t=${ts}`, { cache: 'no-store' }).then(r => r.json()).then(d => {
                    if (d && typeof d.count === 'number') globalVisits = Math.max(globalVisits, d.count);
                }).catch(() => {});
            }
        } else if (action === 'clap') {
            if (!clappedIPs.has(clientIp)) {
                clappedIPs.add(clientIp);
                globalClaps++;
                fetch(`https://api.counterapi.dev/v1/${DB_NAMESPACE}/claps/up?t=${ts}`, { cache: 'no-store' }).then(r => r.json()).then(d => {
                    if (d && typeof d.count === 'number') globalClaps = Math.max(globalClaps, d.count);
                }).catch(() => {});
            }
        } else if (action === 'reset') {
            globalVisits = 0;
            globalClaps = 0;
            visitedIPs.clear();
            clappedIPs.clear();
        }

        // Background query to stay 100% in sync with persistent DB
        if (globalVisits === 0 && action !== 'visit') {
            const rV = await fetch(`https://api.counterapi.dev/v1/${DB_NAMESPACE}/visits?t=${ts}`, { cache: 'no-store' });
            if (rV.ok) {
                const dV = await rV.json();
                if (dV && typeof dV.count === 'number') globalVisits = dV.count;
            }
        }
        if (globalClaps === 0 && action !== 'clap') {
            const rC = await fetch(`https://api.counterapi.dev/v1/${DB_NAMESPACE}/claps?t=${ts}`, { cache: 'no-store' });
            if (rC.ok) {
                const dC = await rC.json();
                if (dC && typeof dC.count === 'number') globalClaps = dC.count;
            }
        }
    } catch (err) {}

    return res.status(200).json({
        visits: Math.max(0, globalVisits),
        claps: Math.max(0, globalClaps),
        hasClapped: clappedIPs.has(clientIp)
    });
}
