import React from 'react';

const CourseContent = () => {
  const modules = [
    {
      number: "01",
      title: "Web Development - Advance",
      subtitle: "Master the fundamentals of modern web development",
      items: [
        "HTML (Basics to Advance)",
        "CSS (Basics to Advance)", 
        "JavaScript (Basic to Advance)",
        "15+ Projects",
        "2 Grand Project for Portfolio",
        "Mastering UI/UX Design"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      number: "02",
      title: "Unlock 9 Proven Ways to Earn",
      subtitle: "Discover multiple income streams using your skills",
      items: [
        "Freelancing (Upwork, LinkedIn)",
        "Jobs (Onsite, and Remote)",
        "Teaching - a detailed guide",
        "Digital Products Mastery",
        "Unlock LinkedIn for Projects",
        "Blogs and Consultations",
        "One Man Web Design Agency"
      ],
      color: "from-green-500 to-emerald-500",
      icon: "💰"
    },
    {
      number: "03", 
      title: "Crack Upwork like a Pro",
      subtitle: "Master the art of freelancing on Upwork",
      items: [
        "Creating a Perfect profile",
        "Writing an Effective Profile Description",
        "Setting Up killer portfolio & Project Catalogs",
        "The Art of Choosing a Job",
        "Winning Job Proposals",
        "Upwork Badges, Contracts, Invites, Agency & much more",
        "Win Projects in Crazy Amount"
      ],
      color: "from-orange-500 to-red-500",
      icon: "🎯"
    },
    {
      number: "04",
      title: "Master LinkedIn for Remote Jobs",
      subtitle: "Build your professional brand and network",
      items: [
        "LinkedIn & Personal Branding",
        "How to choose a Niche",
        "Potential of LinkedIn",
        "How to make a Killer & Convincing profile",
        "Strategy to Create Content",
        "3C model for success on LinkedIn",
        "Secrets to networking"
      ],
      color: "from-purple-500 to-pink-500",
      icon: "💼"
    },
    {
      number: "05",
      title: "Get Job Offers in Bulk",
      subtitle: "Land high-paying positions with confidence",
      items: [
        "Finding High Paying Jobs",
        "Making Job Winning Resume",
        "Technical Interview Cracking Tips",
        "HR Interview Cracking Insights",
        "Ace Jobs Like a Pro"
      ],
      color: "from-indigo-500 to-blue-500",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Course <span className="text-orange-400">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Five Modules That Will Take You From An Absolute Beginner To Ready To Land Your First Client!
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* Module number and icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                      {module.icon}
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xs text-gray-400 font-semibold tracking-wider">MODULE</span>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}>
                        {module.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* Module content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-lg">
                        {module.subtitle}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${module.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-sm lg:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line for next module */}
              {index < modules.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-white opacity-90 mb-6">
              Join 300+ students who are already building their future
            </p>
            <button className="bg-white text-orange-500 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;