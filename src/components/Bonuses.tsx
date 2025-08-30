import React from 'react';

const Bonuses = () => {
  const bonuses = [
    {
      icon: "👨‍💻",
      title: "Direct Access to Me",
      description: "Get personal mentorship and feedback directly from Talha. Ask questions, get career advice, and receive guidance whenever you need it.",
      value: "Worth $500",
      highlight: true
    },
    {
      icon: "🤝",
      title: "Community of Learners",
      description: "Join our exclusive Discord/WhatsApp community where 300+ passionate learners share experiences, help each other, and celebrate wins together.",
      value: "Worth $200",
      highlight: false
    },
    {
      icon: "💬",
      title: "Personal Feedback from me",
      description: "Submit your projects, portfolios, and profiles for detailed review and actionable feedback to improve your success rate.",
      value: "Worth $300",
      highlight: false
    },
    {
      icon: "💰",
      title: "9+ ways to earn using web development",
      description: "Detailed breakdown of proven methods including freelancing, remote jobs, teaching, digital products, and building your own agency.",
      value: "Worth $400",
      highlight: true
    },
    {
      icon: "🎯",
      title: "Road to your first $500",
      description: "Step-by-step action plan with exact strategies, templates, and scripts to help you earn your first $500 online within 60 days.",
      value: "Worth $600",
      highlight: true
    }
  ];

  const totalBonusValue = bonuses.reduce((sum, bonus) => {
    const value = parseInt(bonus.value.replace(/\D/g, ''));
    return sum + value;
  }, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
            🎁 EXCLUSIVE BONUSES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The masterclass with <span className="text-orange-400">amazing bonuses</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When you enroll today, you don&apos;t just get the masterclass. You get these incredible bonuses 
            that will accelerate your success journey.
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                bonus.highlight 
                  ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              {bonus.highlight && (
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  PREMIUM
                </div>
              )}
              
              <div className="text-6xl mb-6 text-center">{bonus.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {bonus.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-center mb-6">
                {bonus.description}
              </p>
              
              <div className="text-center">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                  bonus.highlight 
                    ? 'bg-white text-orange-500' 
                    : 'bg-orange-500 text-white'
                }`}>
                  {bonus.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Total Bonus Value
          </h3>
          <div className="text-6xl font-bold text-orange-400 mb-4">
            ${totalBonusValue.toLocaleString()}+
          </div>
          <p className="text-gray-300 text-lg mb-8">
            You get all of these bonuses absolutely FREE when you enroll in the masterclass today!
          </p>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 inline-block">
            <div className="text-white">
              <div className="text-lg font-semibold mb-2">🚀 Limited Time Offer</div>
              <div className="text-3xl font-bold mb-2">Get Everything for Just ₹1,999</div>
              <div className="text-sm opacity-90">Instead of ₹{(1999 + totalBonusValue * 83).toLocaleString()} (Total Value)</div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 inline-block text-white max-w-2xl">
            <h4 className="text-2xl font-bold mb-4">
              🎯 Your Next 5 Steps, tools, options, and access to mentorship after the session
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Don&apos;t just learn - get the complete roadmap to start earning within 30 days
            </p>
            <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Claim All Bonuses Now!
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Lifetime Access</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Money Back Guarantee</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;