import ConsultationPage from "@/pages/Consultation/consultation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Consultation - 1-on-1 Career Guidance | Talha Tariq",
    description: "Get personalized 1-on-1 consultation with Talha. Get help with remote work, freelancing, LinkedIn optimization, resume review, and career strategy. Book your session today.",
    keywords: "career consultation, remote work consultation, freelancing advice, LinkedIn optimization, resume review, interview prep, career coaching, 1-on-1 mentoring",
    openGraph: {
        title: "Book a Consultation - 1-on-1 Career Guidance",
        description: "Get personalized guidance for remote work, freelancing, LinkedIn, and career strategy. Book your consultation session today.",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book a Consultation - 1-on-1 Career Guidance",
        description: "Get personalized guidance for remote work, freelancing, LinkedIn, and career strategy.",
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

export default ConsultationPage;

