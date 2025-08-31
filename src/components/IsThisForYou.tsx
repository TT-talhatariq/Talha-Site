import React from 'react';
import Image from 'next/image';

interface IsThisForYouProps {
  points: string[];
  title?: string;
  subtitle?: string;
  bottomText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const IsThisForYou = ({ 
  points, 
  title = "This is for You if",
  subtitle = "Don't miss this opportunity. You'll thank yourself.",
  bottomText = "If you're stuck, overwhelmed, or ready to finally start - this workshop is built for you. 🏆",
  imageSrc = "/assets/main.png",
  imageAlt = "Talha Tariq - Professional Photo"
}: IsThisForYouProps) => {

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start container mx-auto relative z-10 px-4">
        {/* Left side - Content */}
        <div className="space-y-8 lg:py-8 ">
            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                {subtitle.includes('You&apos;ll thank yourself') ? (
                  <>
                    Don&apos;t miss this opportunity. <span className="font-bold">You&apos;ll thank yourself.</span>
                  </>
                ) : (
                  subtitle
                )}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {title.includes('This is for You if') ? (
                  <>
                    This is for<span className="relative inline-block text-orange-500 px-2 py-1 rounded">
                      You
                    </span> if
                  </>
                ) : (
                  title
                )}
              </h2>
            </div>

            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-0.5">
                  ✅  
                  </div>
                                     <p className="text-gray-700 text-lg leading-snug tracking-tight">
                    {point.includes('real guidance') ? (
                      <>
                        You want <em className="italic">real guidance</em> from someone who&apos;s actually done it
                      </>
                    ) : (
                      point
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-xl text-gray-900 font-semibold">
                {bottomText.includes('finally start') ? (
                  <>
                    If you&apos;re stuck, overwhelmed, or ready to{" "}
                    <span className="underline decoration-2 decoration-orange-500">finally start</span>{" "}
                    - this workshop is built for you. 🏆
                  </>
                ) : (
                  bottomText
                )}
              </p>
            </div>
          </div>

        {/* Right side - Image (Full width, touching edge) */}
        <div className="lg:w-1/2 lg:h-screen lg:max-h-[600px] flex justify-end">
          <div className="relative w-full h-full flex justify-end">
            <div className="w-full max-w-md lg:max-w-lg aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-l-2xl lg:rounded-l-3xl overflow-hidden shadow-2xl relative">
              {/* Orange shadow/glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-l-2xl lg:rounded-l-3xl blur-sm opacity-75"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-300 via-orange-400 to-red-400 rounded-l-2xl lg:rounded-l-3xl blur-md opacity-50"></div>
              <div className="absolute -inset-3 bg-gradient-to-br from-orange-200 via-orange-300 to-red-300 rounded-l-2xl lg:rounded-l-3xl blur-lg opacity-30"></div>
              
              {/* Actual image container */}
              <div className="relative w-full h-full rounded-l-2xl lg:rounded-l-3xl overflow-hidden">
                <Image 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover"
                  width={500}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsThisForYou;