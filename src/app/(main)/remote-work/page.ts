import RemoteWorkPage from "@/pages/Remote/webDev";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Remote Work Mastery - Work Globally & Earn in USD | Talha Tariq",
    description: "TIRED of earning peanuts while your skills are worth GOLD? Break free from local salary limits! Learn the EXACT system I used to land $3000+ USD remote jobs and work with global clients from Pakistan.",
    keywords: "remote work course, work from home, global remote jobs, USD salary, LinkedIn optimization, Upwork success, remote job hunting, international clients, digital nomad, remote work Pakistan, online freelancing, global opportunities, remote career",
    openGraph: {
        title: "Remote Work Mastery - Work Globally & Earn in USD",
        description: "Break free from local salary limits! Learn the EXACT system to land $3000+ USD remote jobs and work with global clients from Pakistan.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remote Work Mastery - Work Globally & Earn in USD",
        description: "Break free from local salary limits! Learn the EXACT system to land $3000+ USD remote jobs and work with global clients from Pakistan.",
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

export default RemoteWorkPage;