import { Metadata } from 'next';

import UpworkPage from '@/pages/Upwork/upwork';

export const metadata: Metadata = {
  title: 'Upwork Mastery - Win Clients & Land $1,000+ Projects | Talha Tariq',
  description:
    'Stop sending Upwork proposals into the void. A focused 4-week system to build a profile that converts and proposals that get replies — land your first $1,000+ client from Pakistan.',
  keywords:
    'upwork course, upwork proposals, win upwork clients, upwork profile optimization, freelancing course Pakistan, upwork success, upwork top rated, proposal writing, upwork for beginners, Talha Tariq course',
  openGraph: {
    title: 'Upwork Mastery - Win Clients & Land $1,000+ Projects',
    description:
      'A focused 4-week system to build a profile that converts and proposals that get replies. Land your first $1,000+ Upwork client.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Talha Tariq Courses',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upwork Mastery - Win Clients & Land $1,000+ Projects',
    description:
      'A focused 4-week system to build a profile that converts and proposals that get replies. Land your first $1,000+ Upwork client.',
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

export default UpworkPage;
