import React from 'react';

const IsThisForYou = () => {
  const targetAudiences = [
    {
      icon: "🎓",
      title: "Students",
      description: "You want to build real-world skills while still in school — and maybe even start earning on the side.",
      highlight: false
    },
    {
      icon: "💼",
      title: "Job Seekers",
      description: "You're looking to add high-demand tech skills to your resume and stand out in a competitive market.",
      highlight: false
    },
    {
      icon: "🌍",
      title: "Who Want Remote Jobs",
      description: "Discover how to land high-paying remote jobs in tech. This course teaches you how to craft the perfect resume, optimize LinkedIn, and stand out in interviews—so you can work from anywhere.",
      highlight: true
    },
    {
      icon: "💰",
      title: "Want to Start a Hustle Alongside Your 9-5 Job",
      description: "Whether you aim to freelance full-time or as a side hustle, this course will show you how to balance your workload and achieve financial independence.",
      highlight: false
    },
    {
      icon: "🚀",
      title: "Want to Earn Through Freelance",
      description: "Whether you're looking to start freelancing part-time or go all in, this course is your step-by-step guide to building a successful freelance career from scratch",
      highlight: false
    },
    {
      icon: "👑",
      title: "Want to be your own boss?",
      description: "Whether you're starting part-time or going all in, this course gives you the tools to launch a successful freelance career — from finding clients to getting paid.",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who Is <span className="text-orange-500">This For?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This Masterclass is for anyone serious about growing their careers as fast as humanly possible 
            while retaining massive profit margins and customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                audience.highlight 
                  ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl' 
                  : 'bg-white shadow-lg hover:shadow-2xl border border-gray-100'
              }`}
            >
              {audience.highlight && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  POPULAR
                </div>
              )}
              
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className={`text-xl font-bold mb-4 ${
                audience.highlight ? 'text-white' : 'text-gray-900'
              }`}>
                {audience.title}
              </h3>
              <p className={`leading-relaxed ${
                audience.highlight ? 'text-gray-100' : 'text-gray-600'
              }`}>
                {audience.description}
              </p>
              
              {audience.highlight && (
                <div className="mt-6">
                  <button className="bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors">
                    Perfect for me!
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              If you&apos;re stuck, overwhelmed, or ready to finally start
            </h3>
            <p className="text-lg mb-6 opacity-90">
              - this masterclass is built for you. 🏆
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Yes, I&apos;m Ready to Start!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsThisForYou;