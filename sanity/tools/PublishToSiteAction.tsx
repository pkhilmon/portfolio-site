'use client'

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const STATUS_LABEL: Record<Status, string> = {
    idle: "Publish to site",
    loading: "Publishing…",
    success: "Published!",
    error: "Failed — try again",
};

export function PublishToSiteAction() {
    const [status, setStatus] = useState<Status>("idle");

    const handleClick = async () => {
        setStatus("loading");
        try {
            const res = await fetch("/api/revalidate", {
                method: "POST",
                headers: {
                    "x-revalidate-secret": process.env.NEXT_PUBLIC_SANITY_REVALIDATE_SECRET ?? "",
                },
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div style={{ padding: 24, maxWidth: 480 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Publish to site</h2>
            <p style={{ fontSize: 13, color: "#6e7683", marginBottom: 20 }}>
                Flips all currently published content live on pavlokhilmon.com. Draft edits and
                unpublished documents are not affected.
            </p>
            <button
                type="button"
                onClick={handleClick}
                disabled={status === "loading"}
                style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "none",
                    fontWeight: 600,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    background: status === "success" ? "#2a7f4f" : status === "error" ? "#b53f42" : "#2276fc",
                    color: "#fff",
                }}
            >
                {STATUS_LABEL[status]}
            </button>
        </div>
    );
}
