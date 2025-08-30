import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Zubair",
      title: "Success Story",
      image: "/testimonial1.jpg", // You'll need to add these images
      quote: "The workshop is too good, the way you conduct this session your all effort is out of the box, no one can take these pain (Q/A). But mery beta ki waja se mera question reh gy, but you done super done.",
      result: "Got his first client within 2 weeks",
      earnings: "$500+",
      platform: "Upwork"
    },
    {
      name: "Asfar",
      title: "Got Projects",
      image: "/testimonial2.jpg",
      quote: "I have completed many courses — from Amazon (including Shahid Anwar&apos;s) to Shopify (by Hamza Ali) — but what I experienced today was truly amazing! I had some questions, but I didn&apos;t ask at the time because you seemed tired.",
      result: "Started getting projects regularly",
      earnings: "$1200+",
      platform: "LinkedIn"
    },
    {
      name: "Kashif",
      title: "Top Rated from No Earnings",
      image: "/testimonial3.jpg",
      quote: "Good session. Helpful for the beginners to Advanced level people out there. Topics you named it Sajawal has answered. Truly Helpful 🙏",
      result: "Became Top Rated on Upwork",
      earnings: "$3000+",
      platform: "Upwork"
    },
    {
      name: "Hamza",
      title: "Applied 1 out of 9 methods",
      image: "/testimonial4.jpg",
      quote: "It was a great session. And you explained it so professionally in a way a beginner can understand the basics. Thank you!",
      result: "Applied just one method and succeeded",
      earnings: "$800+",
      platform: "Freelancing"
    }
  ];

  const stats = [
    { number: "300+", label: "Passionate Learners", color: "text-blue-400" },
    { number: "95%", label: "Success Rate", color: "text-green-400" },
    { number: "$50k+", label: "Total Earnings by Students", color: "text-orange-400" },
    { number: "4.9/5", label: "Average Rating", color: "text-purple-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 -translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm tracking-wide uppercase mb-4">
            📸 They Took the Workshop
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s hear their <span className="text-orange-500">feedback ✍️</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t take my words for it. See what other people gave as feedback.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-orange-500 font-semibold text-sm">{testimonial.title}</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {testimonial.earnings}
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {testimonial.platform}
                    </span>
                  </div>
                </div>
              </div>
              
                          <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Result:</span>
                  <span className="text-sm font-semibold text-gray-900">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            My Wall of Love ❤️
          </h3>
          <h4 className="text-xl lg:text-2xl font-bold mb-6">
            Join 300+ Passionate Learners
          </h4>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We&apos;re a strong community where we do help each other when there&apos;s a need. 
            Become a part of this amazing community.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            I want to Enroll
          </button>
        </div>

        {/* Featured testimonials display */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-xl p-4 text-white">
            <div className="text-xs text-gray-400 mb-2">💬 WhatsApp Screenshot</div>
            <div className="bg-green-600 rounded-lg p-3 text-sm">
              <div className="text-xs text-green-200 mb-1">~ sarasaif +92</div>
              <p>&ldquo;The workshop is too good, the way you conduct this session your all effort is out of the box...&rdquo;</p>
              <div className="text-xs text-green-200 mt-2">1:12 am</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4 text-white">
            <div className="text-xs text-gray-400 mb-2">💬 Community Feedback</div>
            <div className="bg-blue-600 rounded-lg p-3 text-sm">
              <div className="text-xs text-blue-200 mb-1">~ Abdul Haseeb +92</div>
              <p>&ldquo;Good session. Helpful for the beginners to Advanced level people out there. Topics you named it Sajawal has answered.&rdquo;</p>
              <div className="text-xs text-blue-200 mt-2">12:08 am</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 text-white">
            <div className="text-xs text-gray-400 mb-2">💬 Success Story</div>
            <div className="bg-purple-600 rounded-lg p-3 text-sm">
              <div className="text-xs text-purple-200 mb-1">~ ~</div>
              <p>&ldquo;It was a great session. And you explained it so professionally in a way a beginner can understand the basics. Thank you!&rdquo;</p>
              <div className="text-xs text-purple-200 mt-2">12:12 am</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 text-white">
            <div className="text-xs text-gray-400 mb-2">📱 LinkedIn Post</div>
            <div className="bg-gray-700 rounded-lg p-3 text-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">Ghazala Khan ✅</div>
                  <div className="text-gray-400">Electrical Engineer</div>
                </div>
              </div>
              <p>&ldquo;Exactly, I have got a lot of answers and clarity as well. More importantly he was patient enough to listen each and every individual.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;