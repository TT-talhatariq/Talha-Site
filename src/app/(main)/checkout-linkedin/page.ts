import CheckoutLinkedIn from "@/pages/LinkedIn/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enroll Now - LinkedIn Mastery | Secure Checkout | Talha Tariq",
    description: "Secure checkout for the LinkedIn Mastery course. Get instant access to the 6-module magnet system, Headline & About Templates Pack, and AI Profile Optimizer. 90% discount - limited time offer!",
    keywords: "linkedin course checkout, enroll linkedin mastery, secure payment, course enrollment, linkedin optimization course, Talha Tariq checkout",
    openGraph: {
        title: "Enroll Now - LinkedIn Mastery | Secure Checkout",
        description: "Secure checkout for the LinkedIn Mastery course. Instant access to the magnet system, templates pack, and AI Profile Optimizer. 90% discount - limited time!",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enroll Now - LinkedIn Mastery | Secure Checkout",
        description: "Secure checkout for the LinkedIn Mastery course. Instant access to the magnet system, templates pack, and AI Profile Optimizer. 90% discount - limited time!",
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

export default CheckoutLinkedIn;
