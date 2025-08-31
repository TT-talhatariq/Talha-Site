'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface NavBarProps {
  href?: string;
}

const NavBar = ({ href = '/checkout-web-dev' }: NavBarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-400 shadow-sm">
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
          <Link
            href={href}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm"
          >
              JOIN TODAY!
            </Link>
        </div>
      </nav>
  )
}

export default NavBar