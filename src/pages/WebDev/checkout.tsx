'use client';

import CheckoutPage from '@/components/checkout/CheckoutPage';
import PriceSummary from '@/components/checkout/PriceSummary';
import { WEB_DEV_OFFER } from '@/lib/offer';

export default function CheckoutWebDev() {
  return (
    <CheckoutPage
      courseType="web-dev"
      leadCourse="web-dev"
      courseName="Web Development course"
      backHref="/web-dev"
      backLabel="Back to Main Page"
      thankYouHref="/thank-you-web-dev"
      title={
        <>
          Complete Your <span className="text-blue-600">Enrollment</span>
        </>
      }
      subtitle="You're one step away from learning the skill that pays globally."
      summaryHeading="📋 Order Summary"
      summary={
        <PriceSummary
          item="Masterclass"
          originalPrice="PKR 40,000"
          discountLabel="Discount (90% OFF)"
          discountAmount="PKR 36,103"
          total="PKR 3,897"
          discountClassName="text-green-600"
        />
      }
      submitLabel="Complete Enrollment"
      theme="orange"
      offer={WEB_DEV_OFFER}
    />
  );
}
