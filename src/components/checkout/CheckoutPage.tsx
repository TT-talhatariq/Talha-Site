'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import CheckoutVideo from '@/components/checkout/CheckoutVideo';
import SeatsLeft from '@/components/checkout/SeatsLeft';
import StudentProof from '@/components/checkout/StudentProof';
import { CopyableBankField } from '@/components/CopyableBankField';
import type { LeadCourse } from '@/lib/leads';
import { useLeadCapture } from '@/lib/useLeadCapture';
import { verifyPaymentScreenshot } from '@/lib/verifyPayment';
import { whatsappUrl } from '@/lib/whatsapp';
import {
  CourseType,
  sendEnrollmentEmail,
  warmUpEmailService,
} from '@/utils/emailTemplates';

const THEMES = {
  orange: {
    page: 'to-orange-100/50',
    blob: 'from-orange-200/50 via-orange-100/40',
    navBorder: 'border-orange-400',
    wallet: 'from-green-50 to-emerald-50 border-green-200',
    walletHeading: 'text-green-900',
  },
  blue: {
    page: 'to-blue-100/50',
    blob: 'from-blue-200/50 via-blue-100/40',
    navBorder: 'border-blue-400',
    wallet: 'from-blue-50 to-amber-50 border-blue-200',
    walletHeading: 'text-blue-900',
  },
};

const inputClass =
  'w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';

const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

/** Shown above the account details so the manual flow is clear at a glance. */
const PAY_STEPS = ['Send payment', 'Take screenshot', 'Upload below'];

/** Paid but blocked: either the AI check failed, or we could not email the enrollment. */
type Problem = 'unverified' | 'unsent';

export interface CheckoutPageProps {
  /** Which enrollment email template to send. */
  courseType: CourseType;
  /** Which course this checkout sells, recorded with the buyer's lead. */
  leadCourse: LeadCourse;
  /** Used in WhatsApp messages, e.g. "Web Development course". */
  courseName: string;
  backHref: string;
  backLabel: string;
  thankYouHref: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  summaryHeading: string;
  /** Price lines inside the order summary card. */
  summary: React.ReactNode;
  submitLabel: string;
  theme: keyof typeof THEMES;
  /** YouTube ID of the short "how to enroll" video; hidden until set. */
  videoId?: string;
  /** Limited discounted seats; shown in the order summary when set. */
  offer?: { seatsLeft: number; totalSeats: number };
}

export default function CheckoutPage({
  courseType,
  leadCourse,
  courseName,
  backHref,
  backLabel,
  thankYouHref,
  title,
  subtitle,
  summaryHeading,
  summary,
  submitLabel,
  theme,
  videoId,
  offer,
}: CheckoutPageProps) {
  const router = useRouter();
  const colors = THEMES[theme];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [problem, setProblem] = useState<Problem | null>(null);

  useEffect(() => {
    warmUpEmailService();
  }, []);

  // Quietly saves name + WhatsApp as they type so support can follow up with
  // buyers who leave. Never blocks or surfaces errors on checkout.
  const { track: trackLead, flush: flushLead, advance: advanceLead } =
    useLeadCapture(leadCourse);

  useEffect(() => {
    trackLead(formData);
  }, [formData, trackLead]);

  useEffect(() => {
    if (!screenshot) return;
    const url = URL.createObjectURL(screenshot);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [screenshot]);

  const updateField =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const buyerDetails = `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}`;

  const helpMessage = `Hi Talha! I want to enroll in the ${courseName}. Please guide me through the payment step by step.`;

  const problemMessage =
    problem === 'unsent'
      ? `Hi Talha! My payment for the ${courseName} was verified on the website. Here are my details for access, I'll send the screenshot here too.\n\n${buyerDetails}`
      : `Hi Talha! I paid for the ${courseName} but my screenshot didn't verify on the website. I'll send the screenshot here.\n\n${buyerDetails}`;

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.name.trim()) newErrors.push('Name is required');
    if (!formData.email.trim()) newErrors.push('Email is required');
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.push('Email is invalid');
    if (!formData.whatsapp.trim())
      newErrors.push('WhatsApp number is required');
    else if (formData.whatsapp.replace(/\D/g, '').length < 10)
      newErrors.push('WhatsApp number looks too short');
    if (!screenshot) newErrors.push('Payment screenshot is required');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setScreenshot(file);
    advanceLead('screenshot_uploaded');
    setErrors((prev) =>
      prev.filter((error) => error !== 'Payment screenshot is required'),
    );
    setProblem(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProblem(null);

    if (!validateForm() || !screenshot) return;

    setIsProcessing(true);

    try {
      const verification = await verifyPaymentScreenshot(screenshot);
      if (!verification.verified) {
        advanceLead('verification_failed');
        setProblem('unverified');
        return;
      }

      try {
        await sendEnrollmentEmail(formData, courseType, screenshot);
      } catch (emailError) {
        // The buyer has paid. Do not send them to the thank-you page with
        // nothing recorded; have them send their details on WhatsApp instead.
        console.error('Email sending failed:', emailError);
        setProblem('unsent');
        return;
      }

      advanceLead('enrolled');
      router.push(thankYouHref);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-white via-blue-50/30 ${colors.page} relative overflow-hidden`}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div
        className={`absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl ${colors.blob} to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000`}
      ></div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b ${colors.navBorder} shadow-sm`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Talha's School Logo"
              width={120}
              height={120}
              className="h-16 w-auto"
              priority
            />
          </Link>
          <div className="text-sm font-semibold text-gray-600">
            🔒 Secure Checkout
          </div>
        </div>
      </nav>

      {/* Checkout Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-[1440px] mx-auto">
          {/* Back Link */}
          <div className="mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              ← {backLabel}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600">{subtitle}</p>
          </div>

          <StudentProof />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {summaryHeading}
                </h3>
                {offer && (
                  <SeatsLeft
                    seatsLeft={offer.seatsLeft}
                    totalSeats={offer.totalSeats}
                  />
                )}
                {summary}
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl lg:p-8 px-4 py-8 border border-white/50 shadow-xl">
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      📋 Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="checkout-name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="checkout-name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={updateField('name')}
                          onBlur={flushLead}
                          className={inputClass}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkout-email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="checkout-email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={updateField('email')}
                          onBlur={flushLead}
                          className={inputClass}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="checkout-whatsapp"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          WhatsApp Number *
                        </label>
                        <input
                          id="checkout-whatsapp"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.whatsapp}
                          onChange={updateField('whatsapp')}
                          onBlur={flushLead}
                          className={inputClass}
                          placeholder="0300 1234567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      💳 Payment Details
                    </h3>

                    {videoId && (
                      <CheckoutVideo
                        videoId={videoId}
                        title="Watch: how to pay in 30 seconds"
                      />
                    )}

                    {/* How to pay, in one line */}
                    <ol className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                      {PAY_STEPS.map((step, index) => (
                        <li
                          key={step}
                          className="flex flex-col items-center gap-1.5"
                        >
                          <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                            {index + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>

                    {/* Bank Transfer Details */}
                    <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-2xl p-6 mb-4">
                      <h4 className="text-lg font-bold text-blue-900 mb-4">
                        💳 Online Bank Transfer Details
                      </h4>
                      <div className="space-y-4 text-gray-800">
                        <div className="flex items-center">
                          <span className="font-semibold">🏦 Bank:</span>
                          <span className="ml-2">UBL Bank</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold">👤 Name:</span>
                          <span className="ml-2">Talha&apos;s School ✅</span>
                        </div>
                        <CopyableBankField
                          label="💳 Account Number:"
                          displayText="2458390476065"
                        />
                        <CopyableBankField
                          label="🌐 IBAN:"
                          displayText="PK63 UNIL 0109 0003 9047 6065"
                          copyText="PK63UNIL0109000390476065"
                        />
                      </div>
                    </div>

                    {/* E-Mobile Details */}
                    <div
                      className={`bg-gradient-to-r ${colors.wallet} border rounded-2xl p-6 mb-4`}
                    >
                      <h4
                        className={`text-lg font-bold ${colors.walletHeading} mb-4`}
                      >
                        📱 E-Mobile Accounts
                      </h4>
                      <div className="space-y-4 text-gray-800">
                        <div className="flex items-center">
                          <span className="font-semibold">
                            👤 Account Name:
                          </span>
                          <span className="ml-2">Talha Tariq</span>
                        </div>
                        <CopyableBankField
                          label="📞 Number:"
                          displayText="03257460090"
                        />
                        <div>
                          <div className="font-semibold mb-1">🏦 Apps:</div>
                          <div className="flex flex-wrap gap-2">
                            {['JazzCash', 'EasyPaisa', 'NayaPay'].map((app) => (
                              <span
                                key={app}
                                className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-medium"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl(helpMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-green-700"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>
                        Need help paying?{' '}
                        <span className="font-semibold text-green-700 underline underline-offset-2">
                          Chat with us on WhatsApp
                        </span>
                      </span>
                    </a>
                  </div>

                  {/* Payment Screenshot */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      📸 Payment Proof
                    </h3>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="screenshot-upload"
                    />
                    {screenshot && preview ? (
                      <label
                        htmlFor="screenshot-upload"
                        className={`flex items-center gap-4 p-3 rounded-lg border-2 cursor-pointer ${
                          problem === 'unverified'
                            ? 'border-amber-300 bg-amber-50'
                            : 'border-green-300 bg-green-50'
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview */}
                        <img
                          src={preview}
                          alt="Your payment screenshot"
                          className="w-14 h-14 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                        />
                        {problem === 'unverified' ? (
                          <span className="min-w-0">
                            <span className="block font-semibold text-amber-800">
                              ⚠️ Couldn&apos;t verify this screenshot
                            </span>
                            <span className="block text-sm text-amber-700 underline underline-offset-2">
                              Try a different screenshot
                            </span>
                          </span>
                        ) : (
                          <span className="min-w-0">
                            <span className="block font-semibold text-green-800">
                              ✅ Screenshot added
                            </span>
                            <span className="block text-sm text-green-700 underline underline-offset-2">
                              Change screenshot
                            </span>
                          </span>
                        )}
                      </label>
                    ) : (
                      <label
                        htmlFor="screenshot-upload"
                        className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
                      >
                        <div className="text-4xl mb-2">📷</div>
                        <p className="text-gray-700 font-medium mb-1">
                          Upload Payment Screenshot
                        </p>
                        <p className="text-sm text-gray-500">PNG or JPG</p>
                      </label>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Error Summary */}
                    {errors.length > 0 && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="text-red-800 font-semibold mb-2">
                          ⚠️ Please fix the following issues:
                        </h4>
                        <ul className="space-y-1">
                          {errors.map((error) => (
                            <li key={error} className="text-red-700 text-sm">
                              • {error}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Paid but blocked: hand them to a human */}
                    {problem && (
                      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                        <p className="font-semibold text-gray-900">
                          {problem === 'unsent'
                            ? '✅ Payment verified, one last step'
                            : 'Already paid?'}
                        </p>
                        <p className="text-sm text-gray-600 mt-1 mb-3">
                          {problem === 'unsent'
                            ? 'Send us your details on WhatsApp so we can give you access.'
                            : "Send your screenshot on WhatsApp and we'll activate your access."}
                        </p>
                        <a
                          href={whatsappUrl(problemMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        >
                          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                          Send on WhatsApp
                        </a>
                      </div>
                    )}

                    {/* Submit Button: stays in view on mobile while scrolling the form */}
                    <div className="sticky bottom-0 z-20 -mx-4 px-4 py-3 bg-white/95 backdrop-blur-sm lg:static lg:mx-0 lg:p-0 lg:bg-transparent">
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                      >
                        {isProcessing
                          ? '🔄 Verifying your payment...'
                          : `🚀 ${submitLabel}`}
                      </button>
                    </div>

                    <p className="text-center text-xs text-gray-500">
                      We may WhatsApp you about your enrollment.
                    </p>

                    <p className="text-center text-sm text-gray-500">
                      💡 Don&apos;t judge it by the low discounted price, the
                      value you&apos;ll gain is 1000× more than what you&apos;re
                      paying.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
