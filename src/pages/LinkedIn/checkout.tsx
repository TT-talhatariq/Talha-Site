'use client';

import CheckoutPage from '@/components/checkout/CheckoutPage';
import PriceSummary from '@/components/checkout/PriceSummary';

export default function CheckoutLinkedIn() {
  return (
    <CheckoutPage
      courseType="linkedin"
      courseName="LinkedIn Mastery course"
      backHref="/linkedin"
      backLabel="Back to Main Page"
      thankYouHref="/thank-you-linkedin"
      title={
        <>
          Turn LinkedIn Into Your{' '}
          <span className="text-blue-600">Opportunity Engine</span> Today!
        </>
      }
      subtitle="Build a profile that turns views into DMs — and a content rhythm that brings opportunities to you. 🔗"
      summaryHeading="🔗 Order Summary"
      summary={
        <PriceSummary
          item="LinkedIn Mastery"
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
