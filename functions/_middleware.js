// Cloudflare Pages Edge Middleware — Canonical Domain Redirection
// Ensures babieblue.com is the STRICT, EXCLUSIVE primary domain.
// Automatically 301-redirects www.babieblue.com, babieblue.pages.dev,
// and all preview *.babieblue.pages.dev deployments to https://babieblue.com.

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Allow local development (localhost, 127.0.0.1) without redirecting
  if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
    return await context.next();
  }

  // If request arrives on any domain other than canonical apex babieblue.com:
  // (e.g. www.babieblue.com, babieblue.pages.dev, or any hash.babieblue.pages.dev)
  if (url.hostname !== 'babieblue.com') {
    url.hostname = 'babieblue.com';
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }

  return await context.next();
}
