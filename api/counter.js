// Vercel Serverless Function: Secured & Protected Real-Time Counter API
let globalVisits = 1;
let globalClaps = 0;
const visitedIPs = new Set();
const clappedIPs = new Set();

// External persistent DB endpoint kept strictly server-side (hidden from client)
const DB_NAME = 'gabux_v1012_ip_sync';
const DB_BASE_URL = `https://api.counterapi.dev/v1/${DB_NAME}`;

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
            // Count visit ONLY if client IP is unique
            if (!visitedIPs.has(clientIp)) {
                visitedIPs.add(clientIp);
                const r = await fetch(`${DB_BASE_URL}/visits/up?t=${ts}`, { cache: 'no-store' });
                if (r.ok) {
                    const data = await r.json();
                    if (data && typeof data.count === 'number') globalVisits = data.count;
                } else {
                    globalVisits++;
                }
            } else {
                // Return current visit count without incrementing
                const rV = await fetch(`${DB_BASE_URL}/visits?t=${ts}`, { cache: 'no-store' });
                if (rV.ok) {
                    const dV = await rV.json();
                    if (dV && typeof dV.count === 'number') globalVisits = dV.count;
                }
            }
        } else if (action === 'clap') {
            // Count clap ONLY ONCE PER UNIQUE IP (no unclapping/resetting)
            if (!clappedIPs.has(clientIp)) {
                clappedIPs.add(clientIp);
                const r = await fetch(`${DB_BASE_URL}/claps/up?t=${ts}`, { cache: 'no-store' });
                if (r.ok) {
                    const data = await r.json();
                    if (data && typeof data.count === 'number') globalClaps = data.count;
                } else {
                    globalClaps++;
                }
            } else {
                // Fetch current clap count without incrementing again
                const rC = await fetch(`${DB_BASE_URL}/claps?t=${ts}`, { cache: 'no-store' });
                if (rC.ok) {
                    const dC = await rC.json();
                    if (dC && typeof dC.count === 'number') globalClaps = dC.count;
                }
            }
        } else {
            // Sync live totals
            const rV = await fetch(`${DB_BASE_URL}/visits?t=${ts}`, { cache: 'no-store' });
            if (rV.ok) {
                const dV = await rV.json();
                if (dV && typeof dV.count === 'number') globalVisits = dV.count;
            }
            const rC = await fetch(`${DB_BASE_URL}/claps?t=${ts}`, { cache: 'no-store' });
            if (rC.ok) {
                const dC = await rC.json();
                if (dC && typeof dC.count === 'number') globalClaps = dC.count;
            }
        }
    } catch (err) {}

    return res.status(200).json({
        visits: Math.max(1, globalVisits),
        claps: Math.max(0, globalClaps),
        hasClapped: clappedIPs.has(clientIp)
    });
}
