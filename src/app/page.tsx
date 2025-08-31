
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Master Web Development & 9 Proven ways to Earn",
      subtitle: "Complete Frontend & Backend Course",
      description: "Stop watching endless tutorials that lead nowhere! Learn the EXACT skills that got me $4000+ monthly clients. Build 15+ real projects and discover the 9 proven methods I use to earn consistently online.",
      price: "PKR 2,999",
      features: [
        "🚀 15+ Real Projects (Not Boring Tutorials!)",
        "💻 HTML, CSS, JavaScript & React Mastery",
        "💰 9 PROVEN Ways to Earn $500-5000/Month",
        "🎯 Upwork & LinkedIn Domination Secrets",
        "📈 Portfolio That Gets You HIRED",
        "🔥 Freelancing Strategies That Actually Work",
        "💼 Job Interview Prep (Land Remote Jobs)",
        "⚡ From Zero to First Client in 30 Days",
      ],
      image: "/assets/gif/1.png",
      bgGradient: "from-blue-50/40 via-indigo-50/30 to-purple-50/20",
      badgeColor: "bg-blue-600",
      link: "/web-dev",
      originalPrice: "50,000",
      discount: "94% OFF",
    },
    {
      id: 2,
      title: "Remote Work Mastery",
      subtitle: "Work Globally & Earn in USD",
      description: "TIRED of earning peanuts while your skills are worth GOLD? Break free from local salary limits! I'll show you the EXACT system I used to land $3000+ USD remote jobs and work with global clients from my bedroom.",
      price: "2,999",
      features: [
        "🌍 LinkedIn Hacks That Get You NOTICED",
        "🎯 Niche Selection for Maximum Earnings",
        "💎 Upwork Secrets (Beat 99% Competition)",
        "🔍 Global Job Hunting Like a PRO",
        "🎤 Remote Interview Skills That WIN",
        "💸 Salary Negotiation (Get 50% More!)",
        "⚡ Personal Branding That Attracts Clients",
        "🚀 From Local Jobs to Global Opportunities",
      ],
      image: "/assets/gif/2.png",
      bgGradient: "from-green-50/40 via-emerald-50/30 to-teal-50/20",
      badgeColor: "bg-blue-600",
      link: "/remote-work",
      originalPrice: "50,000",
      discount: "94% OFF",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20">
      {/* Hero Section */}
      <NavBar />
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 via-blue-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-orange-200/30 via-orange-100/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-orange-600 text-sm font-semibold tracking-wide uppercase">
                WELCOME TO TALHA&apos;S SCHOOL
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hey, I&apos;m <span className="text-blue-600">Talha</span> 👋
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                From <span className="text-red-600">Broke Student</span> to <span className="text-green-600">Financial Freedom</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <strong>STOP struggling with your career!</strong> I went from earning peanuts to <span className="text-green-600 font-bold">dream income monthly</span> using the EXACT strategies I&apos;m about to teach you. No fluff, no theory - just <span className="text-blue-600 font-semibold">REAL methods that actually work</span> in 2025.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-50/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 shadow-sm">
                <span className="text-sm font-bold text-green-700">🔥 1000+ Success Stories</span>
              </div>
              <div className="bg-orange-50/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200/50 shadow-sm">
                <span className="text-sm font-bold text-orange-700">🎯 100% Practical Methods</span>
              </div>
            </div>

            {/* Urgency Message */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-700 mb-2">⚠️ WARNING: Limited Time Offer!</h3>
                <p className="text-red-600 font-semibold">
                  These courses are currently 94%+ OFF. Prices will return to normal soon. 
                  <span className="block text-sm mt-1">Don&apos;t let this opportunity slip away!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 lg:py-0 relative bg-gradient-to-b from-white via-blue-50/20 to-orange-50/30 overflow-hidden">
        {/* Section background gradients */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-300/20 via-blue-200/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-gradient-to-tl from-orange-300/20 via-orange-200/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-[1440px] mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative bg-gradient-to-br ${course.bgGradient} rounded-3xl p-8 shadow-xl border border-white/50 backdrop-blur-sm overflow-hidden`}
              >
                {/* Beautiful gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 pointer-events-none"></div>
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${course.badgeColor} opacity-10 rounded-full blur-3xl animate-pulse`}></div>
                <div className={`absolute -bottom-10 -left-10 w-32 h-32 ${course.badgeColor} opacity-5 rounded-full blur-2xl animate-pulse animation-delay-2000`}></div>
                
                {/* Floating gradient orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-xl opacity-60 animate-float"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-lg opacity-50 animate-float animation-delay-1000"></div>

             

                <div className="space-y-6 relative z-10">
                  {/* Course Image */}
                  <div className="aspect-video bg-white/50 rounded-2xl overflow-hidden border border-white/30">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Course Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 text-lg">🎯 What You&apos;ll Master:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {course.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="text-green-500 text-sm mt-1">✅</span>
                            <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                          </div>
                        ))}
                        {course.features.length > 4 && (
                          <div className="flex items-center space-x-2">
                            <span className="text-orange-500 text-sm">🔥</span>
                            <span className="text-sm text-orange-700 font-semibold">+ {course.features.length - 4} more game-changing strategies!</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-bold text-green-600">{course.price}</span>
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                            {course.discount}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg text-gray-500 line-through">PKR {course.originalPrice}</span>
                          <span className="text-sm text-red-600 font-semibold">Limited Time!</span>
                        </div>
                      </div>
                      
                      <Link href={course.link}>
                        <button className={`w-full ${course.badgeColor} hover:opacity-90 text-white font-bold py-4 px-6 rounded-2xl transition-opacity duration-200 shadow-lg`}>
                          🚀 START EARNING NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
