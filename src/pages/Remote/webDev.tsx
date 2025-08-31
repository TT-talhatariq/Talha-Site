import IsThisForYou from '@/components/IsThisForYou';
import CourseContent from '@/components/CourseContent';
import Testimonials from '@/components/Testimonials';
import Bonuses from '@/components/Bonuses';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';
import HeroSectionRemote from '@/components/HeroSectionRemote';
import StickyBottomButton from '@/components/StickyBottomButton';


export default function RemotePage() {
  const targetAudiencePoints = [
    "You want location, time and financial freedom",
    "You're ANGRY that companies pay foreigners 10x more for the same skills you have",
    "You're TIRED of earning peanuts while watching others live luxuriously from their laptops",
    "You're SICK of begging for salary raises that barely cover inflation",
    "You're DESPERATE to escape the 9-5 prison and work from anywhere in the world",
    "You're FRUSTRATED seeing your friends earning $3000+ USD while you struggle with local jobs",
    "You're READY to finally break free and join the global workforce earning in USD",
    "You do have skills, but don't know how to get them noticed",
  ];

  const modules = [
    {
      number: "1",
      title: "Work Globally & Earn in USD",
      bgGradient: "bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30",
      items: [
        "Break the 'Local Job' Prison Mentality",
        "Why Companies Pay 10x More for Remote Workers",
        "The Psychology of Global Hiring Managers",
        "How to Land a high paying remote jobs",
        "Freelancing vs Remote Jobs",
      ],
      image: "/assets/earr.png",
      imageAlt: "Location Freedom Lifestyle"
    },
    {
      number: "2", 
      title: "LinkedIn: Your $3000/Month Money Machine",
      bgGradient: "bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30",
      items: [
        "How to make a Killer & Convincing profile",
        "How to Choose a niche and develop a brand",
        "Strategy to Create Content",
        "3C model for success on LinkedIn",
        "Secrets to networking",
        "How to get work offers in bulk",
      ],
      image: "/assets/gif/4.png",
      imageAlt: "LinkedIn Success Strategy"
    },
    {
      number: "3", 
      title: "Upwork: Beat 99% of Competition",
      bgGradient: "bg-gradient-to-br from-white via-orange-50/40 to-amber-100/30",
      items: [
        "The 'Irresistible Killer Profile' Formula",
        "Proposal Templates That Win Every Time",
        "Price Psychology: Charge Premium Rates",
        "Get 5-Star Reviews Guaranteed",
        "Scale from 100$ to 3K+/Month",
        "Insider Tricks Top 1% Use",
      ],
      image: "/assets/gif/3.png",
      imageAlt: "Upwork Success Reviews"
    },
    {
      number: "4",
      title: "Remote Job Hunting Like a Predator",
      bgGradient: "bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30",
      items: [
        "Hidden Job Boards Only Insiders Know",
        "Bypass HR & Reach Decision Makers Directly",
        "Interview Hacks That Guarantee Offers",
        "Salary Negotiation: Get 50% More Than Asked",
        "10+ Platforms to apply and win remote jobs",
        "Cold Outreach That Gets 80% Response Rate"
      ],
      image: "/assets/ss4.png",
      imageAlt: "Remote Job Success"
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
        title: "5 Money-Making Modules",
        description: "LinkedIn, Upwork, Remote Jobs & Scaling Systems"
      },
      {
        title: "Proven Templates",
        description: "My exact scripts that generated massive income"
      },
      {
        title: "Global Opportunities Access",
        description: "Hidden job boards & exclusive deal flow"
      },
      {
        title: "Elite Mastermind Community",
        description: "Network with 1000+ high-earning remote workers"
      },
      {
        title: "Lifetime Money Updates",
        description: "Forever access + new strategies as markets evolve"
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
      ],
      href: '/checkout-remote-work'
     
    };

  return (
    <div >
      <HeroSectionRemote />
      <IsThisForYou points={targetAudiencePoints} />
     
      <CourseContent modules={modules} />
      <Testimonials
        href="/checkout-remote-work"
        />
      <Bonuses bonuses={bonuses} />
      <Pricing 
        originalPrice="50,000"
        currentPrice="2,999"
        valueItems={pricingValueItems}
        discountPercentage="94% OFF"
        href="/checkout-remote-work"
      />
      <FAQ />
      <AboutMe statsImages={aboutMeData.statsImages} href={aboutMeData.href} />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}