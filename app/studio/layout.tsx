import { NextStudioLayout } from "next-sanity/studio";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NextStudioLayout>{children}</NextStudioLayout>
            </body>
        </html>
    );
}
