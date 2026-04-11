import AboutMe from '@/components/AboutMe';
import Bonuses from '@/components/Bonuses';
import CourseContent, { type CourseModule } from '@/components/CourseContent';
import FAQ, { remoteWorkFaqs } from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroSectionRemote from '@/components/HeroSectionRemote';
import IsThisForYou, { type NotForYouPoint } from '@/components/IsThisForYou';
import Pricing from '@/components/Pricing';
import {
  RemoteFalseBeliefsSection,
  RemoteFinalCtaSection,
  RemoteGuaranteeSection,
  RemoteInstructorBioSection,
  RemoteOpportunitySection,
  RemoteProblemSection,
  RemoteStorySection,
} from '@/components/remote/RemoteMarketingSections';
import StickyBottomButton from '@/components/StickyBottomButton';
import Testimonials from '@/components/Testimonials';

export default function RemotePage() {
  const targetAudiencePoints = [
    'You have a skill — development, design, writing, marketing, data — and want to monetize it globally',
    "You're employed locally in PKR and want to transition to dollar income without quitting your job first",
    "You've tried remote applications before and got zero results",
    'You want to work from home on your own terms',
    'You can handle professional English in writing and on calls',
  ];

  const notForYouPoints: Array<string | NotForYouPoint> = [
    'You want overnight results without changing anything.',
    "You're not willing to put in about 2–3 focused hours a day for six weeks.",
  ];

  const modules: CourseModule[] = [
    {
      number: '1',
      title: 'Remote Work Foundation',
      subtitle: '"Understand exactly why you haven\'t been hired yet — and what specifically to fix"',
      bgGradient: 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30',
      items: [
        'Why remote companies hire and what they\'re actually filtering for',
        "Pakistan's real advantages for remote work (most people don't know these)",
        'Actual salary ranges by experience level',
        'How pay and options can grow over time in a remote career.',
        'Your first remote job, step by step, even with little experience',
      ],
      image: '/assets/earr.png',
      imageAlt: 'Remote work foundation and career path',
    },
    {
      number: '2',
      title: 'The Killer ATS Resume',
      subtitle: '"Your resume is live, ATS-optimized, and submitted within 48 hours of finishing this module"',
      bgGradient: 'bg-gradient-to-br from-white via-teal-50/40 to-cyan-100/30',
      items: [
        'How ATS systems work, and the exact mistakes that get your resume auto-rejected',
        'Resume structure that passes software AND impresses hiring managers',
        'How to write job descriptions in your resume that make recruiters stop scrolling',
        'Minor changes that transform a weak application into a strong one',
        'The exact tools Talha uses to build ATS-friendly resumes in under 2 hours',
      ],
      image: '/assets/resume.png',
      imageAlt: 'ATS-optimized resume',
    },
    {
      number: '3',
      title: '8 Methods to Hunt Remote Jobs',
      subtitle: '"A weekly system that produces consistent interview invitations — not random applications"',
      bgGradient: 'bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30',
      items: [
        'Insider job boards that most Pakistani professionals have never heard of',
        'Direct hiring manager outreach, bypass the application queue entirely',
        'Company career pages: how to target companies that hire Pakistani talent',
        '10+ remote job discovery platforms with filters',
        'Cold outreach scripts: templates that get responses',
        'Referral and warm introduction tactics, even without existing connections',
        'The weekly job hunt workflow: exactly how many applications, what platforms, what days',
      ],
      image: '/assets/ss4.png',
      imageAlt: 'Remote job hunting methods',
    },
    {
      number: '4',
      title: 'LinkedIn for $3,000+/Month',
      subtitle: '"Recruiters start finding you. Your DMs start moving. Your profile converts visitors to conversations."',
      bgGradient: 'bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30',
      items: [
        'Personal brand: story, proof, clear who you help.',
        'Niche formula so you are not another generalist.',
        'Hidden levers: search, creator mode, featured, strong extras.',
        'Profile that turns views into DMs: headline to proof, in order.',
        'Content: hooks, real lessons, soft asks, steady pace.',
        '3C model: clear message, steady posts, chats to calls.',
        'Networking and cold DMs: comments, intros, one angle, one ask.',
      ],
      image: '/assets/gif/4.png',
      imageAlt: 'LinkedIn for remote income',
    },
    {
      number: '5',
      title: 'Crack Upwork Like a Pro',
      subtitle: '"Profile live, niche set, first proposal sent using the winning formula — this week"',
      bgGradient: 'bg-gradient-to-br from-white via-orange-50/40 to-amber-100/30',
      items: [
        'Build a killer profile: photo, title, skills, and trust signals — all optimized',
        'Write an overview that sells your offer and proof in one fast read',
        'Show portfolio proof with samples, numbers, and short blurbs',
        'Skip low-quality invites and bid only on roles that truly fit',
        'Set premium packages and price floors — never race to the bottom',
        'Write proposals with a strong hook, proof, plan, and one clear next step',
        'Scale from early wins to $4,000+/month with a disciplined search process',
      ],
      image: '/assets/gif/3.png',
      imageAlt: 'Upwork profile and proposals',
    },
    {
      number: '6',
      title: 'Cracking Remote Interviews',
      subtitle: '"You walk into any interview knowing exactly what to say, what they\'re evaluating, and how to close the offer"',
      bgGradient: 'bg-gradient-to-br from-white via-rose-50/40 to-pink-100/30',
      items: [
        'Interview types: recruiter screens, hiring managers, panels, technical, async',
        'STAR method for behavioral questions, with examples for tech and non-tech roles',
        'Technical interview preparation: coding challenges, system design, live demos',
        'HR interview psychology: what they\'re actually looking for beneath the questions',
      ],
      image: '/assets/ss2.png',
      imageAlt: 'Remote interviews and negotiation',
    },
  ];

  const bonuses = [
    {
      image: '/assets/upwork.png',
      imageAlt: 'Proposal Playbook',
      title: '📋 The Proposal Playbook',
      description:
        'Real proposals that won real clients — deconstructed word by word. Copy the structure, adapt the words, send today.',
      highlight: true,
    },
    {
      image: '/assets/image.png',
      imageAlt: 'Tech Portal AI Career Suite',
      title: '🤖 The Tech Portal — AI Career Suite',
      description:
        '6 AI-powered tools: LinkedIn Profile Optimizer, Upwork Proposal Generator, ATS Resume Builder, Interview Lab, Portfolio Builder, Application Tracker.',
      highlight: true,
    },
    {
      image: '/assets/direct.png',
      imageAlt: 'Ask Me Directly mentorship',
      title: '📩 Bonus 3: Ask Me Directly',
      description:
        'Personal feedback from Talha on your profile, proposals, resume, or offer letter.',
      highlight: true,
    },
    {
      image: '/assets/comm.jpeg',
      imageAlt: 'Remote worker community',
      title: '👥 The 700+ Remote Worker Community',
      description:
        'Private network: job leads, proposal reviews, accountability.',
      highlight: false,
    }
  ];

  const pricingValueItems = [
    {
      title: '6 Clear Modules',
      description:
        'Basics, resume, job search, LinkedIn, Upwork, then interviews. One path end to end.',
    },
    {
      title: 'Ready-to-Use Templates',
      description: 'Scripts and layouts I used for real clients. Edit them for you.',
    },
    {
      title: 'Where Global Jobs Really Are',
      description: 'Not only random apply clicks. Built for overseas hiring.',
    },
    {
      title: '700+ People in Your Corner',
      description: 'Learn with others so you do not quit in week two.',
    },
    {
      title: 'Lifetime Access',
      description: 'Keep the course and get new tips when hiring changes.',
    },
    {
      title: 'Free Resume Book',
      description: 'Simple layouts that look good to people and to job software.',
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
    href: '/checkout-remote-work',
  };

  return (
    <div>
      <HeroSectionRemote />
      <RemoteProblemSection />
      {/* <RemoteFalseBeliefsSection /> */}
      {/* <RemoteStorySection /> */}
      <IsThisForYou
        points={targetAudiencePoints}
        title="Who This Is Built For"
        subtitle="For professionals in Pakistan who are tired of applying into silence — and ready for a clear, week-by-week system (not more random tips)."
        bottomText=""
        notForYouPoints={notForYouPoints}
        notForYouTitle="This Is NOT For You If —"
        showCrossSellFooter={false}
      />
      <CourseContent
        modules={modules}
        preLabel="The 6-Week Dollar Income System"
        heading={
          <>
            Course <span className="text-orange-500">Curriculum</span>
          </>
        }
        subheading="Numbered path from foundation to interviews — with clear outcomes after every module."
        midCtaLabel="ENROLL NOW"
        midCtaHref="#pricing"
        midCtaFinePrint="Instant access · Lifetime · 60-Day Remote Offer Guarantee"
      />
      {/* <RemoteOpportunitySection /> */}
      <Testimonials href="/checkout-remote-work" showSuccessStories={false} />
      {/* <RemoteGuaranteeSection /> */}
      <Bonuses
        bonuses={bonuses}
        sectionTitle={
          <>
            Everything That&apos;s Included —{' '}
            <span className="text-orange-500">What It Would Cost Separately</span>
          </>
        }
        sectionSubtitle="Here's what you get — and what it would cost you separately. Total standalone value: PKR 59,000. Your price today: PKR 4,797 (founding members; price increases as enrollment grows)."
      />
      <RemoteInstructorBioSection />
      <AboutMe statsImages={aboutMeData.statsImages} href={aboutMeData.href} />
      <Pricing
        originalPrice="59,000"
        currentPrice="4,797"
        valueItems={pricingValueItems}
        discountPercentage="92% OFF"
        href="/checkout-remote-work"
        showCountdown={false}
      />
      {/* <RemoteFinalCtaSection /> */}
      <FAQ faqs={remoteWorkFaqs} intro="Straight answers about skills, time, refunds, and the Tech Portal." />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}
