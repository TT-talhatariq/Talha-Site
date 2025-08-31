import IsThisForYou from '@/components/IsThisForYou';
import CourseContent from '@/components/CourseContent';
import Testimonials from '@/components/Testimonials';
import Bonuses from '@/components/Bonuses';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';
import HeroSection from '@/components/HeroSection';
import StickyBottomButton from '@/components/StickyBottomButton';


export default function WebDevPage() {
  const targetAudiencePoints = [
    "You're a Student of 18-35 years old, & tired of trying and failing many things",
    "You want to earn online but don't know where to begin",
    "You want real guidance from someone who's actually done it",
    "You want to work from home, but don't know how to start.",
    "You want to earn US salaries while being in Pakistan.",
    "You're SICK of being dependent on others for money and want financial freedom",
    "You're DESPERATE to escape the 9-5 grind and work from anywhere",
    "You're READY to finally learn skills that actually PAY the bills",
    "You're DONE making excuses and want to start earning $500-$4000 monthly"
  ];

  const modules = [
    {
      number: "1",
      title: "Web Development - Basic",
      bgGradient: "bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30",
      items: [
        "HTML Mastery - Build REAL websites, not boring forms",
        "CSS Magic - Create stunning designs that WOW clients", 
        "JavaScript Power - Make websites interactive & dynamic",
        "15+ Projects",
        "2 Portfolio Projects",
        "UI/UX Secrets that make make sites amazing'"
      ],
      image: "/assets/gif/1.png",
      imageAlt: "Web Development Code"
    },
    {
        number: "2",
        title: "Web Development - Advance",
        bgGradient: "bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30",
        items: [
            "React Mastery - Build apps that clients pay",
            "Advanced React", 
            "Modern UI/UX - Designs that convert visitors to customers",
            "Premium Projects - Build what agencies charge",
            "Deployment Mastery - Go live and start earning",
        ],
        image: "/assets/review.png",
        imageAlt: "Web Development Code"
    },
    {
      number: "3", 
      title: "9 PROVEN Money-Making Methods",
      bgGradient: "bg-gradient-to-br from-white via-orange-50/40 to-amber-100/30",
      items: [
        "Freelancing - (Upwork & LinkedIn)",
        "Remote Job Mastery - (Land $2000+ monthly jobs from your bedroom)",
        "Teaching - (Turn your skills into $500+ monthly income)",
        "Digital Products - (passive income!)",
        "LinkedIn - (Get clients into your DMs)",
        "Consultation - (Charge for your expertise)",
        "One-Person Agency - (Own Business)"
      ],
      image: "/assets/earr.png",
      imageAlt: "9 Ways to Earn Illustration"
    },
    {
      number: "4", 
      title: "Crack Upwork like a Pro",
      bgGradient: "bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30",
      items: [
        "Making Killer Profile That Gets You NOTICED",
        "Irresistible Descriptions - Make clients DESPERATE to hire you",
        "Portfolio That SELLS",
        "Job Selection Mastery",
        "Charge premium while others work for peanuts",
        "Proposal Templates That WIN",
        "Upwork Algorithm Hacks",
        "Scaling from 100$ to 4000$ monthly"
      ],
      image: "/assets/gif/3.png",
      imageAlt: "Upwork Profile Screenshot"
    },
    {
      number: "5",
      title: "Master LinkedIn for Remote Jobs",
      bgGradient: "bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30",
      items: [
        "Make Personal Brand That ATTRACTS",
        "Niche Selection Formula",
        "LinkedIn's Hidden Potential",
        "Profile That CONVERTS",
        "Content Strategy That WORKS",
        "3C Success Model",
        "Networking Ninja Tactics",
        "Cold Outreach strategies"
      ],
      image: "/assets/gif/4.png",
      imageAlt: "LinkedIn Profile Example"
    },
    {
      number: "6",
      title: "Get Global Offers in Bulk",
      bgGradient: "bg-gradient-to-br from-white via-rose-50/40 to-pink-100/30",
      items: [
        "Hidden Job Boards",
        "Resume That Gets INTERVIEWS",
        "Technical Interview Mastery",
        "Ace coding challenges like a pro",
        "HR Interview Psychology",
        "Job Offer Negotiation",
        "Client Acquisition System"
      ],
      image: "/assets/ss2.png",
      imageAlt: "Job Offer Success"
    }
  ];  

     const bonuses = [
     {
       image: "/assets/direct.png",
       imageAlt: "Direct Access to Mentor",
       title: "Direct Access to Me",
       description: "Get personal mentorship and feedback directly from Talha.",
       highlight: true
     },
     {
       image: "/assets/comm.jpeg",
       imageAlt: "Community of Learners",
       title: "Community of 400+ Learners",
       description: "Join our exclusive community where passionate learners help each other.",
       highlight: false
     },
     {
       image: "/assets/upwork.png",
       imageAlt: "100% Successful Upwork Proposals",
       title: "My Private Upwork Proposals",
       description: "I will give you my private proposals method that I used to get 100% successful job offers.",
       highlight: true
     },
     {
       image: "/assets/resume.png",
       imageAlt: "9 Ways to Earn",
       title: "Guaranteed Job Landing Resume",
       description: "I will give you a guaranteed job landing resume that will help you get a job.",
       highlight: false
           }
    ];

    const pricingValueItems = [
      {
        title: "Complete Web Development Course",
        description: "HTML, CSS, JavaScript + 15+ Projects"
      },
      {
        title: "9 Proven Earning Methods",
        description: "Freelancing, Jobs, Teaching & More"
      },
      {
        title: "Direct Access to Talha",
        description: "Personal mentorship & feedback"
      },
      {
        title: "♾️ Lifetime Access + Updates",
        description: "Learn forever, get new content as I add it"
      },
      {
        title: "Elite Community Access",
        description: "Network with 1000+ successful students"
      },
      {
        title: "Bonus Materials",
        description: "Worth $2000+ in additional resources"
      }
    ];

    const aboutMeData = {
        statsImages: [
        {
          image: "/assets/upProfile.png",
          imageAlt: "Upwork Top Rated Profile",
          title: "Upwork Top Rated Freelancer"
        },
        {
          image: "/assets/fiverr.png",
          imageAlt: "Fiverr Top Rated Seller",
          title: "Fiverr Top Rated Seller"
        },
        {
          image: "/assets/remotly.png",
          imageAlt: "Working Remotely Since Day 1",
          title: "Working Remotely Since Day 1"
        },
        {
          image: "/assets/earnings.png",
          imageAlt: "Direct Clients",
          title: "Direct Clients"
        },
        {
          image: "/assets/public.png",
          imageAlt: "Remote Work Setup",
          title: "Public Speaking"
        }
      ]
    };

  return (
    <div className="relative">
      <HeroSection />
      {/* <HeroSectionRemote /> */}
      <IsThisForYou points={targetAudiencePoints} />
     
      <CourseContent modules={modules} />
      <Testimonials />
      <Bonuses bonuses={bonuses} />
      <Pricing 
        originalPrice="50,000"
        currentPrice="2,999"
        valueItems={pricingValueItems}
        discountPercentage="94% OFF"
      />
      <FAQ />
      <AboutMe {...aboutMeData} />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}