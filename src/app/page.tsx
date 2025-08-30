import HeroSection from '@/components/HeroSection';
import IsThisForYou from '@/components/IsThisForYou';
import CourseContent from '@/components/CourseContent';
import Testimonials from '@/components/Testimonials';
import Bonuses from '@/components/Bonuses';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IsThisForYou />
      <CourseContent />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
