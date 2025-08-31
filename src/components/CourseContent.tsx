import Image from 'next/image';
import React from 'react';

interface Module {
  number: string;
  title: string;
  items: string[];
  image: string;
  imageAlt: string;
  bgGradient: string;
}

const CourseContent = ({ modules }: { modules: Module[] }) => {
 

  return (
    <section className="py-4 lg:py-24 bg-gradient-to-br from-white via-orange-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Background elements similar to other sections */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-200/30 via-blue-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-200/30 via-orange-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Course <span className="text-orange-500">Curriculum</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five Modules That Will Take You From An Absolute Beginner To Ready To Land Your First Client!
          </p>
        </div>

        <div className="space-y-12 container mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className={`${module.bgGradient} backdrop-blur-sm rounded-3xl p-4 lg:p-8 shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 hover:transform hover:scale-[1.01]`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Content Section */}
                <div className="lg:w-1/2 space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center font-bold text-lg text-white shadow-lg">
                      {module.number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Module {module.number}: {module.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1  gap-4">
                    {module.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center space-x-3 lg:ml-12"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-0.5">
                          ✅
                        </div>
                        <span className="text-gray-700 text-base leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-lg lg:max-w-xl">
                    {/* Enhanced shadow effect similar to IsThisForYou */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 via-blue-300/20 to-transparent rounded-2xl blur-sm opacity-60"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/20 via-orange-300/15 to-transparent rounded-2xl blur-md opacity-40"></div>
                    
                    <div className="relative aspect-video bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden backdrop-blur-sm">
                      <Image
                        src={module.image} 
                        alt={module.imageAlt}
                        className="w-full h-full object-cover"
                        width={700}
                      height={500}
                      />
                    </div>
                    
                    {/* Subtle decorative elements */}
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute -top-3 -left-3 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseContent;