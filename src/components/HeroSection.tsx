import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-50 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      {/* Navigation */}
      <nav className="relative z-20 border-b border-orange-400">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Talha's School Logo"
              width={120}
              height={120}
              className="h-16 w-auto"
              priority
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm">
            JOIN TODAY!
          </button>
        </div>
      </nav>
      
      <div className="relative z-10 container mx-auto py-8">
        {/* Centered content layout */}
        <div className="container mx-auto px-4 ">
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
                  Get Latest Knowledge of <span className="text-blue-600 font-semibold">Web Development</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg">
                  YES, I WANT TO START RIGHT NOW
                </button>
              </div>
              
              <p className="text-sm text-gray-500 italic">
                Join today and lock in for the lowest-ever price
              </p>
{/*               
              <div className="flex items-center justify-center lg:justify-start space-x-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500">36k+</div>
                  <div className="text-gray-600 text-sm">Trusted By</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500">9+</div>
                  <div className="text-gray-600 text-sm">Latest Modules</div>
                </div>
              </div> */}
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-2xl p-1 shadow-xl border border-gray-200">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6">
                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                      {/* Video thumbnail area */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900"></div>
                      <div className="relative text-center text-white z-10">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-opacity-30 transition-all backdrop-blur-sm">
                          <svg className="w-6 h-6 ml-1" fill="white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-gray-200">IMPLEMENTED IN THIS PLATFORM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating speech bubbles */}
                <div className="absolute -top-2 -left-8 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-lg text-sm font-medium text-gray-700 max-w-48">
                  We&apos;ll change how you think about marketing
                  <div className="absolute -bottom-1 left-6 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                </div>
                <div className="absolute -bottom-2 -right-8 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-lg text-sm font-medium text-gray-700 max-w-48">
                  You can continue your Job or Studies alongside
                  <div className="absolute -top-1 right-6 w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;