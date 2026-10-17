import { heroContent } from "./hero";

export interface ContactContent {
    heading: string;
    body: string;
    availability: string;
    bookACallLabel: string;
    emailLabel: string;
    privacyNotice: string;
}

export const contactContent: ContactContent = {
    heading: "Have a project in mind?",
    body: "Book a 20-minute call or email a short description. No obligation.",
    availability: "20–30 h/week · Response within 48 h",
    // Same label as the hero button, so both Book a Call CTAs always read the same
    bookACallLabel: heroContent.bookACallLabel,
    emailLabel: "Email me",
    privacyNotice: "Contact form submissions are delivered via a secure email API and are not stored in any database. No personal data is retained after delivery.",
}
