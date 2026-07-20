import { Metadata } from 'next';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Reviews from '@/components/Reviews';

export const metadata: Metadata = {
  title: 'Student Reviews | Talha\'s School',
  description:
    'Read 109 verified reviews (4.9★) from students of Talha\'s School. Real feedback on our web development, freelancing and remote work courses.',
  openGraph: {
    title: 'Student Reviews | Talha\'s School',
    description:
      'Read 109 verified reviews (4.9★) from students of Talha\'s School.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Talha\'s School',
  },
  robots: { index: true, follow: true },
};

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Instructor', href: '/#instructor' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Reviews', href: '/reviews' },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20">
      <NavBar href="/#courses" navLinks={navLinks} />
      <Reviews />
      <Footer />
    </div>
  );
}
