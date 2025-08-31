import CheckoutRemoteWork from "@/pages/Remote/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enroll Now - Remote Work Mastery | Secure Checkout | Talha Tariq",
    description: "Secure checkout for Remote Work Mastery course. Get instant access to LinkedIn hacks, Upwork secrets, and global job hunting strategies. Start earning in USD from Pakistan. 94% discount - limited time offer!",
    keywords: "remote work course checkout, enroll remote work, secure payment, course enrollment, remote work mastery, global jobs checkout, USD earning course payment",
    openGraph: {
        title: "Enroll Now - Remote Work Mastery | Secure Checkout",
        description: "Secure checkout for Remote Work Mastery course. Get instant access to global job hunting strategies and start earning in USD. 94% discount - limited time!",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enroll Now - Remote Work Mastery | Secure Checkout",
        description: "Secure checkout for Remote Work Mastery course. Get instant access to global job hunting strategies and start earning in USD. 94% discount - limited time!",
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

export default CheckoutRemoteWork;