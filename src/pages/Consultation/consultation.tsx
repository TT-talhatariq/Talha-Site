import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function ConsultationPage() {
  const consultationOfferings = [
    {
      title: "Remote Work Strategy",
      description: "Get personalized guidance on landing high-paying remote jobs, optimizing your LinkedIn, and building a global career.",
      icon: "🌍"
    },
    {
      title: "Freelancing Setup",
      description: "Learn how to set up on Upwork, Fiverr, and acquire direct clients. Get proven strategies that work.",
      icon: "💼"
    },
    {
      title: "LinkedIn Optimization",
      description: "Transform your LinkedIn profile into a client-attracting machine. Content strategy and networking secrets.",
      icon: "💎"
    },
    {
      title: "Resume & Interview Prep",
      description: "Get your resume reviewed and master interview techniques that guarantee job offers.",
      icon: "📄"
    },
    {
      title: "Web Development Career",
      description: "Guidance on skills, career path, and how to monetize your web development expertise.",
      icon: "🚀"
    },
    {
      title: "General Career Strategy",
      description: "Personalized career guidance tailored to your goals, challenges, and aspirations.",
      icon: "🎯"
    }
  ];

  const whatYouGet = [
    "30-minute personalized 1-on-1 session",
    "Actionable strategies tailored to your goals",
    "Direct access to proven templates and methods",
    "Follow-up resources and next steps",
    "Priority support after the session"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50">
      <NavBar href="/checkout-consultation" />
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 via-blue-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-orange-200/30 via-orange-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Book a <span className="text-blue-600">1-on-1 Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized guidance from Talha. Whether you need help with remote work, freelancing, LinkedIn, or career strategy - let&apos;s discuss your goals and create a plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="bg-green-50/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 shadow-sm">
                <span className="text-sm font-bold text-green-700">⏱️ 30 Minutes</span>
              </div>
              <div className="bg-blue-50/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-sm">
                <span className="text-sm font-bold text-blue-700">💰 PKR 2,999</span>
              </div>
              <div className="bg-orange-50/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200/50 shadow-sm">
                <span className="text-sm font-bold text-orange-700">🎯 Personalized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              What You&apos;ll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whatYouGet.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="py-12 lg:py-16 relative bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Consultation Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultationOfferings.map((offering, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white via-blue-50/40 to-orange-50/30 rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{offering.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white via-blue-50/40 to-orange-50/30 rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-lg text-gray-600">
                  Book your 30-minute consultation session and get personalized guidance from Talha.
                </p>
                
                {/* Pricing */}
                <div className="bg-white/80 rounded-2xl p-6 border border-blue-200 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">PKR 2,999</div>
                    <div className="text-gray-600">for 30 minutes</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/checkout-consultation">
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg">
                      💳 Pay & Book Consultation
                    </button>
                  </Link>
                  {/* <a
                    href="https://calendly.com/your-calendly-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg text-center"
                  >
                    📅 Book via Calendly
                  </a> */}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  After payment, you&apos;ll receive a confirmation email with booking instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 lg:py-16 relative bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Book a Consultation?
            </h2>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-600 mr-3">🎯</span>
                  Personalized Strategy
                </h3>
                <p className="text-gray-600">
                  Get advice tailored specifically to your situation, goals, and challenges. No generic advice - just actionable steps for YOU.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-green-600 mr-3">⚡</span>
                  Fast Results
                </h3>
                <p className="text-gray-600">
                  Skip months of trial and error. Get proven strategies that have helped hundreds of students land remote jobs and build successful careers.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-orange-600 mr-3">💎</span>
                  Direct Access
                </h3>
                <p className="text-gray-600">
                  Get direct access to templates, scripts, and methods that Talha uses personally. These aren&apos;t available anywhere else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
