'use client'

import { cn } from "@/lib/utils"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE_URL } from "@/lib/constants";

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
    className?: string
}

export function ContactForm({ className }: ContactFormProps) {
    const [status, setStatus] = useState<SubmitStatus>('idle')

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')

        if (!FORMSPREE_URL) {
            if (process.env.NODE_ENV === 'development') {
                console.log('[ContactForm] NEXT_PUBLIC_FORMSPREE_URL is not set')
            }
            setStatus('error')
            return
        }

        try {
            const form = e.currentTarget
            const nameEl = form.elements.namedItem('name') as HTMLInputElement | null
            const emailEl = form.elements.namedItem('email') as HTMLInputElement | null
            const messageEl = form.elements.namedItem('message') as HTMLTextAreaElement | null

            if (!nameEl || !emailEl || !messageEl) throw new Error('Form fields missing')

            const data = {
                name: nameEl.value,
                email: emailEl.value,
                message: messageEl.value,
            }
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data),
            })
            setStatus(res.ok ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <p className={cn("text-foreground", className)}>
                Message sent! I&apos;ll reply within 24 hours.
            </p>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={cn("flex flex-col gap-4", className)} noValidate>
            {status === 'error' && (
                <p role="alert" className={cn("text-sm text-destructive")}>
                    Something went wrong. Try again or email me directly.
                </p>
            )}

            <div className={cn("flex flex-col gap-1")}>
                <label htmlFor="name" className={cn("text-sm font-medium")}>Name</label>
                <Input id="name" name="name" type="text" required autoComplete="name" />
            </div>

            <div className={cn("flex flex-col gap-1")}>
                <label htmlFor="email" className={cn("text-sm font-medium")}>Email</label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>

            <div className={cn("flex flex-col gap-1")}>
                <label htmlFor="message" className={cn("text-sm font-medium")}>Message</label>
                <Textarea id="message" name="message" required rows={5} />
            </div>

            {/* Honeypot - hidden from visitors, check by Formspree for spam */}
            <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" className={cn('hidden')} />

            <Button type="submit" disabled={status === 'loading'} className={cn("w-full")}>
                {status === 'loading' ? (
                    <>
                        <span
                            className={cn("mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent")}
                            aria-hidden="true"
                        />
                        Sending…
                    </>
                ) : (
                    'Send'
                )}
            </Button>
        </form>
    )
}