'use client';

import CheckoutPage from '@/components/checkout/CheckoutPage';

export default function CheckoutConsultation() {
  return (
    <CheckoutPage
      // No consultation-specific email template yet.
      courseType="remote-work"
      courseName="1-on-1 consultation"
      backHref="/consultation"
      backLabel="Back to Consultation Page"
      thankYouHref="/thank-you-consultation"
      title={
        <>
          Book Your <span className="text-blue-600">1-on-1 Consultation</span>
        </>
      }
      subtitle="Complete your payment to secure your 30-minute consultation session with Talha."
      summaryHeading="📋 Order Summary"
      summary={
        <>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">1-on-1 Consultation</span>
              <span className="font-semibold">PKR 3,499</span>
            </div>
            <div className="text-sm text-gray-500">
              <div>⏱️ 30 minutes</div>
              <div>📅 Personalized session</div>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-blue-600">PKR 3,499</span>
            </div>
          </div>
        </>
      }
      submitLabel="Complete Booking"
      theme="blue"
    />
  );
}
