"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ValueItem {
  title: string;
  description: string;
}

interface PricingProps {
  originalPrice: string;
  currentPrice: string;
  valueItems: ValueItem[];
  discountPercentage?: string;
  href?: string;
}

const Pricing = ({ 
  originalPrice, 
  currentPrice, 
  valueItems, 
  discountPercentage = "90% OFF",
  href = '/checkout-web-dev'
}: PricingProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="lg:py-8 py:2  bg-gradient-to-br from-white via-orange-50/20 to-red-50/30 relative overflow-hidden" id="pricing">
      {/* Background elements matching other sections */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-red-200/30 via-orange-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-blue-200/30 via-purple-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-green-100/20 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            🔥 LIMITED TIME OFFER
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            GET THE <span className="text-orange-500">ULTIMATE </span> 
            <span className="text-green-600">Masterclass</span> & START<br />
            <span className="text-blue-600">EARNING IN DOLLARS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The original price of the workshop is even more than 50,000 as the immense modules value and my 3 years of experience, 
            secrets and arts of many things I compiled into it. But seeing inflation, making it affordable for everyone in Pakistan.
          </p>
        </div>

        {/* Combined Pricing Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 lg:p-12 border border-white/50 shadow-xl">
            
            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-red-500 text-xl">⏰</span>
                <h3 className="text-gray-900 text-xl font-bold">Offer Expires In:</h3>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-xl lg:text-2xl w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-700 text-xs mt-2 font-medium">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-xl lg:text-2xl w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-700 text-xs mt-2 font-medium">MINUTES</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-xl lg:text-2xl w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-700 text-xs mt-2 font-medium">SECONDS</div>
                </div>
              </div>
            </div>

            {/* Pricing Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Original Price */}
              <div className="text-center lg:text-left">
                <div className="text-gray-600 text-lg font-semibold mb-2">Original Price</div>
                <div className="text-5xl lg:text-6xl font-bold text-gray-500 line-through mb-2">
                  {originalPrice}
                </div>
                <div className="text-gray-500 text-sm">
                  Worth every penny for the value provided
                </div>
              </div>

              {/* Current Price Card */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 lg:p-8 text-white text-center relative shadow-2xl">
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {discountPercentage} ⚡
                </div>
                
                <div className="text-orange-100 text-lg font-semibold mb-2">Special Launch Price</div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {currentPrice}
                </div>
                <div className="text-orange-100 text-sm ">
                  (Only 1 day left at this Price)
                </div>
                
                {/* <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-3">
                  Buy now at Discount Price
                </button> */}
              
              </div>
                
            
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 ">
                  <Link href={href} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg lg-mb:0 mb-6">
                  Buy Now at Discount Price
                </Link>
              </div>

            {/* Savings Highlight */}
               {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600 mt-[4px]">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Lifetime Access</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">400+ Happy Students</span>
          </div>
        </div>
           
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              What You Get When You Enroll Today:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-gray-900">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-gray-600 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-green-800 mt-8 text-center">
              🚀 Don&apos;t Miss This Opportunity!
            </h3>


     

      </div>
    </section>
  );
};

export default Pricing;