if (!process.env.NEXT_PUBLIC_FORMSPREE_URL) {
    console.warn("[config] NEXT_PUBLIC_FORMSPREE_URL is not set - contact form will not work");
}
if (!process.env.NEXT_PUBLIC_EMAIL) {
    console.warn("[config] NEXT_PUBLIC_EMAIL is not set - mailto link will not work");
}
if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.warn("[config] NEXT_PUBLIC_SITE_URL is not set - SEO metadata will use fallback URL");
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ??
    'https://portfolio-site-pi-weld.vercel.app';  