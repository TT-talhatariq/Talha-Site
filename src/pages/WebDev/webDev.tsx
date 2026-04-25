import AboutMe from '@/components/AboutMe';
import Bonuses from '@/components/Bonuses';
import CourseContent, { type CourseModule } from '@/components/CourseContent';
import FAQ, { webDevFaqs } from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import IsThisForYou from '@/components/IsThisForYou';
import Pricing from '@/components/Pricing';
import StickyBottomButton from '@/components/StickyBottomButton';
import Testimonials from '@/components/Testimonials';
import {
  WebDevInstructorBioSection,
  WebDevOpportunitySection,
} from '@/components/web-dev/WebDevMarketingSections';

export default function WebDevPage() {
  const targetAudiencePoints = [
    "You're a student or fresh graduate who wants to earn online but doesn't know where to start",
    "You've tried applying for remote jobs or freelance work and got silence in return",
    'You want to earn in USD while living in Pakistan.',
    "You're DESPERATE to escape the 9-5 grind and work from anywhere.",
    "You're willing to put in 2–3 hours a day for 6 weeks to change your financial reality.",
  ];

  const notForYouPoints = [
    'You want a magic shortcut with no work involved',
    "You're not willing to build a real portfolio and write real proposals",
    "You expect results in 7 days.",
  ];

  const modules: CourseModule[] = [
    {
      number: '1',
      title: 'Web Development: Foundations',
      subtitle: 'Build your first real project — not a tutorial clone',
      bgGradient: 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30',
      items: [
        'HTML Mastery — structure and semantics',
        'CSS Magic — layouts, responsiveness, animations',
        'JavaScript Power - Make websites interactive & dynamic',
        '2 complete portfolio projects (yours to keep)',
        'UI/UX fundamentals — what makes a site look professional',
      ],
      image: '/assets/gif/1.png',
      imageAlt: 'Web development foundations',
    },
    {
      number: '2',
      title: 'Web Development: Advanced',
      subtitle: 'Build projects that look like they cost PKR 200,000 to make',
      bgGradient: 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30',
      items: [
          'React Mastery — interactive pages that pop',
          'Node.Js Mastery — data, forms, simple backend',
          'UI Master — premium layout and typography',
          'Portfolio Pro — work that impresses clients',
          'Go Live — real link, not folders',
      ],
      image: '/assets/review.png',
      imageAlt: 'Advanced web development',
    },
    {
      number: '3',
      title: 'The 9-Stream Income Blueprint',
      subtitle: 'Choose your income method — your path to your first PKR 50,000+ online is mapped out',
      bgGradient: 'bg-gradient-to-br from-white via-orange-50/40 to-amber-100/30',
      items: [
        'Freelancing on Upwork and LinkedIn (the #1 fastest path)',
        'Remote Job Mastery - (Land $2000+ monthly jobs from your bedroom)',
        'Teaching - earn PKR 20,000–80,000/month by teachings',
        'Digital Products - (passive income)',
        'LinkedIn - (Get clients into your DMs)',
        'Consultation - your first PKR 5,000/hour service',
        'One-Person Agency Model',
        'And 2 more methods covered in full',
      ],
      image: '/assets/earr.png',
      imageAlt: 'Nine income streams',
    },
    {
      number: '4',
      title: 'Crack Upwork Like a Pro',
      subtitle: 'Profile live, first proposal sent, algorithm unlocked',
      bgGradient: 'bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30',
      items: [
        'Killer profile creation (every element, every word, optimized)',
        'Portfolio that sells (not just shows)',
        'Job selection strategy (which jobs to bid on, which to ignore)',
        'Winning proposal templates (the exact structure that gets responses)',
        'Premium pricing tactics (never underprice yourself again)',
        'Upwork algorithm (how to get your profile pushed to clients)',
        'Scaling from your first $100 to $4,000+/month',
      ],
   
      image: '/assets/gif/3.png',
      imageAlt: 'Upwork profile and proposals',
    },
    {
      number: '5',
      title: 'Master LinkedIn for Remote Jobs',
      subtitle: 'Recruiters start finding you — not the other way around',
      bgGradient: 'bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30',
      items: [
        'Make Personal Brand That ATTRACTS',
        'Niche Selection Formula',
        'LinkedIn\'s Hidden Potential',
        'Profile That CONVERTS',
        'Content Strategy That WORKS',
        '3C Success Model',
        'Networking Ninja Tactics',
        'Cold Outreach Strategies',
      ],
      itemsLayout: 'stacked-with-separator',
      image: '/assets/gif/4.png',
      imageAlt: 'LinkedIn for remote jobs',
    },
    {
      number: '6',
      title: 'Get Global Offers in Bulk',
      subtitle: 'Interview ready, offer negotiated, first client or job secured',
      bgGradient: 'bg-gradient-to-br from-white via-rose-50/40 to-pink-100/30',
      items: [
        'Hidden Job Boards',
        'Resume That Gets INTERVIEWS',
        'Technical Interview Mastery',
        'Ace coding challenges like a pro',
        'HR Interview Psychology',
        'Job Offer Negotiation',
        'Client Acquisition System',
      ],
      itemsLayout: 'stacked-with-separator',
      image: '/assets/ss2.png',
      imageAlt: 'Job offers and interviews',
    },
  ];

  const bonuses = [
    {
      image: '/assets/direct.png',
      imageAlt: 'Direct mentor access',
      title: 'Bonus: Direct Mentor Access',
      description:
        'Get personal feedback from Talha on everything.',
      highlight: true,
    },
    {
      image: '/assets/upwork.png',
      imageAlt: 'Upwork launch',
      title: 'Bonus: The Upwork Launch System',
      description:
        'I will give you my private proposals method that I used to get 100% successful job offers.',
      highlight: true,
    },
    {
      image: '/assets/image.png',
      imageAlt: 'Tech Portal',
      title: 'Bonus: The Tech Portal Subscription',
      description:
        '6 AI-powered tools: LinkedIn Optimizer, Proposal Generator, ATS Resume Builder, Interview Lab, Portfolio Builder, Application Tracker. Standalone value: PKR 20,000.',
      highlight: true,
    },
    {
      image: '/assets/comm.jpeg',
      imageAlt: 'Community',
      title: 'Bonus: The 700+ Student Community',
      description:
        'Join our exclusive community where passionate learners help each other.',
      highlight: false,
    },
  ];

  const pricingValueItems = [
    {
      title: 'Core: Web Dev + Income System',
      description:
        'HTML through React + Backend (Node.js) + 9-Stream Blueprint',
    },
    {
      title: 'All Bonuses Above',
      description:
        'Upwork Launch, Tech Portal, live sessions, mentor access, community — listed on this page.',
    },
    {
      title: 'Lifetime Access + Updates',
      description: 'Every new lesson and module at no extra cost.',
    },
    {
      title: 'Templates & Scripts',
      description: 'Proposals, profiles, and structures from real client work.',
    },
  ];

  const aboutMeData = {
    statsImages: [
      {
        image: '/assets/upProfile.png',
        imageAlt: 'Upwork Top Rated Profile',
        title: 'Upwork Top Rated Freelancer',
      },
      {
        image: '/assets/fiverr.png',
        imageAlt: 'Fiverr Top Rated Seller',
        title: 'Fiverr Top Rated Seller',
      },
      {
        image: '/assets/remotly.png',
        imageAlt: 'Working Remotely Since Day 1',
        title: 'Working Remotely Since Day 1',
      },
      {
        image: '/assets/earnings.png',
        imageAlt: 'Direct Clients',
        title: 'Direct Clients',
      },
      {
        image: '/assets/public.png',
        imageAlt: 'Public speaking',
        title: 'Public Speaking',
      },
    ],
  };

  const testimonialQuotes = [
    {
      text: 'I had applied to over 40 remote jobs with zero responses. After Module 4, I rewrote my Upwork profile in one evening. Sent 5 proposals using Talha\'s structure. Got 2 responses in the first week. First contract signed at $400.',
      author: 'Student, Lahore',
    },
    {
      text: 'I was earning PKR 45,000 at a local software house. I thought I needed more experience before anyone would pay me online. Module 3 showed me I was wrong. I set up my Upwork profile in week 4. First client in week 6.',
      author: 'Student, Karachi',
    },
    {
      text: 'I had zero coding experience when I started. Now I have 2 portfolio projects live, a profile on Upwork, and my first client paid me PKR 25,000 for a landing page.',
      author: 'Student, Islamabad',
    },
  ];

  return (
    <div className="relative">
      <HeroSection />
      {/* <WebDevProblemSection /> */}
      <IsThisForYou
        points={targetAudiencePoints}
        title="This Is for You If ...."
        subtitle="If you are serious about earning online, read on."
        bottomText="If you're stuck, overwhelmed, or ready to finally start - this workshop is built for you. 🏆"
        notForYouPoints={notForYouPoints}
        notForYouTitle="This Is NOT For You If ...."
      />

      <CourseContent
        modules={modules}
        preLabel="The Web Dev + Income System Outline"
        heading={
          <>
            What You&apos;ll Build, Learn, and Be Able to Do
          </>
        }
        midCtaLabel="Start Right Now"
        midCtaHref="#pricing"
      />

      <WebDevOpportunitySection />

      <Testimonials quotes={testimonialQuotes} />
      <Bonuses
        bonuses={bonuses}
        sectionTitle="Everything That's Included — Bonuses"
      />
      <WebDevInstructorBioSection />
      <AboutMe {...aboutMeData} />
      <Pricing
        originalPrice="50,000"
        currentPrice="3,897"
        valueItems={pricingValueItems}
        discountPercentage="92% OFF"
      />
      <FAQ faqs={webDevFaqs} intro="Straight answers about the course, access, refunds, and the Tech Portal." />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}
