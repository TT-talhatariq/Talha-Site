import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.68.334 3.938.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.88.131 5.725.072 6.956.013 8.19 0 8.596 0 12.017s.013 3.827.072 5.061c.059 1.23.26 2.076.558 2.818.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.742.295 1.588.499 2.818.558C7.99 23.988 8.396 24 12.017 24s3.827-.013 5.061-.074c1.23-.059 2.076-.26 2.818-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.295-.742.499-1.588.558-2.818.061-1.234.074-1.64.074-5.061s-.013-3.827-.074-5.061c-.059-1.23-.263-2.076-.558-2.818-.306-.788-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.862.63c-.742-.295-1.588-.499-2.818-.558C15.81.013 15.404 0 12.017 0zm0 2.158c3.333 0 3.727.014 5.042.072 1.217.055 1.877.258 2.318.428.583.226.998.497 1.434.933.437.436.708.851.933 1.434.17.441.373 1.101.428 2.318.058 1.315.072 1.709.072 5.042s-.014 3.727-.072 5.042c-.055 1.217-.258 1.877-.428 2.318-.226.582-.497.997-.933 1.433a3.851 3.851 0 01-1.434.933c-.441.17-1.101.373-2.318.428-1.315.058-1.709.072-5.042.072s-3.727-.014-5.042-.072c-1.217-.055-1.877-.258-2.318-.428a3.85 3.85 0 01-1.433-.933 3.851 3.851 0 01-.933-1.433c-.17-.441-.373-1.101-.428-2.318-.058-1.315-.072-1.709-.072-5.042s.014-3.727.072-5.042c.055-1.217.258-1.877.428-2.318.226-.582.497-.997.933-1.433a3.85 3.85 0 011.433-.933c.441-.17 1.101-.373 2.318-.428 1.315-.058 1.709-.072 5.042-.072z"/>
          <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zm0 10.18a4.001 4.001 0 110-8.003 4.001 4.001 0 010 8.003zm7.846-10.405a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/talhaa_tariqq/'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/talha-tariq1/'
    }
  ];

  return (
    <footer className="py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background elements matching other sections */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-200/20 via-blue-100/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-orange-200/20 via-orange-100/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Talha <span className="text-orange-500">Tariq</span>
            </h3>
            <p className="text-xl text-blue-600 font-semibold mb-2">Full Stack Engineer</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering the next generation of web developers with practical skills and proven strategies to build successful online careers.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a  
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 shadow-lg border border-gray-200 text-gray-600 hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © Copyright 2025 Talha Tariq. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;