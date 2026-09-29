if (!process.env.RESEND_API_KEY) {
    console.warn("[config] RESEND_API_KEY is not set - contact form will not work");
}
if (!process.env.CONTACT_EMAIL) {
    console.warn("[config] CONTACT_EMAIL is not set - contact form email delivery will not work");
}
if (!process.env.NEXT_PUBLIC_CONTACT_EMAIL) {
    console.warn("[config] NEXT_PUBLIC_CONTACT_EMAIL is not set - mailto link will not work");
}
if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.warn("[config] NEXT_PUBLIC_SITE_URL is not set - SEO metadata will use fallback URL");
}

// Trailing slash trimmed so `${SITE_URL}/path` never yields a double slash
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ??
    'https://pavlokhilmon.com').replace(/\/+$/, '');
