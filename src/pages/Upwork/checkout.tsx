'use client';

import CheckoutPage from '@/components/checkout/CheckoutPage';
import PriceSummary from '@/components/checkout/PriceSummary';

export default function CheckoutUpwork() {
  return (
    <CheckoutPage
      courseType="upwork"
      leadCourse="upwork"
      courseName="Upwork Mastery course"
      backHref="/upwork"
      backLabel="Back to Main Page"
      thankYouHref="/thank-you-upwork"
      title={
        <>
          Start Winning <span className="text-blue-600">Upwork Clients</span>{' '}
          Today!
        </>
      }
      subtitle="Build a profile that converts and proposals that get replies. 💼"
      summaryHeading="💼 Order Summary"
      summary={
        <PriceSummary
          item="Upwork Mastery"
          originalPrice="PKR 20,000"
          discountLabel="Discount (88% OFF)"
          discountAmount="PKR 17,501"
          total="PKR 2,499"
        />
      }
      submitLabel="Get Enrolled"
      theme="blue"
    />
  );
}
