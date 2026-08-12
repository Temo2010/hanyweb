export default {
  async fetch(request, env) {
    try {
      // Try to serve a static asset directly from the ASSETS binding
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse && assetResponse.status !== 404) return assetResponse;
    } catch (e) {
      console.error('ASSETS fetch failed:', e && e.stack ? e.stack : e);
    }

    try {
      // SPA fallback: serve index.html for client-side routing
      const indexUrl = new URL('/index.html', request.url).toString();
      return await env.ASSETS.fetch(new Request(indexUrl, { method: 'GET' }));
    } catch (e) {
      console.error('ASSETS fallback failed:', e && e.stack ? e.stack : e);
      return new Response('Service temporarily unavailable', { status: 503 });
    }
  }
};
