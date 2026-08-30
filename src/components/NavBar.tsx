'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  href?: string;
  /** Optional in-page navigation links (e.g. on the homepage). */
  navLinks?: NavLink[];
}

const NavBar = ({ href = '#pricing', navLinks }: NavBarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-400 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
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

        {navLinks && navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm"
        >
          Enroll Now
        </Link>
      </div>
    </nav>
  )
}

export default NavBar