import CheckoutWebDev from "@/pages/WebDev/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enroll Now - Web Development Masterclass | Secure Checkout | Talha Tariq",
    description: "Secure checkout for Web Development Masterclass. Get instant access to 15+ projects, 9 proven earning methods, and start your journey to PKR 500k+ monthly earnings. 94% discount - limited time offer!",
    keywords: "web development course checkout, enroll web development, secure payment, course enrollment, web development masterclass, Talha Tariq checkout, programming course payment",
    openGraph: {
        title: "Enroll Now - Web Development Masterclass | Secure Checkout",
        description: "Secure checkout for Web Development Masterclass. Get instant access to 15+ projects and 9 proven earning methods. 94% discount - limited time!",
        type: "website",
        locale: "en_US",
        siteName: "Talha Tariq Courses",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enroll Now - Web Development Masterclass | Secure Checkout",
        description: "Secure checkout for Web Development Masterclass. Get instant access to 15+ projects and 9 proven earning methods. 94% discount - limited time!",
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

export default CheckoutWebDev;