"use client"
import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-bounce">
            🔥 LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            GET THE <span className="text-orange-400">ULTIMATE</span><br />
            <span className="text-green-400">Masterclass</span> & START<br />
            <span className="text-blue-400">EARNING IN DOLLARS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The original price of the workshop is even more than 20,000 as the immense modules value and my 2 years of experience, 
            secrets and arts of many things I compiled into it. But seeing inflation, making it affordable for everyone in Pakistan.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12 max-w-md mx-auto">
          <h3 className="text-white text-xl font-bold text-center mb-4">⏰ Offer Expires In:</h3>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="bg-orange-500 text-white font-bold text-2xl w-16 h-16 rounded-lg flex items-center justify-center">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-white text-xs mt-2">HOURS</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white font-bold text-2xl w-16 h-16 rounded-lg flex items-center justify-center">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-white text-xs mt-2">MINUTES</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white font-bold text-2xl w-16 h-16 rounded-lg flex items-center justify-center">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-white text-xs mt-2">SECONDS</div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Original Price */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-white opacity-60 text-lg font-semibold mb-4">Original Price</div>
              <div className="text-6xl font-bold text-gray-400 line-through mb-4">
                ₹20,000
              </div>
              <div className="text-gray-400 text-sm mb-6">
                Worth every penny for the value provided
              </div>
              <div className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-full cursor-not-allowed opacity-50">
                Not Available
              </div>
            </div>

            {/* Discounted Price */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                90% OFF
              </div>
              
              <div className="text-yellow-200 text-lg font-semibold mb-4">Special Launch Price</div>
              <div className="text-6xl font-bold mb-4">
                ₹1,999
              </div>
              <div className="text-yellow-200 text-sm mb-6">
                (Only 1 day left at this Price)
              </div>
              
              <button className="bg-white text-orange-500 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-6">
                Buy now at Discount Price
              </button>
              
              <div className="text-yellow-200 text-xs">
                Just to pay for our course portal subscription
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              What You Get When You Enroll Today:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Complete Web Development Course</div>
                  <div className="text-gray-300 text-sm">HTML, CSS, JavaScript + 15+ Projects</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">9 Proven Earning Methods</div>
                  <div className="text-gray-300 text-sm">Freelancing, Jobs, Teaching & More</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Direct Access to Talha</div>
                  <div className="text-gray-300 text-sm">Personal mentorship & feedback</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Lifetime Access</div>
                  <div className="text-gray-300 text-sm">Learn at your own pace, forever</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Community Access</div>
                  <div className="text-gray-300 text-sm">Join 300+ passionate learners</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Bonus Materials</div>
                  <div className="text-gray-300 text-sm">Worth $2000+ in additional resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 inline-block text-white">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Don't Miss This Opportunity!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of students who are already building their future
            </p>
            <button className="bg-white text-green-600 font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-xl">
              Enroll Now for ₹1,999
            </button>
            <div className="mt-4 text-sm opacity-75">
              💳 Secure payment • 30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;