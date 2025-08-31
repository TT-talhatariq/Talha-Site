'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sendEnrollmentEmail } from '@/utils/emailTemplates';
import { useRouter } from 'next/navigation';

export default function CheckoutRemoteWork() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    screenshot: null as File | null
  });

  const router = useRouter();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [ocrResult, setOcrResult] = useState<string>('');


  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.name.trim()) newErrors.push('Name is required');
    if (!formData.email.trim()) newErrors.push('Email is required');
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.push('Email is invalid');
    if (!formData.whatsapp.trim()) newErrors.push('WhatsApp number is required');
    if (!formData.city.trim()) newErrors.push('City is required');
    if (!formData.screenshot) newErrors.push('Payment screenshot is required');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const processOCR = async (file: File) => {
    try {
      setIsProcessing(true);
      
      // Create form data for OCR API
      const ocrFormData = new FormData();
      ocrFormData.append('file', file);
      ocrFormData.append('apikey', 'K87899142388957'); // Free OCR.space API key
      ocrFormData.append('language', 'eng');
      ocrFormData.append('isOverlayRequired', 'false');

      const response = await fetch('https://api.ocr.space/parse/image', {
        method: 'POST',
        body: ocrFormData
      });

      const result = await response.json();
      
      if (result.ParsedResults && result.ParsedResults[0]) {
        const extractedText = result.ParsedResults[0].ParsedText.toLowerCase();
        setOcrResult(extractedText);
        
        // Validate payment screenshot for remote work course
        const validPaymentKeywords = [
          'payment', 'transfer', 'sent', 'received', 'transaction', 'amount',
          'easypaisa', 'jazzcash', 'sadapay', 'bank', 'account', 'rs', 'pkr',
          'successful', 'completed', 'paid', '1999', '1,999'
        ];
        
        const hasValidKeywords = validPaymentKeywords.some(keyword => 
          extractedText.includes(keyword)
        );
        
        if (!hasValidKeywords) {
          return false;
        }
        
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('OCR Error:', error);
      return false;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, screenshot: file }));
      setErrors([]);
      setOcrResult(''); // Reset OCR result when new file is selected
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      
      // Process OCR validation if screenshot exists
      if (formData.screenshot) {
        const ocrValid = await processOCR(formData.screenshot);
        if (!ocrValid) {
          setErrors(["We couldn't verify this payment screenshot. If this is a mistake, please send your details along with the screenshot via WhatsApp at 0325-7460090."]);
          setIsProcessing(false);
          return;
        }

      }
      
      // Send enrollment email - keep processing state active
      try {
        console.log('Sending enrollment email...');
        await sendEnrollmentEmail(
          { ...formData }, 
          'remote-work', 
          formData.screenshot || undefined
        );
        console.log('Enrollment email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with enrollment even if email fails
      }
      
      // Final processing delay to ensure everything is complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Only redirect after all processing is complete
      router.push('/thank-you-remote-work');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-200/50 via-blue-100/40 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-blue-400 shadow-sm">
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
            <Link href="/remote-work" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ← Back to Main Page
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Start Your <span className="text-blue-600">Global Remote Career</span> Today!
            </h1>
            <p className="text-lg text-gray-600">
              Transform your life and earn $1500-$5000 USD monthly working from anywhere! 🌍
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">🌍 Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remote Work Mastery</span>
                    <span className="font-semibold">PKR 50,000</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>Discount (94% OFF)</span>
                    <span>-PKR 47,001</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">PKR 2,999</span>
                  </div>
                </div>

              </div>
            </div>
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                    
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />

                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number *</label>
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+92 300 1234567"
                        />

                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Karachi, Lahore, Islamabad..."
                        />
                  
                      </div>
                    </div>
                  </div>


                  {/* Payment Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">💳 Payment Details</h3>
                    
                    {/* Bank Transfer Details */}
                    <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-2xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-blue-900 mb-4">💳 Online Bank Transfer Details</h4>
                      <div className="space-y-4 text-gray-800">
                        <div className="flex items-center">
                          <span className="font-semibold">🏦 Bank:</span>
                          <span className="ml-2">Alfalah Bank</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold">👤 Name:</span>
                          <span className="ml-2">TALHA TARIQ ✅</span>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">💳 Account Number:</div>
                          <div className="font-mono bg-white px-3 py-2 rounded border text-lg">02521008762954</div>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">🌐 IBAN:</div>
                          <div className="font-mono bg-blue-50 px-4 py-3 rounded-lg border-2 border-blue-200 text-lg tracking-wider">
                            PK34 ALFH 0252 0010 0876 2954
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* E-Mobile Details */}
                    <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-2xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-blue-900 mb-4">📱 E-Mobile Accounts</h4>
                      <div className="space-y-4 text-gray-800">
                        <div className="flex items-center">
                          <span className="font-semibold">👤 Account Name:</span>
                          <span className="ml-2">Talha Tariq</span>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">📞 Number:</div>
                          <div className="font-mono bg-white px-3 py-2 rounded border text-lg">03257460090</div>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">🏦 Apps:</div>
                          <div className="bg-white px-3 py-2 rounded border">
                            <div>JazzCash</div>
                            <div>SadaPay</div>
                            <div>NayaPay</div>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Value Message */}
                    <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-2xl p-4 mb-6">
                      <p className="text-blue-800 text-center font-semibold">
                        💡 Don&apos;t judge it by the low price, the value you&apos;ll gain is 1000× more than what you&apos;re paying.
                      </p>
                    </div>


                  </div>

                  {/* Payment Screenshot */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">📸 Payment Proof</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="screenshot-upload"
                      />
                      <label htmlFor="screenshot-upload" className="cursor-pointer">
                        <div className="text-4xl mb-2">📷</div>
                        <p className="text-gray-600 mb-2">Upload Payment Screenshot</p>
                        <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                      </label>
                      {formData.screenshot && (
                        <p className="text-green-600 mt-2">✅ {formData.screenshot.name}</p>
                      )}
                    </div>
                  
                    {ocrResult && (
                      <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-sm">✅ Payment screenshot verified!</p>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-opacity duration-200 shadow-lg disabled:opacity-50"
                  >
                    {isProcessing ? '🔄 Processing...' : '🚀 Get Enrolled'}
                  </button>

                  {/* Error Summary */}
                  {errors.length > 0 && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="text-red-800 font-semibold mb-2">⚠️ Please fix the following issues:</h4>
                      <ul className="space-y-1">
                        {errors.map((error: string) => (
                          <li key={error} className="text-red-700 text-sm">
                            • {error as string}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </form>
              </div>
            </div>

    
   
          </div>
        </div>
      </div>
    </div>
  );
}