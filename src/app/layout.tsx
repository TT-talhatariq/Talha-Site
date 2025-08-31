import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyBottomButton from "@/components/StickyBottomButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Talha's Web Development Masterclass",
  description: "Master Web Dev with 15+ Projects and Unlock 9+ Proven Methods to Earn atleast 500k+ a month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
 
      </body>
    </html>
  );
}