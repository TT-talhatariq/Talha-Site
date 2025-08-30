import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.68.334 3.938.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.88.131 5.725.072 6.956.013 8.19 0 8.596 0 12.017s.013 3.827.072 5.061c.059 1.23.26 2.076.558 2.818.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.742.295 1.588.499 2.818.558C7.99 23.988 8.396 24 12.017 24s3.827-.013 5.061-.074c1.23-.059 2.076-.26 2.818-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.295-.742.499-1.588.558-2.818.061-1.234.074-1.64.074-5.061s-.013-3.827-.074-5.061c-.059-1.23-.263-2.076-.558-2.818-.306-.788-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.862.63c-.742-.295-1.588-.499-2.818-.558C15.81.013 15.404 0 12.017 0zm0 2.158c3.333 0 3.727.014 5.042.072 1.217.055 1.877.258 2.318.428.583.226.998.497 1.434.933.437.436.708.851.933 1.434.17.441.373 1.101.428 2.318.058 1.315.072 1.709.072 5.042s-.014 3.727-.072 5.042c-.055 1.217-.258 1.877-.428 2.318-.226.582-.497.997-.933 1.433a3.851 3.851 0 01-1.434.933c-.441.17-1.101.373-2.318.428-1.315.058-1.709.072-5.042.072s-3.727-.014-5.042-.072c-1.217-.055-1.877-.258-2.318-.428a3.85 3.85 0 01-1.433-.933 3.851 3.851 0 01-.933-1.433c-.17-.441-.373-1.101-.428-2.318-.058-1.315-.072-1.709-.072-5.042s.014-3.727.072-5.042c.055-1.217.258-1.877.428-2.318.226-.582.497-.997.933-1.433a3.85 3.85 0 011.433-.933c.441-.17 1.101-.373 2.318-.428 1.315-.058 1.709-.072 5.042-.072z"/>
          <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zm0 10.18a4.001 4.001 0 110-8.003 4.001 4.001 0 010 8.003zm7.846-10.405a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Snapchat',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.68.334 3.938.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.88.131 5.725.072 6.956.013 8.19 0 8.596 0 12.017s.013 3.827.072 5.061c.059 1.23.26 2.076.558 2.818.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.742.295 1.588.499 2.818.558C7.99 23.988 8.396 24 12.017 24s3.827-.013 5.061-.074c1.23-.059 2.076-.26 2.818-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.295-.742.499-1.588.558-2.818.061-1.234.074-1.64.074-5.061s-.013-3.827-.074-5.061c-.059-1.23-.263-2.076-.558-2.818-.306-.788-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.862.63c-.742-.295-1.588-.499-2.818-.558C15.81.013 15.404 0 12.017 0zm0 2.158c3.333 0 3.727.014 5.042.072 1.217.055 1.877.258 2.318.428.583.226.998.497 1.434.933.437.436.708.851.933 1.434.17.441.373 1.101.428 2.318.058 1.315.072 1.709.072 5.042s-.014 3.727-.072 5.042c-.055 1.217-.258 1.877-.428 2.318-.226.582-.497.997-.933 1.433a3.851 3.851 0 01-1.434.933c-.441.17-1.101.373-2.318.428-1.315.058-1.709.072-5.042.072s-3.727-.014-5.042-.072c-1.217-.055-1.877-.258-2.318-.428a3.85 3.85 0 01-1.433-.933 3.851 3.851 0 01-.933-1.433c-.17-.441-.373-1.101-.428-2.318-.058-1.315-.072-1.709-.072-5.042s.014-3.727.072-5.042c.055-1.217.258-1.877.428-2.318.226-.582.497-.997.933-1.433a3.85 3.85 0 011.433-.933c.441-.17 1.101-.373 2.318-.428 1.315-.058 1.709-.072 5.042-.072z"/>
        </svg>
      ),
      url: '#'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                Talha <span className="text-orange-400">Tariq</span>
              </h3>
              <p className="text-blue-400 font-semibold">Web Development Mentor</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering the next generation of web developers with practical skills 
              and proven strategies to build successful online careers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About the Course
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Story */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">My Story</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              My story is not different from you. If you are at the same stage, then you just need to take one more step 
              to start a new struggle that will ultimately pay you off in the context of fulfilling your dreams.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h5 className="text-white font-semibold mb-2">Get in Touch</h5>
              <p className="text-gray-300 text-sm mb-2">WhatsApp: +92 315 7603891</p>
              <p className="text-gray-300 text-sm">Email: Hello@TalhaTariq.com</p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright 2025 Talha Tariq. All Rights Reserved
            </div>
            <div className="text-gray-400 text-sm">
              Powered by <span className="text-orange-400 font-semibold">Talha Tariq</span>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Trusted by 300+ Students</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>100% Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>30-Day Money Back</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;