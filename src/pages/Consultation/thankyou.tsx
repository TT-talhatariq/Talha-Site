'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StickyBottomButton from "@/components/StickyBottomButton";

export default function ThankYouConsultation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-200/50 via-orange-100/40 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-orange-400 shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Talha's School Logo"
              width={120}
              height={120}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              CONSULTATION <span className="text-blue-600">BOOKED</span> SUCCESSFULLY!
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Thank you for booking your 1-on-1 consultation with Talha! We&apos;re excited to help you achieve your career goals.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              WHAT&apos;S <span className="text-blue-500">NEXT</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Check Your Email</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;ll send you a confirmation email with booking details and a link to schedule your session via Calendly. 
                  Please check your inbox (and spam folder) within the next few minutes.
                </p>
              </div>

              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Schedule Your Session</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Use the Calendly link in your email to choose a date and time that works best for you. 
                  Sessions are 30 minutes and conducted via video call.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg space-y-4">
            <p className="text-lg text-gray-700">
              Need immediate help or have questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const phoneNumber = "923257460090";
                  const message = "Hi Talha! I just booked a consultation and need help with scheduling.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                💬 Contact Support on WhatsApp
              </button>
              {/* <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                📅 Book via Calendly
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <StickyBottomButton />
    </div>
  );
}

