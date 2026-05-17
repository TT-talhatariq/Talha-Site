import ThankYouLinkedIn from "@/pages/LinkedIn/thankyou";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Welcome to LinkedIn Mastery! | Thank You | Talha Tariq",
    description: "Thank you for enrolling in the LinkedIn Mastery course! Your journey to a LinkedIn that brings opportunities to you starts now. Check your email for course access details.",
    keywords: "linkedin course enrolled, thank you page, course access, linkedin mastery, Talha Tariq student",
    openGraph: {
        title: "Welcome to LinkedIn Mastery! | Thank You",
        description: "Thank you for enrolling! Your journey to a LinkedIn that brings opportunities to you starts now. Check your email for access details.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Welcome to LinkedIn Mastery! | Thank You",
        description: "Thank you for enrolling! Your journey to a LinkedIn that brings opportunities to you starts now. Check your email for access details.",
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

export default ThankYouLinkedIn;
