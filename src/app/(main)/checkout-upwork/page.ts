import CheckoutUpwork from "@/pages/Upwork/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enroll Now - Upwork Mastery | Secure Checkout | Talha Tariq",
    description: "Secure checkout for the Upwork Mastery course. Get instant access to the 6-module client system, Proposal Playbook, and AI Proposal Generator. 90% discount - limited time offer!",
    keywords: "upwork course checkout, enroll upwork mastery, secure payment, course enrollment, upwork proposals course, Talha Tariq checkout",
    openGraph: {
        title: "Enroll Now - Upwork Mastery | Secure Checkout",
        description: "Secure checkout for the Upwork Mastery course. Instant access to the client system, Proposal Playbook, and AI Proposal Generator. 90% discount - limited time!",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enroll Now - Upwork Mastery | Secure Checkout",
        description: "Secure checkout for the Upwork Mastery course. Instant access to the client system, Proposal Playbook, and AI Proposal Generator. 90% discount - limited time!",
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default CheckoutUpwork;
