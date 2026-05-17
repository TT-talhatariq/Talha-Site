import { Metadata } from 'next';

import LinkedInPage from '@/pages/LinkedIn/linkedin';

export const metadata: Metadata = {
  title: 'LinkedIn Mastery - Turn Your Profile Into a Client & Recruiter Magnet | Talha Tariq',
  description:
    'Your LinkedIn is online but invisible. A focused system to build a profile that turns views into DMs and a content rhythm that brings $3,000+/month opportunities to you.',
  keywords:
    'linkedin course, linkedin profile optimization, linkedin for jobs, linkedin personal branding, linkedin content, recruiter inbound, linkedin networking, linkedin course Pakistan, Talha Tariq course',
  openGraph: {
    title: 'LinkedIn Mastery - Turn Your Profile Into a Client & Recruiter Magnet',
    description:
      'Build a profile that turns views into DMs and a content rhythm that brings $3,000+/month opportunities to you.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Talha Tariq Courses',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Mastery - Turn Your Profile Into a Client & Recruiter Magnet',
    description:
      'Build a profile that turns views into DMs and a content rhythm that brings $3,000+/month opportunities to you.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default LinkedInPage;
