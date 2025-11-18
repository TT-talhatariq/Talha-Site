import CheckoutConsultation from "@/pages/Consultation/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout - Book 1-on-1 Consultation | Talha Tariq",
    description: "Complete your payment to book a 30-minute 1-on-1 consultation with Talha. Get personalized guidance on remote work, freelancing, LinkedIn, and career strategy.",
    keywords: "consultation checkout, book consultation, career consultation payment, 1-on-1 session booking",
    openGraph: {
        title: "Checkout - Book 1-on-1 Consultation",
        description: "Complete your payment to book a 30-minute 1-on-1 consultation with Talha.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Checkout - Book 1-on-1 Consultation",
        description: "Complete your payment to book a 30-minute 1-on-1 consultation with Talha.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default CheckoutConsultation;

