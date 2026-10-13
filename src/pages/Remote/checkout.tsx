'use client';

import CheckoutPage from '@/components/checkout/CheckoutPage';
import PriceSummary from '@/components/checkout/PriceSummary';

export default function CheckoutRemoteWork() {
  return (
    <CheckoutPage
      courseType="remote-work"
      leadCourse="remote-work"
      courseName="Remote Work Mastery course"
      backHref="/remote-work"
      backLabel="Back to Main Page"
      thankYouHref="/thank-you-remote-work"
      title={
        <>
          Start Your{' '}
          <span className="text-blue-600">Global Remote Career</span> Today!
        </>
      }
      subtitle="Build the skills to work for international companies from anywhere. 🌍"
      summaryHeading="🌍 Order Summary"
      summary={
        <PriceSummary
          item="Remote Work Mastery"
          originalPrice="PKR 59,000"
          discountLabel="Discount (93% OFF)"
          discountAmount="PKR 55,013"
          total="PKR 3,987"
        />
      }
      submitLabel="Get Enrolled"
      theme="blue"
    />
  );
}
