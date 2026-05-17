import AboutMe from '@/components/AboutMe';
import Bonuses from '@/components/Bonuses';
import CourseContent, { type CourseModule } from '@/components/CourseContent';
import FAQ, { linkedinFaqs } from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroSectionLinkedIn from '@/components/HeroSectionLinkedIn';
import IsThisForYou, { type NotForYouPoint } from '@/components/IsThisForYou';
import {
  LinkedInFinalCtaSection,
  LinkedInOutcomeSection,
  LinkedInProblemSection,
} from '@/components/linkedin/LinkedInMarketingSections';
import Pricing from '@/components/Pricing';
import { RemoteInstructorBioSection } from '@/components/remote/RemoteMarketingSections';
import StickyBottomButton from '@/components/StickyBottomButton';
import Testimonials from '@/components/Testimonials';

export default function LinkedInPage() {
  const targetAudiencePoints = [
    'You have a real skill and want recruiters and clients to find you — instead of you chasing them',
    'Your LinkedIn is set up, but it gets no messages, no DMs, and no inbound interest',
    'You want a clear way to position yourself so you are not just another generalist',
    'You want a posting rhythm you can actually keep — without it feeling like bragging',
    'You can write professional English well enough for a profile and short posts',
  ];

  const notForYouPoints: Array<string | NotForYouPoint> = [
    'You want a flood of leads tomorrow without rebuilding your profile or posting at all.',
    {
      text: "You'd rather focus on Upwork proposals than LinkedIn — take the Upwork course instead.",
      linkHref: '/upwork',
      linkLabel: 'See the Upwork Mastery course',
    },
  ];

  const modules: CourseModule[] = [
    {
      number: '1',
      title: 'Foundations & Your Personal Brand',
      subtitle:
        '"You finish this module knowing your story, your proof, and exactly who you help."',
      bgGradient: 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/30',
      items: [
        'Why most LinkedIn profiles get ignored — and what hiring managers actually scan for',
        'Personal brand: your story, your proof, and a clear who-you-help statement',
        'The shift from "digital resume" to "magnet" — and why it changes everything',
        'Setting a goal: recruiter inbound, client inbound, or both',
      ],
    },
    {
      number: '2',
      title: 'Niche & Positioning',
      subtitle:
        '"You pick a lane — so you stop being one more generalist in a crowded feed."',
      bgGradient: 'bg-gradient-to-br from-white via-teal-50/40 to-cyan-100/30',
      items: [
        'The niche formula: pick a positioning that is specific enough to be remembered',
        'How to sound focused without closing the door on opportunities',
        'Choosing the audience you want to attract — and speaking only to them',
        'Positioning examples for tech, design, marketing, writing, and data roles',
      ],
    },
    {
      number: '3',
      title: 'The Profile That Converts',
      subtitle:
        '"Your profile is live and rebuilt — headline to proof, in the order that turns views into DMs."',
      bgGradient: 'bg-gradient-to-br from-white via-purple-50/40 to-violet-100/30',
      items: [
        'A headline that does more than state your job title',
        'An About section that reads like a story, not a resume bullet list',
        'The Featured section: turning visitors into conversations',
        'Hidden levers most people miss — search, creator mode, and strong profile extras',
      ],
    },
    {
      number: '4',
      title: 'Content That Attracts',
      subtitle:
        '"You have a content system — so posting feels natural instead of like bragging."',
      bgGradient: 'bg-gradient-to-br from-white via-amber-50/40 to-orange-100/30',
      items: [
        'Hook formulas: the first line that decides whether anyone keeps reading',
        'Turning real lessons and small wins into posts people actually engage with',
        'The soft ask — inviting opportunities without sounding salesy',
        'A steady, low-effort posting pace you can keep for months, not days',
      ],
    },
    {
      number: '5',
      title: 'The 3C Growth Model',
      subtitle:
        '"You run a simple weekly rhythm that turns profile views into real conversations."',
      bgGradient: 'bg-gradient-to-br from-white via-rose-50/40 to-pink-100/30',
      items: [
        'The 3C model: a clear message, consistent posts, and chats that become calls',
        'A weekly LinkedIn workflow — what to post, comment on, and reply to',
        'Reading your profile views and post signals to know what is working',
        'Moving a warm contact from a comment to a DM to a real call',
      ],
    },
    {
      number: '6',
      title: 'Networking & Cold DMs',
      subtitle:
        '"You can open doors with the right people — using one angle and one clear ask."',
      bgGradient: 'bg-gradient-to-br from-white via-green-50/40 to-emerald-100/30',
      items: [
        'Networking that works: thoughtful comments, warm intros, and genuine replies',
        'Cold DM scripts that get answered — one angle, one ask, no walls of text',
        'How to reach hiring managers and clients directly, without sounding desperate',
        'Building real relationships that keep sending you opportunities over time',
      ],
    },
  ];

  const bonuses = [
    {
      image: '/assets/image.png',
      imageAlt: 'AI LinkedIn Profile Optimizer',
      title: '🤖 AI LinkedIn Profile Optimizer',
      description:
        'AI rewrites your headline, About section, and experience bullets — tailored to the exact role or clients you want.',
      highlight: true,
    },
    {
      image: '/assets/resume.png',
      imageAlt: 'Headline and About templates pack',
      title: '📝 Headline & About Templates Pack',
      description:
        'Fill-in-the-blank templates for headlines, About sections, and posts — adapt them to your own niche in minutes.',
      highlight: true,
    },
    {
      image: '/assets/direct.png',
      imageAlt: 'Ask Me Directly mentorship',
      title: '📩 Ask Me Directly',
      description:
        'Personal feedback from Talha on your LinkedIn profile and posts — before the right people see them.',
      highlight: true,
    },
    {
      image: '/assets/comm.jpeg',
      imageAlt: 'Remote worker community',
      title: '👥 The 700+ Remote Worker Community',
      description:
        'Private network: profile reviews, post feedback, and accountability.',
      highlight: false,
    },
  ];

  const pricingValueItems = [
    {
      title: '6 Focused Modules',
      description:
        'Brand, niche, profile, content, the 3C model, then networking. One clear path.',
    },
    {
      title: 'Headline & About Templates',
      description: 'Fill-in-the-blank copy you can adapt to your own niche fast.',
    },
    {
      title: 'AI Profile Optimizer',
      description: 'AI-rewritten headline, About, and experience bullets.',
    },
    {
      title: 'Ask Me Directly',
      description: 'Personal feedback on your profile and posts from Talha.',
    },
    {
      title: '700+ People in Your Corner',
      description: 'A private community so you keep posting and stay consistent.',
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
        image: '/assets/public.png',
        imageAlt: 'Public speaking',
        title: 'Public Speaking',
      },
      {
        image: '/assets/remotly.png',
        imageAlt: 'Working Remotely Since Day 1',
        title: 'Working Remotely Since Day 1',
      },
    ],
    href: '/checkout-linkedin',
  };

  return (
    <div>
      <HeroSectionLinkedIn />
      <LinkedInProblemSection />
      <IsThisForYou
        points={targetAudiencePoints}
        title="Who This Is Built For"
        subtitle="For professionals in Pakistan whose LinkedIn is online but invisible — and who want a clear system to turn it into inbound opportunities."
        bottomText=""
        notForYouPoints={notForYouPoints}
        notForYouTitle="This Is NOT For You If —"
        showCrossSellFooter={false}
      />
      <CourseContent
        modules={modules}
        preLabel="The 4-Week LinkedIn Magnet System"
        heading={
          <>
            Course <span className="text-orange-500">Curriculum</span>
          </>
        }
        subheading="A numbered path from an invisible profile to a steady stream of inbound DMs — with a clear outcome after every module."
        midCtaLabel="ENROLL NOW"
        midCtaHref="#pricing"
        midCtaFinePrint="Instant access · Lifetime · 7-Day Refund"
      />
      <LinkedInOutcomeSection />
      <Testimonials href="/checkout-linkedin" showSuccessStories={false} />
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
        href="/checkout-linkedin"
        showCountdown={false}
      />
      <LinkedInFinalCtaSection />
      <FAQ
        faqs={linkedinFaqs}
        intro="Straight answers about profiles, content, time, and refunds."
      />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}
