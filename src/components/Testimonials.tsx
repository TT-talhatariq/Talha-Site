'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TestimonialsProps {
  href?: string;
}

const Testimonials = ({ href = '/checkout-web-dev' }: TestimonialsProps) => {
 

  return (
    <section className="lg:py-12 py-2 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-4 relative z-10 ">
        <div className="text-center lg:mb-16 mb-4 ">
          <p className="text-orange-500 font-semibold text-sm tracking-wide uppercase mb-2">
            📸 They Took the Workshop
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Let&apos;s hear their <span className="text-orange-500">feedback ✍️</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t take my words for it. See what other people gave as feedback.
          </p>
        </div>

            {/* Wall of Love */}
        <div className='w-full flex justify-center items-center mb-16'>
                <Image
                src='/assets/wall.png'
                alt='Wall of Love'
                width={1600}
                height={1000}
                />
        </div>

        {/* Success Stories Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real <span className="text-orange-500">Success Stories</span> 📱
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Screenshots from our students showing their actual results and achievements
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 col-span-1 lg:col-span-2">
              <div className="aspect-[3/2] bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/assets/ss1.png"
                  alt="Client Success Story"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

         

            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/assets/ss3.png"
                  alt="Facebook Ads Success"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/assets/ss5.png"
                  alt="Upwork Success"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

       
           
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mb-0 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Ready to join these successful students? 🚀
            </p>
            <Link 
              href={href}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Success Story Today
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;