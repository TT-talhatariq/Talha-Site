'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutMeProps {
  statsImages: {
    image: string;
    imageAlt: string;
    title: string;
  }[];
  href?: string;
}

const AboutMe = ({ 
  statsImages,
  href = '/checkout-web-dev'
}: AboutMeProps) => {
  return (
    <section className="py-8 lg:py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-200/20 via-blue-100/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-orange-200/20 via-orange-100/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-orange-500">Achievements</span> & <span className="text-blue-600">Proof</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take my word for it - here&apos;s the proof of my success and the results I&apos;ve achieved
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsImages.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-200">
                  {/* Screenshot */}
                  <div className="h-72 md:h-80 lg:h-100 bg-gray-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                    <Image
                      src={stat.image}
                      alt={stat.imageAlt}
                      width={350}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 text-center">
                    {stat.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
        <Link
            href={href}
           
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
          >
            Enroll Now & Start Earning
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;