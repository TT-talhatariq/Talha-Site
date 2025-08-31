import ThankYouWebDev from "@/pages/WebDev/thankyou";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Welcome to Web Development Masterclass! | Thank You | Talha Tariq",
    description: "Thank you for enrolling in the Web Development Masterclass! Your journey to mastering web development and earning PKR 500k+ monthly starts now. Check your email for course access details.",
    keywords: "web development course enrolled, thank you page, course access, web development masterclass, Talha Tariq student, programming course welcome",
    openGraph: {
        title: "Welcome to Web Development Masterclass! | Thank You",
        description: "Thank you for enrolling! Your journey to mastering web development and earning PKR 500k+ monthly starts now. Check your email for access details.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Welcome to Web Development Masterclass! | Thank You",
        description: "Thank you for enrolling! Your journey to mastering web development and earning PKR 500k+ monthly starts now. Check your email for access details.",
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

export default ThankYouWebDev;