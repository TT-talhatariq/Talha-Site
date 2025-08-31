import ThankYouRemoteWork from "@/pages/Remote/thankyou";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Welcome to Remote Work Mastery! | Thank You | Talha Tariq",
    description: "Thank you for enrolling in Remote Work Mastery! Your journey to working globally and earning in USD starts now. Check your email for course access details and next steps.",
    keywords: "remote work course enrolled, thank you page, course access, remote work mastery, global jobs course, USD earning course, Talha Tariq student",
    openGraph: {
        title: "Welcome to Remote Work Mastery! | Thank You",
        description: "Thank you for enrolling! Your journey to working globally and earning in USD starts now. Check your email for access details.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Welcome to Remote Work Mastery! | Thank You",
        description: "Thank you for enrolling! Your journey to working globally and earning in USD starts now. Check your email for access details.",
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

export default ThankYouRemoteWork;