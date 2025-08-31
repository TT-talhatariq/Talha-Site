'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StickyBottomButton from "@/components/StickyBottomButton";

export default function ThankYouWebDev() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-200/50 via-orange-100/40 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>

      {/* Navigation */}
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

      {/* Thank You Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              WELCOME TO <span className="text-blue-600">TALHA&apos;S SCHOOL</span> COMMUNITY!
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Congratulations on taking the first step towards your success Online and beyond! 
              We&apos;re thrilled to have you on board for the <span className="text-orange-500 font-semibold">Remote Work Masterclass</span>.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              WHAT&apos;S <span className="text-blue-500">NEXT</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Keep an eye on your Email */}
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Keep an eye on your Email</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Shortly, we&apos;ll send you a welcome email with your login details and access instructions. 
                  If you don&apos;t receive it within 1 day, contact on the WhatsApp support number.
                </p>
              </div>

              {/* Start Your Journey */}
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Start Your Journey</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Login to the Talha&apos;s School Community to access all the learning material & start from the very first module. 
                  Engage with the community and connect with others.
                </p>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              Need immediate help? Have questions?
            </p>
            <button 
              onClick={() => {
                const phoneNumber = "923257460090";
                const message = "Hi Talha! I just enrolled in the Remote Work course and need help with access.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Contact Support on WhatsApp
            </button>
          </div>
        </div>
      </div>
      <StickyBottomButton />
    </div>
  );
}