'use client';

import React from 'react';

const GOOGLE_MAPS_REVIEWS = 'https://share.google/eazZVgGu4KtcOrmcU';

interface Review {
  name: string;
  time: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Nasir Ali',
    time: 'a week ago',
    text: 'My experience with Learn with Talha has been really valuable. The course is very well-structured and focuses on front-end development in a practical, easy-to-follow way. The instructors explain concepts clearly and focus on real-world skills that actually help you grow professionally. Overall, it’s a complete package for anyone who wants to learn front-end development and start their career with confidence. Highly recommended!',
  },
  {
    name: 'Usama Mansoor',
    time: 'a week ago',
    text: 'It has been an amazing experience. I am so glad I decided to join! The way the lessons are structured made it so easy for me to refresh my old knowledge and really polish my skills. Another massive plus point is the community. Everyone is so friendly and welcoming, whenever I got stuck people were right there to help me out.',
  },
  {
    name: 'Ameer Hamza',
    time: '3 months ago',
    text: 'I had a great experience learning at Talha’s School. The course is very well-structured and focuses on front-end development in a practical way. What I really liked is that it’s not just about coding, they also teach proven strategies to start earning, including freelancing guidance, LinkedIn optimization, and how to find real job opportunities. Overall, it’s a complete package. Highly recommended!',
  },
  {
    name: 'Zoha Khalil',
    time: '3 months ago',
    text: 'I had a great experience learning MERN stack development and ReactJS from Sir Talha. His method of delivering lectures is very effective, making even complex topics easy to understand. He covers all the essential technical aspects thoroughly, ensuring a solid foundation. Sir Talha is a great mentor for aspiring developers. Highly recommend ✨',
  },
  {
    name: 'Uzair Anwar',
    time: '3 months ago',
    text: 'The course is very well-structured, beginner-friendly, and focuses on practical learning rather than just theory. What makes it different is that you don’t just learn coding, you also learn how to apply it in real life and even start earning from it. The community is very active and supportive, which makes the learning journey much smoother.',
  },
  {
    name: 'Jawad Fareed',
    time: '3 months ago',
    text: 'Currently I’m taking your "front-end web development and 9 proven methods to earn" course. Compared to other big tutorials I’ve tried, yours is way more practical and straight to the point. The real-world projects and community support make everything feel a lot smoother. Learning how to deploy projects and land work on LinkedIn and Upwork is a huge bonus we just don’t get in other courses.',
  },
  {
    name: 'Ayesha Manzoor',
    time: '3 months ago',
    text: 'I had the opportunity to learn web development from him, and his teaching style is outstanding. He explains concepts in a very clear and practical way. Beyond technical skills, he genuinely supports his students’ growth, both professionally and personally. I highly recommend him to anyone looking to learn web development and grow as a person.',
  },
  {
    name: 'Muhammad Afaq',
    time: '3 months ago',
    text: 'My experience with Learn with Talha has been really valuable. He is an excellent teacher with strong expertise in product engineering, and his way of explaining concepts makes even complex topics easy to understand. His work ethic and problem-solving skills are exceptional, and he’s a genuinely honest and kind person.',
  },
  {
    name: 'Shahzaib Abu Bashar',
    time: '3 months ago',
    text: 'I had the opportunity to learn under Talha Bhai, and it has been an exceptional experience. His teaching style is clear, structured, and highly engaging, making even complex concepts easy to understand. What truly stands out is his ability to connect theory with practical application. His guidance has significantly improved my understanding and confidence.',
  },
  {
    name: 'Muhammad Yasir',
    time: '3 months ago',
    text: 'Talha’s School is an excellent platform for beginners and intermediate learners who want to learn Web Development from the start. Talha is a very kind and humble person. He communicates with students like a friend and always provides clear and helpful replies.',
  },
  {
    name: 'Tasadduq Gardezi',
    time: '3 months ago',
    text: 'The learning from Talha’s School was a great experience. I didn’t know anything about web development but as I started, I felt right at home only after a few classes. I have started creating projects which I never thought I could. I highly recommend starting your journey through this school.',
  },
  {
    name: 'Maheen Zuhra',
    time: '3 months ago',
    text: 'Talha Tariq is an amazing teacher! I couldn’t grasp JavaScript from anyone else, but his teaching style made it click. I finally understand what JavaScript really is. Thanks for making our coding journey so much easier.',
  },
  {
    name: 'Subhan Tariq',
    time: '3 months ago',
    text: 'Talha Bhai has made this course in a way that shows passion to teach what is actually required in the industry. Highly recommended course for beginners and professionals too, who want to revise the concepts in depth.',
  },
  {
    name: 'Umair Azmat',
    time: '3 months ago',
    text: 'Talha is a wonderful person and a true tech guru. I’ve personally learned a lot from him through his LinkedIn posts, online platform and his WhatsApp community. He’s always active, responsive, and genuinely helpful. His community is one of the most active and engaging developer communities I’ve seen. Highly recommended!',
  },
  {
    name: 'Sahil Kumar',
    time: '2 weeks ago',
    text: 'Talha’s School has genuinely raised the bar for what a tech learning community should look like. It’s not just a place to take a course, it’s a full ecosystem for building a real tech career, with solid frontend, backend, and full-stack learning.',
  },
  {
    name: 'Adnan Ahmad',
    time: 'a week ago',
    text: 'Talha’s School is one of the most supportive and practical web development communities I’ve joined. The community is active, helpful, and encouraging, making it a great place for both beginners and experienced developers who want to improve.',
  },
  {
    name: 'Sara Mehmood Ahmad',
    time: 'a week ago',
    text: 'Alhamdulillah, this course is amazing! The instructor’s hands-on teaching style makes a massive difference, and the CSS module was incredible. The community is also a huge plus; seeing real-world problems and solutions being shared is extremely helpful. Highly recommended!',
  },
  {
    name: 'Rob Keth',
    time: '2 weeks ago',
    text: 'It’s a very good community with very helpful people, especially our mentor Talha Tariq. He is a great guy and was very helpful, and he provides a very clear and straight path towards your goals.',
  },
  {
    name: 'Aamir Ali',
    time: '3 weeks ago',
    text: 'That is an amazing course. I have covered many things like HTML, CSS and JavaScript, and I am currently learning React. This course definitely helps beginners advance to the next level. Thank you so much Talha Sir for your hard work and dedication.',
  },
  {
    name: 'Mahnoor Sarfraz',
    time: 'a week ago',
    text: 'I had a very good experience at Talha’s School. The course was really good, especially the LinkedIn and Upwork module, it helped me a lot.',
  },
  {
    name: 'Muhammad Subhan',
    time: '3 months ago',
    text: 'Best programming course delivered by one of the best programmers of Pakistan. From the basics to the top, everything is explained with practical work side by side. Definitely recommended.',
  },
  {
    name: 'Adnan Imam',
    time: 'a week ago',
    text: 'I’m currently enrolled in the Full Stack Web Development course, and I’m really enjoying it. The way the instructor teaches is amazing. The lessons are easy to follow, practical, and engaging. Highly recommend this course to anyone interested in web development.',
  },
  {
    name: 'Ibrahim Tariq',
    time: '3 months ago',
    text: 'The web dev course is well organized and contains enough content to get your earning started. Concepts are explained in a simple, easy to understand manner and most importantly experienced tips and tricks are shared that make this course stand out.',
  },
  {
    name: 'Abdul Hamid',
    time: '3 months ago',
    text: 'This React JS course is well put together and practical. It makes it easy to grasp both the basic and the advanced concepts.',
  },
  {
    name: 'Muhammad Idrees Faiz',
    time: '3 months ago',
    text: 'I’m truly grateful to my instructor for guiding me throughout my web development journey. His teaching style is clear, practical, and focused on real-world skills.',
  },
  {
    name: 'Serat Noor',
    time: '3 months ago',
    text: 'They usually sell courses but seldom teach direction! That’s what Talha Bhai did marvelously. Apart from niche and technical support, he urged the peers to find a way out and make real benefits.',
  },
  {
    name: 'Muhammad Saqib',
    time: '3 months ago',
    text: 'Talha Bhai teaches very well. His teaching style is excellent and easy to understand. He has a lot of knowledge. My basics were very weak before, but this course helped me learn a lot.',
  },
  {
    name: 'Muhammad Abdullah Ibn Rafique',
    time: '3 months ago',
    text: 'That’s a very good platform to learn skills like web development, AI/ML and other leading skills in the world. Talha is a great guy! The courses he designed are very good and anybody can enroll with absolutely zero knowledge.',
  },
  {
    name: 'Tania Tariq',
    time: '3 months ago',
    text: 'An excellent course for beginners. I didn’t even know the basic terminology. The instructor goes into such incredible detail that even the smallest points are covered.',
  },
  {
    name: 'Mohammad Ahmed Hassan',
    time: '3 months ago',
    text: 'Had a great experience learning from Talha. If you are starting web development as a complete beginner, then this is the place to be.',
  },
  {
    name: 'Aitzaz Hakro',
    time: '3 months ago',
    text: 'I came here as a beginner and grew, learning many things that might have taken me a few years. I completed the modules, and the best part is that you not only learn to code, you learn how to earn from it too.',
  },
  {
    name: 'Umair Hassan',
    time: '3 months ago',
    text: 'Great community for learners, everyone is super helpful, whether it is web dev, freelancing, or anything else related to tech. Talha Bhai is especially cooperative and always ready to guide.',
  },
  {
    name: 'Misbah Iqbal',
    time: '3 months ago',
    text: 'The course is very good. It covers all the foundation concepts. The LMS is organized very well, which helps to track your career and provides all the guidelines to improve your skills professionally.',
  },
  {
    name: 'Suffy Nux',
    time: '3 months ago',
    text: 'I am currently doing a course at Talha’s School, and I’m really amazed by the level of knowledge and guidance provided here. The teaching style is very clear, practical, and focused on real-world skills.',
  },
  {
    name: 'Saad Amir',
    time: '3 months ago',
    text: 'This is a great opportunity for beginners who want to learn web dev. Sir explains every topic with words that any newbie can easily understand. Being in his community, I also get to know many new things about the market.',
  },
  {
    name: 'Abeer Fatima',
    time: '3 months ago',
    text: 'Talha’s School doesn’t just teach you how to code, it gives you a clear roadmap and the means to start your earning journey all in one place. And the community support makes your journey even easier.',
  },
  {
    name: 'Ali Hassan',
    time: '3 months ago',
    text: 'An excellent platform to learn web development! The course is practical, beginner-friendly, and very well structured. I especially liked the project-based learning approach, which made concepts easy to understand.',
  },
  {
    name: 'Ali Hamza',
    time: '3 months ago',
    text: 'I had a great experience at Talha’s School, especially in the field of technology. It helped me improve my technical skills and understanding of modern tools. Overall, it was a valuable learning journey that boosted my confidence in tech.',
  },
  {
    name: 'Shafqat Abbas',
    time: '3 months ago',
    text: 'Sir Talha Tariq’s content is very helpful as it is concise, relevant, and straight to the point, covering key topics effectively. Unlike many other tutorials where information is scattered and hard to follow, his material makes concepts clear.',
  },
  {
    name: 'Kafayat Ullah Afridi',
    time: '2 weeks ago',
    text: 'This course is very good, especially for beginners. The community is very professional and I learned a lot from community members. In short, recommended to anyone who wants to learn web dev.',
  },
  {
    name: 'Tayyab Ikhlaq',
    time: '3 months ago',
    text: 'I remember my first session with Talha on resume writing and formatting. I learned a lot of tips and techniques about resumes from that session.',
  },
  {
    name: 'Iqra Tariq',
    time: '3 months ago',
    text: 'I joined this community randomly, thinking it was just about learning freelancing, but it turned out to be so much more. It’s not limited to freelancing, web development, or remote jobs, it goes way beyond that.',
  },
  {
    name: 'Zaeem Danish',
    time: 'a week ago',
    text: 'I recently enrolled in this course, and my experience so far has been very positive. The course is well-structured and beginner-friendly, making it easy to follow even with only a basic programming background.',
  },
  {
    name: 'Haseeb Khan',
    time: '3 months ago',
    text: 'I learned a lot from this course because his methodology of teaching is so simple and totally to the point compared to other tutorials. Highly recommended if you’re looking for a mentor who makes your career perfect in web development.',
  },
  {
    name: 'Muhammad Sajid',
    time: '3 months ago',
    text: 'Talha is a really good man and his teaching is so easy that a beginner can understand his method. I loved his course and am enjoying the premium content a lot.',
  },
  {
    name: 'Khalilullah Baig',
    time: '3 months ago',
    text: 'Alhamdulillah, it’s going good. The course content is very attractive and the way of teaching is good. I learned very new concepts in HTML and CSS. Highly recommend.',
  },
  {
    name: 'Zain Ali',
    time: '3 months ago',
    text: 'Before joining this school I was totally zero. But after joining, I learnt a lot of valuable content about web development. Best course 😊',
  },
  {
    name: 'Besham Kumar',
    time: '2 months ago',
    text: 'My best teacher Talha gives good knowledge and also supports us with any issue that appears in work. Thanks a lot Sir Talha.',
  },
  {
    name: 'Ayaan Waqar',
    time: '3 months ago',
    text: 'Absolutely amazing experience. I especially liked how Talha guided everyone throughout the course.',
  },
  {
    name: 'Prof. Qaiser Abbas',
    time: '3 weeks ago',
    text: 'Excellent course for new learners (use headphones for some lectures). I learnt a lot from these lectures.',
  },
  {
    name: 'Abdullah',
    time: '2 months ago',
    text: 'Very helpful and engaging community. One never feels alone being a part of it. In case of any queries, the technical team, seniors and mentors are very supportive. They guide you, and especially the instructor Sir Talha makes technical jargon very easy to understand. 100% recommended for someone starting out their journey in the tech industry.',
  },
  {
    name: 'M Nouman Ejaz',
    time: '2 weeks ago',
    text: 'The course is very well-structured.',
  },
  {
    name: 'Zia Ur Rehman',
    time: '3 weeks ago',
    text: 'I have been part of this community for quite a long time. Overall they are doing great. We discuss new trends here on a regular basis and have sessions on any current topic or concern we are facing these days. Everyone is open to suggestions and help. By joining, you can help someone or get help. Overall I am having a good experience.',
  },
  {
    name: 'Asim Shabbir',
    time: '3 weeks ago',
    text: 'I had a great experience learning at Talha’s School. Recommended.',
  },
  {
    name: 'Ali Raza',
    time: '3 months ago',
    text: 'Really great community. Highly recommended if you want to stay updated in the AI era and keep improving yourself.',
  },
  {
    name: 'Naveed Abbasi',
    time: '3 months ago',
    text: 'I have completed my web development course at Talha’s School. Sir’s teaching style is very friendly and easy to understand. He guides us at every step and answers all our questions clearly. The community is also very strong and helpful.',
  },
  {
    name: 'Usman Yaseen',
    time: '3 months ago',
    text: 'Big brother ❤️',
  },
  {
    name: 'Maimona Akbar',
    time: 'a week ago',
    text: 'It was the best.',
  },
  {
    name: 'Noman Ch',
    time: 'a week ago',
    text: 'Good experience.',
  },
  {
    name: 'Muhammad Bilal',
    time: '2 weeks ago',
    text: 'Good experience.',
  },
  {
    name: 'Aqeel Ahmad',
    time: '2 weeks ago',
    text: 'Good.',
  },
  {
    name: 'Muhammad Akbar Ali',
    time: 'a week ago',
    text: 'Very effective way of teaching. Active community to help everyone. Recommend.',
  },
  {
    name: 'Adnan Iqbal',
    time: '3 months ago',
    text: 'Your efforts in educating people on how to earn are truly commendable. May Allah grant you great success and elevate your status.',
  },
  {
    name: 'Fahleen Arif Aly',
    time: '3 months ago',
    text: 'This man is doing great work and I would recommend it to anyone who wants to learn something from a Pakistani mentor. You would learn and get to know many things.',
  },
  {
    name: 'RAFIA MAJEED',
    time: '5 days ago',
    text: 'Such great and valuable content of learning, and the teaching method is also amazing and friendly.',
  },
  {
    name: 'Muzammil Ismail',
    time: 'a week ago',
    text: 'Exceptional instructor and a truly supportive learning environment!',
  },
  {
    name: 'Haris Ali',
    time: '2 weeks ago',
    text: 'Best experience, and the way of teaching is fabulous.',
  },
  {
    name: 'Abdul Hadi',
    time: '2 months ago',
    text: 'Very helpful and guiding mentor Talha Tariq, and a good community.',
  },
  {
    name: 'omer rao',
    time: 'a week ago',
    text: 'Yes sir, it’s really interesting. Yesterday your session was awesome; I loved your teaching style.',
  },
  {
    name: 'Muhammad Usman',
    time: '3 months ago',
    text: 'Really good experience with Talha Bhai :)',
  },
  {
    name: 'Ataib Saboor',
    time: '3 months ago',
    text: 'Amazing mentorship!',
  },
  {
    name: 'Rana Faisal Joyia',
    time: '3 months ago',
    text: 'Highly recommended.',
  },
];

const StarRating = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg
        key={i}
        className="h-4 w-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.959c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.959a1 1 0 00-.363-1.118L2.98 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.959z" />
      </svg>
    ))}
  </div>
);

const GoogleGlyph = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a11 11 0 0 0 0 9.86l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-16 lg:py-24"
    >
      <div className="absolute top-0 right-0 h-72 w-72 translate-x-36 -translate-y-36 rounded-full bg-orange-100 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-36 translate-y-36 rounded-full bg-blue-100 opacity-30 mix-blend-multiply blur-3xl filter"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold tracking-wide text-orange-500 uppercase">
            Loved by students
          </p>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            What our <span className="text-blue-600">students</span> say
          </h2>

          {/* Google rating summary */}
          <div className="mx-auto mt-6 inline-flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-md sm:flex-row sm:gap-5">
            <GoogleGlyph />
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <StarRating />
              </div>
              <span className="text-sm text-gray-500">
                Based on 109 Google reviews
              </span>
            </div>
            <a
              href={GOOGLE_MAPS_REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-blue-700 sm:ml-2"
            >
              See all reviews ↗
            </a>
          </div>
        </div>

        {/* Reviews masonry */}
        <div className="mx-auto max-w-6xl columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:_balance]">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="mb-6 break-inside-avoid rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-orange-500 text-sm font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.time}</p>
                </div>
                <div className="ml-auto">
                  <GoogleGlyph />
                </div>
              </div>
              <StarRating />
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_MAPS_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-200 bg-white px-8 py-4 font-bold text-blue-700 shadow-md transition hover:border-blue-300 hover:shadow-lg"
          >
            <GoogleGlyph />
            Read all 109 reviews on Google
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
