import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { revalidateSecret } from "@/sanity/lib/env";

const COOLDOWN_MS = 10_000;
let lastRevalidatedAt = 0;

export async function POST(req: Request) {
    const secret = req.headers.get("x-revalidate-secret");

    if (!secret || secret !== revalidateSecret) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const now = Date.now();
    if (now - lastRevalidatedAt < COOLDOWN_MS) {
        return NextResponse.json({ error: "cooldown" }, { status: 429 });
    }
    lastRevalidatedAt = now;

    revalidateTag("sanity-content", "max");
    return NextResponse.json({ revalidated: true });
}
