"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I have lifetime access?",
      answer: "Yes! Once you join, you get the workshop for the lifetime. You will be given a special portal where you can consume the workshop at any time."
    },
    {
      question: "Do I get to connect with Talha?",
      answer: "Absolutely! You get direct access to me through our community channels, live Q&A sessions, and personal feedback on your projects. I'm committed to helping you succeed."
    },
    {
      question: "Who Can enroll in this course?",
      answer: "This course is perfect for students, job seekers, freelancers, and anyone looking to build a career in web development. No prior experience is required - we start from the basics and take you to advanced level."
    },
    {
      question: "Will it be updated regularly?",
      answer: "Yes! The course content is regularly updated to reflect the latest industry trends, technologies, and best practices. You'll always have access to the most current information."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! This course is designed for beginners. We start with the absolute basics of HTML, CSS, and JavaScript, then gradually build up to advanced concepts. You'll be building real projects from day one."
    },
    {
      question: "How long does it take to complete the course?",
      answer: "The course is self-paced, but most students complete it in 6-8 weeks dedicating 2-3 hours per day. Remember, you have lifetime access, so you can take as much time as you need."
    },
    {
      question: "What kind of support do I get?",
      answer: "You get access to our exclusive community, direct support from me, live Q&A sessions, project reviews, and career guidance. We're here to support you throughout your learning journey."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the course content or feel it doesn't meet your expectations, we'll refund your money, no questions asked."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-orange-500">FAQS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My aim is to ensure that you have a clear understanding of the course content and what to expect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg 
                      className="w-6 h-6 text-orange-500 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

   

      </div>
    </section>
  );
};

export default FAQ;