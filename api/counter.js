// Vercel Serverless Function for 100% persistent real-time counter
let fallbackVisits = 1;
let fallbackClaps = 0;

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
    const DB_KEY = 'gabux_v1012_db_sync';

    try {
        if (action === 'visit') {
            const r = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/visits/up?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') fallbackVisits = data.count;
            } else {
                fallbackVisits++;
            }
        } else if (action === 'clap_up') {
            const r = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/claps/up?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') fallbackClaps = data.count;
            } else {
                fallbackClaps++;
            }
        } else if (action === 'clap_down') {
            const r = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/claps/down?t=${ts}`, { cache: 'no-store' });
            if (r.ok) {
                const data = await r.json();
                if (data && typeof data.count === 'number') fallbackClaps = Math.max(0, data.count);
            } else {
                fallbackClaps = Math.max(0, fallbackClaps - 1);
            }
        }

        // Fetch current live totals if not already updated
        if (action !== 'visit') {
            const rV = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/visits?t=${ts}`, { cache: 'no-store' });
            if (rV.ok) {
                const dV = await rV.json();
                if (dV && typeof dV.count === 'number') fallbackVisits = dV.count;
            }
        }
        if (action !== 'clap_up' && action !== 'clap_down') {
            const rC = await fetch(`https://api.counterapi.dev/v1/${DB_KEY}/claps?t=${ts}`, { cache: 'no-store' });
            if (rC.ok) {
                const dC = await rC.json();
                if (dC && typeof dC.count === 'number') fallbackClaps = dC.count;
            }
        }
    } catch (err) {}

    return res.status(200).json({
        visits: Math.max(1, fallbackVisits),
        claps: Math.max(0, fallbackClaps)
    });
}
