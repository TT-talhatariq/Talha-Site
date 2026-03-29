import AboutMe from '@/components/AboutMe';
import Bonuses from '@/components/Bonuses';
import CourseContent from '@/components/CourseContent';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroSectionRemote from '@/components/HeroSectionRemote';
import IsThisForYou from '@/components/IsThisForYou';
import Pricing from '@/components/Pricing';
import StickyBottomButton from '@/components/StickyBottomButton';
import Testimonials from '@/components/Testimonials';

export default function RemotePage() {
  const targetAudiencePoints = [
    'You want more time, choice of place, and better money.',
    'It stings when overseas pay is much higher for the same skills.',
    'You grind on local pay while others earn dollars online.',
    'Tiny raises that only match prices going up are not a real plan.',
    'One office job for life does not feel safe anymore.',
    'You want foreign clients and dollar pay without moving country.',
    'You have skills. You need a simple path to get seen and paid.',
  ];

  const modules = [
    {
      number: '1',
      title: 'Remote Work Foundation',
      bgGradient:
        'bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30',
      items: [
        'Why more companies hire remote. Why local-only pay often stays low.',
        'Why Pakistan is a strong place to start remote and earn in dollars.',
        'Real pay ranges for remote jobs at each level.',
        'How pay and options can grow over time in a remote career.',
        'Your first remote job, step by step, even with little experience.',
        'Pick a focus area so clients are happy to pay you more.',
      ],
      image: '/assets/earr.png',
      imageAlt: 'Remote work basics and earning in dollars',
    },
    {
      number: '2',
      title: 'Make a Killer Resume (ATS-Friendly)',
      bgGradient:
        'bg-gradient-to-br from-white via-teal-50/40 to-cyan-100/30',
      items: [
        'Why your resume matters more than you think.',
        'Tools and steps to build a resume people actually read.',
        'Write job lines that make recruiters want to call you.',
        'Order each section so software and people both say yes.',
        'Small edits that take you from okay to short list.',
        'Pass ATS checks and still sound like a real person.',
      ],
      image: '/assets/resume.png',
      imageAlt: 'ATS-friendly resume that gets read',
    },
    {
      number: '3',
      title: '8 Methods to Hunt Remote Jobs',
      bgGradient:
        'bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30',
      items: [
        'Hidden job boards insiders actually use.',
        'Bypass HR: message hiring managers and decision-makers.',
        'Company career pages: apply where listings are freshest.',
        '10+ platforms to find and win remote roles.',
        'Cold outreach that gets real replies.',
        'Referrals and warm intros from your network.',
        'Job alerts and a weekly rhythm so you never start from zero.',
        'Interview moves that turn screens into real offers.',
      ],
      image: '/assets/ss4.png',
      imageAlt: 'Remote Job Success',
    },
    {
      number: '4',
      title: 'LinkedIn: $3K+/Month Remote Job Hunting',
      bgGradient:
        'bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30',
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
      imageAlt: 'LinkedIn personal brand content and outreach',
    },
    {
      number: '5',
      title: 'Crack Upwork like a Pro',
      bgGradient:
        'bg-gradient-to-br from-white via-orange-50/40 to-amber-100/30',
      items: [
        'Build a killer profile around photo and title and skills and trust.',
        'Write an overview that sells your offer and proof in one fast read.',
        'Show portfolio proof with samples and numbers and short blurbs only.',
        'Skip junk invites and fight for roles that truly fit you.',
        'Use premium packages and price floors and walk away from cheap work.',
        'Send proposals that stack hook and proof and plan and one clear next step.',
        'Stay strict on search fit while you grow from small wins to four-K months.',
      ],
      image: '/assets/gif/3.png',
      imageAlt: 'Upwork profile proposals and premium pricing',
    },
    {
      number: '6',
      title: 'Cracking Remote Interviews',
      bgGradient: 'bg-gradient-to-br from-white via-rose-50/40 to-pink-100/30',
      items: [
        'Interviews decoded: what companies test for and how to show up sharp.',
        'Interview types to prep for: recruiter screen, hiring manager, panel, technical, async.',
        'STAR method: proven structure to win behavioral and story questions.',
        'Prep that closes: resources, checklists, and drills built for remote interviews.',
      ],
      image: '/assets/ss2.png',
      imageAlt: 'Remote interview prep and STAR method',
    },
  ];

  const bonuses = [
    {
      image: '/assets/direct.png',
      imageAlt: 'Direct mentorship with Talha',
      title: 'Ask Me Directly',
      description:
        'Stuck on your profile, a proposal, or an offer? You get real notes from me, not copy-paste replies.',
      highlight: true,
    },
    {
      image: '/assets/image.png',
      imageAlt: 'Tech Portal dashboard and tools',
      title: 'Tech Portal (All Your Tools in One Place)',
      description:
        'LinkedIn and Upwork helpers, resume tools, portfolio space, tracks, interview practice, and application tracking. One login.',
      highlight: true,
    },
    {
      image: '/assets/comm.jpeg',
      imageAlt: 'Community of remote-work learners',
      title: '700+ Learners With You',
      description:
        'Ask questions, share wins, and stay on track with people doing the same thing.',
      highlight: false,
    },
    {
      image: '/assets/upwork.png',
      imageAlt: 'Winning Upwork proposals',
      title: 'My Proposal Playbook',
      description:
        'How I wrote proposals that turned chats into paid work. Copy the shape, use your own words.',
      highlight: true,
    },
  ];

  const pricingValueItems = [
    {
      title: '6 Clear Modules',
      description:
        'Basics, resume, job search, LinkedIn, Upwork, then interviews. One path end to end.',
    },
    {
      title: 'Ready-to-Use Templates',
      description:
        'Scripts and layouts I used for real clients. Edit them for you.',
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
      description:
        'Simple layouts that look good to people and to job software.',
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
        imageAlt: 'Remote Work Setup',
        title: 'Public Speaking',
      },
    ],
    href: '/checkout-remote-work',
  };

  return (
    <div>
      <HeroSectionRemote />
      <IsThisForYou points={targetAudiencePoints} />

      <CourseContent modules={modules} />
      <Testimonials href="/checkout-remote-work" />
      <Bonuses bonuses={bonuses} />
      <Pricing
        originalPrice="50,000"
        currentPrice="4,497"
        valueItems={pricingValueItems}
        discountPercentage="91% OFF"
        href="/checkout-remote-work"
      />
      <FAQ />
      <AboutMe statsImages={aboutMeData.statsImages} href={aboutMeData.href} />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}
