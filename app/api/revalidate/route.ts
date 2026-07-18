import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { revalidateSecret } from "@/sanity/lib/env";

const COOLDOWN_MS = 10_000;
let lastRevalidatedAt = 0;

function corsOrigin(req: Request): string | null {
    const origin = req.headers.get("origin");
    if (!origin) return null;
    const { hostname } = new URL(origin);
    if (hostname.endsWith(".sanity.studio") || hostname === "localhost") {
        return origin;
    }
    return null;
}

function corsHeaders(req: Request): HeadersInit {
    const origin = corsOrigin(req);
    if (!origin) return {};
    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "x-revalidate-secret",
    };
}

export async function OPTIONS(req: Request) {
    return new Response(null, { status: 204, headers: corsHeaders(req) });
}

export async function POST(req: Request) {
    const headers = corsHeaders(req);
    const secret = req.headers.get("x-revalidate-secret");

    if (!secret || secret !== revalidateSecret) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401, headers });
    }

    const now = Date.now();
    if (now - lastRevalidatedAt < COOLDOWN_MS) {
        return NextResponse.json({ error: "cooldown" }, { status: 429, headers });
    }
    lastRevalidatedAt = now;

    revalidateTag("sanity-content", "max");
    return NextResponse.json({ revalidated: true }, { headers });
}
