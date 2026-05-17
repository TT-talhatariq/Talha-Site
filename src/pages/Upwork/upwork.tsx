import AboutMe from '@/components/AboutMe';
import Bonuses from '@/components/Bonuses';
import CourseContent, { type CourseModule } from '@/components/CourseContent';
import FAQ, { upworkFaqs } from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroSectionUpwork from '@/components/HeroSectionUpwork';
import IsThisForYou, { type NotForYouPoint } from '@/components/IsThisForYou';
import Pricing from '@/components/Pricing';
import { RemoteInstructorBioSection } from '@/components/remote/RemoteMarketingSections';
import StickyBottomButton from '@/components/StickyBottomButton';
import Testimonials from '@/components/Testimonials';
import {
  UpworkFinalCtaSection,
  UpworkOutcomeSection,
  UpworkProblemSection,
} from '@/components/upwork/UpworkMarketingSections';

export default function UpworkPage() {
  const targetAudiencePoints = [
    'You have a real skill — development, design, writing, marketing, video, data — and want to sell it on Upwork',
    "You've made an Upwork profile and sent proposals, but get little or no response",
    'You keep dropping your price to compete and still lose the job',
    'You want a repeatable system, not random tips you found in YouTube comments',
    'You can handle professional English in writing and on a short client call',
  ];

  const notForYouPoints: Array<string | NotForYouPoint> = [
    'You want clients overnight without rebuilding your profile or proposals.',
    {
      text: "You don't have a marketable skill yet — start with the Web Dev course first.",
      linkHref: '/web-dev',
      linkLabel: 'See the Web Development course',
    },
  ];

  const modules: CourseModule[] = [
    {
      number: '1',
      title: 'Upwork Foundations & Niche Setup',
      subtitle:
        '"You finish this module knowing exactly what you sell, to whom, and why Upwork will pay for it."',
      bgGradient: 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30',
      items: [
        'How Upwork actually works — the algorithm, Connects, and what clients see first',
        'Account approval: how to get accepted and avoid the common rejection reasons',
        'Niche selection — picking a lane that pays, instead of being a cheap generalist',
        "The mindset shift: you sell client outcomes, not a list of your skills",
      ],
    },
    {
      number: '2',
      title: 'The Profile That Wins Clients',
      subtitle:
        '"Your profile is live, optimized, and reads like a $1,000+ freelancer — not a beginner."',
      bgGradient: 'bg-gradient-to-br from-white via-teal-50/40 to-cyan-100/30',
      items: [
        'Profile photo, title, and skills that build instant trust',
        'Write an overview that sells your offer and proof in one fast read',
        'The trust signals clients scan for before they ever message you',
        'Profile mistakes that quietly get you skipped — and how to fix each one',
      ],
    },
    {
      number: '3',
      title: 'Portfolio Proof (Even With Zero Clients)',
      subtitle:
        '"You have a portfolio that proves results — built from scratch if you have no paid clients yet."',
      bgGradient: 'bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30',
      items: [
        'Show portfolio proof with samples, numbers, and short result blurbs',
        'How to create credible sample work when you have no client history',
        'Framing past work — jobs, projects, study — as results a client cares about',
        'Presenting your portfolio so it answers the client\'s real question: "can you do this for me?"',
      ],
    },
    {
      number: '4',
      title: 'Finding Jobs Worth Your Connects',
      subtitle:
        '"You stop wasting Connects and only bid on jobs you can realistically win."',
      bgGradient: 'bg-gradient-to-br from-white via-amber-50/40 to-orange-100/30',
      items: [
        'Skip low-quality invites and bid only on roles that truly fit',
        'A simple job-scoring check before you spend a single Connect',
        "Reading a job post for the real budget and the client's actual problem",
        'A weekly bidding workflow — how many proposals, on what kind of jobs',
      ],
    },
    {
      number: '5',
      title: 'Proposals That Get Replies',
      subtitle:
        '"Your first proposal is sent using the winning formula — this week."',
      bgGradient: 'bg-gradient-to-br from-white via-rose-50/40 to-pink-100/30',
      items: [
        'The proposal formula: a strong hook, proof, a short plan, and one clear next step',
        'The first two lines that decide whether the client keeps reading',
        'How to sound tailored and human — not like a copy-pasted template',
        'Follow-up etiquette: when and how to nudge without sounding desperate',
      ],
    },
    {
      number: '6',
      title: 'Pricing, Scaling & Top Rated',
      subtitle:
        '"You have a pricing structure and a clear path from first win to $4,000+/month."',
      bgGradient: 'bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30',
      items: [
        'Set premium packages and price floors — never race to the bottom',
        'Turning a first small job into a 5-star review and repeat work',
        'Scaling from early wins to $4,000+/month with a disciplined search process',
        'What it actually takes to earn — and keep — the Top Rated badge',
      ],
    },
  ];

  const bonuses = [
    {
      image: '/assets/upwork.png',
      imageAlt: 'The Proposal Playbook',
      title: '📋 The Proposal Playbook',
      description:
        'Real proposals that won real clients — deconstructed line by line. Copy the structure, adapt the words, send today.',
      highlight: true,
    },
    {
      image: '/assets/image.png',
      imageAlt: 'AI Upwork Proposal Generator',
      title: '🤖 AI Upwork Proposal Generator',
      description:
        'Paste a job description, get a tailored, copy-paste-ready proposal in under 2 minutes. No more blank-box paralysis.',
      highlight: true,
    },
    {
      image: '/assets/direct.png',
      imageAlt: 'Ask Me Directly mentorship',
      title: '📩 Ask Me Directly',
      description:
        'Personal feedback from Talha on your Upwork profile and proposals — before you send them.',
      highlight: true,
    },
    {
      image: '/assets/comm.jpeg',
      imageAlt: 'Remote worker community',
      title: '👥 The 700+ Remote Worker Community',
      description:
        'Private network: job leads, proposal reviews, and accountability.',
      highlight: false,
    },
  ];

  const pricingValueItems = [
    {
      title: '6 Focused Modules',
      description:
        'Foundations, profile, portfolio, finding jobs, proposals, then scaling. One clear path.',
    },
    {
      title: 'The Proposal Playbook',
      description: 'Winning proposals you can copy and adapt to your own niche.',
    },
    {
      title: 'AI Proposal Generator',
      description: 'Tailored, ready-to-send proposals in under 2 minutes.',
    },
    {
      title: 'Ask Me Directly',
      description: 'Personal feedback on your profile and proposals from Talha.',
    },
    {
      title: '700+ People in Your Corner',
      description: 'A private community so you stay consistent and unstuck.',
    },
    {
      title: 'Lifetime Access',
      description: 'Keep the course and every future update — pay once.',
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
        image: '/assets/earnings.png',
        imageAlt: 'Direct Clients',
        title: 'Direct Clients',
      },
    ],
    href: '/checkout-upwork',
  };

  return (
    <div>
      <HeroSectionUpwork />
      <UpworkProblemSection />
      <IsThisForYou
        points={targetAudiencePoints}
        title="Who This Is Built For"
        subtitle="For freelancers in Pakistan who are tired of sending proposals into silence — and ready for a clear, step-by-step Upwork system."
        bottomText=""
        notForYouPoints={notForYouPoints}
        notForYouTitle="This Is NOT For You If —"
        showCrossSellFooter={false}
      />
      <CourseContent
        modules={modules}
        preLabel="The 4-Week Upwork Client System"
        heading={
          <>
            Course <span className="text-orange-500">Curriculum</span>
          </>
        }
        subheading="A numbered path from a dead profile to your first $1,000+ client — with a clear outcome after every module."
        midCtaLabel="ENROLL NOW"
        midCtaHref="#pricing"
        midCtaFinePrint="Instant access · Lifetime · 7-Day Refund"
      />
      <UpworkOutcomeSection />
      <Testimonials href="/checkout-upwork" showSuccessStories={false} />
      <Bonuses
        bonuses={bonuses}
        sectionTitle={
          <>
            Everything That&apos;s Included —{' '}
            <span className="text-orange-500">In One Course</span>
          </>
        }
        sectionSubtitle="Your price today: PKR 1,997 (founding members; price increases as enrollment grows)."
      />
      <RemoteInstructorBioSection />
      <AboutMe statsImages={aboutMeData.statsImages} href={aboutMeData.href} />
      <Pricing
        originalPrice="20,000"
        currentPrice="1,997"
        valueItems={pricingValueItems}
        discountPercentage="90% OFF"
        href="/checkout-upwork"
        showCountdown={false}
      />
      <UpworkFinalCtaSection />
      <FAQ
        faqs={upworkFaqs}
        intro="Straight answers about profiles, proposals, time, and refunds."
      />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}
