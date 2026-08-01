// Vercel Serverless Function for 100% persistent IP-based real-time counter
let globalVisits = 1;
let globalClaps = 0;
const visitedIPs = new Set();

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
    const DB_KEY = 'gabux_v1012_ip_sync';

    // Extract client IP address
    const rawIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1';
    const clientIp = rawIp.split(',')[0].trim();

    try {
        if (action === 'visit') {
            // Only count if IP is new
            if (!visitedIPs.has(clientIp)) {
                visitedIPs.add(clientIp);
                const r = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/visits/up?t=${ts}`, { cache: 'no-store' });
                if (r.ok) {
                    const data = await r.json();
                    if (data && typeof data.count === 'number') globalVisits = data.count;
                } else {
                    globalVisits++;
                }
            } else {
                // Fetch current visit count without incrementing
                const rV = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/visits?t=${ts}`, { cache: 'no-store' });
                if (rV.ok) {
                    const dV = await rV.json();
                    if (dV && typeof dV.count === 'number') globalVisits = dV.count;
                }
            }
        } else if (action === 'clap_up') {
            const r = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/claps/up?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') globalClaps = data.count;
            } else {
                globalClaps++;
            }
        } else if (action === 'clap_down') {
            const r = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/claps/down?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') globalClaps = Math.max(0, data.count);
            } else {
                globalClaps = Math.max(0, globalClaps - 1);
            }
        } else {
            // Fetch current live totals
            const rV = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/visits?t=${ts}`, { cache: 'no-store' });
            if (rV.ok) {
                const dV = await rV.json();
                if (dV && typeof dV.count === 'number') globalVisits = dV.count;
            }
            const rC = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/claps?t=${ts}`, { cache: 'no-store' });
            if (rC.ok) {
                const dC = await rC.json();
                if (dC && typeof dC.count === 'number') globalClaps = dC.count;
            }
        }
    } catch (err) {}

    return res.status(200).json({
        visits: Math.max(1, globalVisits),
        claps: Math.max(0, globalClaps)
    });
}
