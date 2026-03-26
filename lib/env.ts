if (!process.env.NEXT_PUBLIC_FORMSPREE_URL) {
    console.warn("[config] NEXT_PUBLIC_FORMSPREE_URL is not set - contact form will not work");
}
if (!process.env.NEXT_PUBLIC_EMAIL) {
    console.warn("[config] NEXT_PUBLIC_EMAIL is not set - mailto link will not work");
}