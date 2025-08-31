'use client';
import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';

const HeroSection = () => {
  return (
    <>
      {/* Navigation - Outside of section for proper sticky behavior */}
      <NavBar />

      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-200/50 via-orange-100/40 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
      
      <div className="relative z-10 container mx-auto py-8">
        {/* Centered content layout */}
        <div className="container mx-auto px-4 py-2 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  LEARN HOW YOU CAN
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
                  Master <span className="text-orange-500">Web Dev</span> with <span className="text-blue-600">15+ Projects</span> and Unlock the <span className="text-orange-500">9+ Proven Methods</span> to Earn atleast <span className="text-green-600">500k+ a month</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                Strategies with <span className="text-blue-600 font-semibold">Guaranteed Results!</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg lg-mb:0 mb-6"
                >
                  START RIGHT NOW
                </button>
              </div>
              
           
            </div>
            
            <div className="lg:w-1/2 flex justify-end">
              <div className="relative">
                <div className="bg-white rounded-2xl p-1 shadow-xl border border-gray-200">
                  <div className="rounded-xl overflow-hidden">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/AMnbOT1UAf8?si=gu-wJUokfgyzxPvm" 
                      title="Web Development Masterclass Preview" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="w-full aspect-video rounded-lg"
                    ></iframe>
                  </div>
                </div>
                
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;