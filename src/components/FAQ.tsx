'use client';
import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'Do I have lifetime access?',
    answer:
      "Yes! Once you join, you get the workshop for the lifetime. You will be given a special portal where you can consume the workshop at any time.",
  },
  {
    question: 'Do I get to connect with Talha?',
    answer:
      "Absolutely! You get direct access to me through our community channels, live Q&A sessions, and personal feedback on your projects. I'm committed to helping you succeed.",
  },
  {
    question: 'Who Can enroll in this course?',
    answer:
      'This course is perfect for students, job seekers, freelancers, and anyone looking to build a career in web development. No prior experience is required - we start from the basics and take you to advanced level.',
  },
  {
    question: 'Will it be updated regularly?',
    answer:
      "Yes! The course content is regularly updated to reflect the latest industry trends, technologies, and best practices. You'll always have access to the most current information.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer:
      'Perfect! This course is designed for beginners. We start with the absolute basics of HTML, CSS, and JavaScript, then gradually build up to advanced concepts. You\'ll be building real projects from day one.',
  },
  {
    question: 'How long does it take to complete the course?',
    answer:
      "The course is self-paced, but most students complete it in 6-8 weeks dedicating 2-3 hours per day. Remember, you have lifetime access, so you can take as much time as you need.",
  },
  {
    question: 'What kind of support do I get?',
    answer:
      "You get access to our exclusive community, direct support from me, live Q&A sessions, project reviews, and career guidance. We're here to support you throughout your learning journey.",
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      "Yes! We offer a 7-day money-back guarantee. If you're not satisfied with the course content or feel it doesn't meet your expectations, we'll refund your money, no questions asked.",
  },
];

const webDevFaqs: FaqItem[] = [
  {
    question: 'Is this course for complete beginners?',
    answer:
      'Yes. Module 1 starts from absolute zero — no prior coding experience needed. By Module 6 you\'ll have a live portfolio and your first client strategy in place.',
  },
  {
    question: 'How long will it take to complete?',
    answer:
      'The course is designed for 6–8 weeks at 2–3 hours per day. It\'s self-paced — go faster if you want, slower if you need to.',
  },
  {
    question: 'Will I get access to Talha directly?',
    answer:
      'Yes — through the Direct Mentor Access bonus. Submit your work, profiles, and proposals and get personal feedback. This bonus is available to the first 100 students only.',
  },
  {
    question: 'What if I already know some web development?',
    answer:
      'You can skip or skim Modules 1–2 and go straight to the income system (Modules 3–6). The earning strategies work regardless of where you are in your technical journey.',
  },
  {
    question: "What if I'm not in Pakistan?",
    answer:
      'The income strategies work globally. The examples and context are Pakistan-focused, but Upwork, LinkedIn, and remote work are borderless.',
  },
  {
    question: "What's the refund policy?",
    answer:
      '7-day no-questions refund from the day of enrollment.',
  },
  {
    question: 'Do I get lifetime access?',
    answer:
      'Yes. Pay once, access forever. Every update, new module, and added lesson — included at no extra cost.',
  },
  {
    question: "What if my English isn't very strong?",
    answer:
      'The course is taught in a mix of Urdu/English (Hinglish) — accessible for Pakistani students regardless of English level. The income strategies work for every level of English fluency.',
  },
  {
    question: 'Is the Tech Portal a separate subscription?',
    answer:
      'No. It\'s included free with enrollment. All 6 tools — LinkedIn Optimizer, Upwork Proposal Generator, ATS Resume Builder, Interview Lab, Portfolio Builder, Application Tracker — are yours for as long as you\'re a student.',
  },
];

const remoteWorkFaqs: FaqItem[] = [
  {
    question: 'Do I need to already know how to code?',
    answer:
      'No. This course is for anyone with a marketable skill — development, design, writing, marketing, data, finance, customer success. If you have a skill, this course teaches you how to sell it remotely. If you don\'t have a skill yet, start with the Web Dev Course first.',
  },
  {
    question: 'How long does it take to complete?',
    answer:
      '6–8 weeks at 2–3 hours per day. Self-paced — go faster or slower based on your schedule.',
  },
  {
    question: 'What if I\'ve already tried Upwork and LinkedIn and gotten zero results?',
    answer:
      'That\'s exactly who this course is for. Most people who "tried" these platforms did so without a system. This course gives you the system they were missing.',
  },
  {
    question: 'How is the "Ask Me Directly" bonus different from a community or forum?',
    answer:
      'It\'s direct, personal feedback from Talha — not crowd-sourced advice. You submit your profile, proposal, or resume and get specific, actionable feedback from someone who has done what you\'re trying to do. Limited to 50 students per cohort.',
  },
  {
    question: 'What\'s the refund policy?',
    answer:
      '7-day no-questions refund if you change your mind early.',
  },
  {
    question: 'Is this course only for developers?',
    answer:
      'No. The remote work system works for any professional skill: design, writing, digital marketing, data analysis, virtual assistance, finance, customer success. If someone can pay for it, this course shows you how to reach them.',
  },
  {
    question: 'Do I get lifetime access?',
    answer:
      'Yes. One payment, forever. Every update and new addition included.',
  },
  {
    question: 'What if my English isn\'t strong?',
    answer:
      'The course is delivered in accessible Urdu/English. The job-hunting strategies include tips for non-native English speakers — including how to write proposals and profile copy that reads well even if English isn\'t your first language.',
  },
  {
    question: 'Is the Tech Portal a separate subscription?',
    answer:
      'No. It\'s included free with your enrollment. All 6 tools — LinkedIn Optimizer, Upwork Proposal Generator, ATS Resume Builder, Interview Lab, Portfolio Builder, Application Tracker — are included at no extra cost.',
  },
];

interface FAQProps {
  faqs?: FaqItem[];
  intro?: string;
}

const FAQ = ({ faqs, intro }: FAQProps) => {
  const list = faqs ?? defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="absolute top-0 left-0 h-72 w-72 -translate-x-36 -translate-y-36 rounded-full bg-blue-100 opacity-30 mix-blend-multiply blur-xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-36 translate-y-36 rounded-full bg-purple-100 opacity-30 mix-blend-multiply blur-xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            <span className="text-orange-500">FAQ</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            {intro ??
              'My aim is to ensure that you have a clear understanding of the course content and what to expect.'}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {list.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="pr-4 text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
export { remoteWorkFaqs, webDevFaqs };
