This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Sanity checklist 
The checklist for this codebase, following the pattern:

1. Schema — new file in sanity/schemaTypes/<name>.ts (defineType/defineField, required-field validation). Add it to the array in sanity/schemaTypes/index.ts.

2. Studio structure — in sanity/structure.ts: if it's a singleton (like Hero/About), add a fixed-id entry like the existing ones and add the type name to SINGLETON_TYPES in
sanity.config.ts (locks delete/duplicate). If it's a collection (like Projects), it can list automatically or get an explicit sorted entry.

3. Type — add the shape to sanity/lib/types.ts.

4. Fetch function — new getX() in sanity/lib/queries.ts, same pattern as the others (tagged sanity-content, revalidate: false).

5. Wire into the homepage — add the fetch to the Promise.allSettled([...]) array in app/(site)/page.tsx, handle fulfilled/rejected, pass as props.

6. Section component — new components/sections/XSection.tsx, plain sync function taking content as props (no static import, 'use client' only if it needs interactivity).

7. Nav/anchor — if it's a navigable section, add an entry to SECTION_IDS/NAV_LINKS in lib/constants.ts.

8. Redeploy both halves — schema changes need sanity deploy (Studio) again, and the component/query/page changes need a normal push-to-main deploy (Next.js/Vercel).

9. Create + publish the content, then click "Publish to site" in Studio to bust the cache tag so it goes live.