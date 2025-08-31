import React from 'react';
import Image from 'next/image';

interface Bonus {
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  highlight?: boolean;
}

const Bonuses = ({ bonuses }: { bonuses: Bonus[] }) => {
 


  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50/20 to-orange-50/30 relative overflow-hidden">
      {/* Background elements matching other sections */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/30 via-orange-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-blue-200/30 via-blue-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4">
         
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
          🎁 <span className="text-orange-500">Free Bonuses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you enroll today, you don&apos;t just get the masterclass. You get these incredible bonuses 
            that will accelerate your success journey.
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-0">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl overflow-hidden ${
                bonus.highlight 
                  ? 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 shadow-lg' 
                  : 'bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:bg-white/90'
              }`}
            >
              {bonus.highlight && (
                <div className="absolute top-2 right-1/3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  PREMIUM ⭐
                </div>
              )}
              
              {/* Image Section */}
              <div className="aspect-square p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={bonus.image}
                    alt={bonus.imageAlt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Title at Bottom */}
              <div className="p-4 pt-0">
                <h3 className="text-lg font-bold text-gray-900 text-center">
                  {bonus.title}
                </h3>
                {bonus.description && (
                  <p className="text-sm text-gray-600 text-center mt-2 leading-relaxed">
                    {bonus.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>


     
      </div>
    </section>
  );
};

export default Bonuses;