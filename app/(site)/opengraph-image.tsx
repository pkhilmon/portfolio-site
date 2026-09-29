import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { HEADER_TITLE, JOB_TITLE } from "@/lib/constants";

// Satori cannot read CSS variables — values mirror :root / [data-theme="indigo"] in app/globals.css
const COLORS = {
  background: "#ffffff",
  foreground: "#111827",
  accent: "#4f46e5",
} as const;

export const alt = `${HEADER_TITLE} — ${JOB_TITLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontDir = join(process.cwd(), "assets", "fonts");
  const [semiBold, bold] = await Promise.all([
    readFile(join(fontDir, "Inter-SemiBold.ttf")),
    readFile(join(fontDir, "Inter-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          backgroundColor: COLORS.background,
          color: COLORS.foreground,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: COLORS.accent,
          }}
        >
          {JOB_TITLE}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          {HEADER_TITLE}
        </div>
        <div
          style={{
            marginTop: 48,
            width: 160,
            height: 12,
            borderRadius: 6,
            backgroundColor: COLORS.accent,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: semiBold, weight: 600, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
