// Vercel Serverless Function: Secured & Protected Real-Time Counter API (Instant Response)
let globalVisits = 1;
let globalClaps = 0;
const visitedIPs = new Set();
const clappedIPs = new Set();

// External persistent DB endpoint kept strictly server-side (hidden from client)
const DB_NAME = 'gabux_v1012_ip_sync';
const DB_BASE_URL = `https://api.counterapi.dev/v1/${DB_NAME}`;

// Initial background sync on server cold start
(async () => {
    try {
        const rV = await fetch(`${DB_BASE_URL}/visits`, { cache: 'no-store' });
        if (rV.ok) {
            const dV = await rV.json();
            if (dV && typeof dV.count === 'number') globalVisits = Math.max(globalVisits, dV.count);
        }
        const rC = await fetch(`${DB_BASE_URL}/claps`, { cache: 'no-store' });
        if (rC.ok) {
            const dC = await rC.json();
            if (dC && typeof dC.count === 'number') globalClaps = Math.max(globalClaps, dC.count);
        }
    } catch (e) {}
})();

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

    if (action === 'visit') {
        if (!visitedIPs.has(clientIp)) {
            visitedIPs.add(clientIp);
            globalVisits++;
            // Async non-blocking remote sync
            fetch(`${DB_BASE_URL}/visits/up?t=${ts}`, { cache: 'no-store' }).then(r => r.json()).then(data => {
                if (data && typeof data.count === 'number') globalVisits = Math.max(globalVisits, data.count);
            }).catch(() => {});
        }
    } else if (action === 'clap') {
        if (!clappedIPs.has(clientIp)) {
            clappedIPs.add(clientIp);
            globalClaps++;
            // Async non-blocking remote sync
            fetch(`${DB_BASE_URL}/claps/up?t=${ts}`, { cache: 'no-store' }).then(r => r.json()).then(data => {
                if (data && typeof data.count === 'number') globalClaps = Math.max(globalClaps, data.count);
            }).catch(() => {});
        }
    }

    // Return instant HTTP 200 response with zero network delay
    return res.status(200).json({
        visits: Math.max(1, globalVisits),
        claps: Math.max(0, globalClaps),
        hasClapped: clappedIPs.has(clientIp)
    });
}
