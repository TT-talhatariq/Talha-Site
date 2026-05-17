import ThankYouUpwork from "@/pages/Upwork/thankyou";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Welcome to Upwork Mastery! | Thank You | Talha Tariq",
    description: "Thank you for enrolling in the Upwork Mastery course! Your journey to winning real Upwork clients starts now. Check your email for course access details.",
    keywords: "upwork course enrolled, thank you page, course access, upwork mastery, Talha Tariq student",
    openGraph: {
        title: "Welcome to Upwork Mastery! | Thank You",
        description: "Thank you for enrolling! Your journey to winning real Upwork clients starts now. Check your email for access details.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Welcome to Upwork Mastery! | Thank You",
        description: "Thank you for enrolling! Your journey to winning real Upwork clients starts now. Check your email for access details.",
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

export default ThankYouUpwork;
