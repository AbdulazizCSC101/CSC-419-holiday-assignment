import React from 'react';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});
import { Sigmar } from 'next/font/google';
const sigmar = Sigmar({
  weight: '400',
  subsets: ['latin'],
});
import { Lexend } from 'next/font/google';
const lexend = Lexend({
  weight: '400',
  subsets: ['latin'],
});

export default function Contact() {
  return (
    <div>
      <section className='max-w-6xl mx-auto px-4 py-24 space-y-20'>
        {/* MAIN CTA */}
        <div className='text-center mt-10 space-y-8'>
          <h1
            className={`text-4xl font-bold text-gray-900 ${sigmar.className}`}
          >
            Let&apos;s build something
            <br />
            <span className=' block text-blue-600'>great together</span>
          </h1>

          <p className={`max-w-2xl mx-auto text-gray-600 ${lexend.className}`}>
            I&apos;m currently open to new opportunities. Whether you have a
            question about a project or just want to say hi, I&apos;ll do my
            best to get back to you.
          </p>

          {/* PRIMARY BUTTONS */}
          <div className='flex items-center sm:flex-row mb-7 justify-center gap-4'>
            <a
              href='mailto:onoruiza1021@gmail.com'
              className='inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition'
            >
              Hire Me
            </a>

            <button className='inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 transition'>
              Get in touch
            </button>
          </div>
        </div>

        {/* DIRECT CHANNELS */}
        <div className='space-y-8'>
          <div className='text-center'>
            <h2 className='text-xl font-semibold mb-7 text-gray-900'>
              Direct Channels
            </h2>
            <p className={`text-gray-500 ${lexend.className}`}>
              Prefer a direct line? Reach out via these platforms.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* EMAIL */}
            <div className='border border-gray-200 rounded-xl shadow-md p-6 space-y-6 hover:shadow-md transition'>
              <div className='text-blue-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-mail-open-icon lucide-mail-open'
                >
                  <path d='M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z' />
                  <path d='m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10' />
                </svg>
              </div>
              <h3 className={`font-semibold text-gray-900 ${lexend.className}`}>
                Email Me
              </h3>
              <p className={`text-sm text-gray-500 ${lexend.className}`}>
                onoruiza1021@gmail.com
              </p>
              <a
                href='https://mail.google.com/mail/?view=cm&fs=1&to=onoruiza1021@gmail.com&su=Project%20Inquiry&body=Hello%20Abdulaziz,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 text-sm font-medium hover:underline '
              >
                Send an email →
              </a>
            </div>

            {/* WHATSAPP */}
            <div className='border border-gray-200 shadow-md rounded-xl p-6 space-y-6 hover:shadow-md transition'>
              <div className='text-blue-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-phone-icon lucide-phone'
                >
                  <path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' />
                </svg>
              </div>
              <h3 className={`font-semibold text-gray-900 ${lexend.className}`}>
                WhatsApp
              </h3>
              <p className={`text-sm text-gray-500 ${lexend.className}`}>
                +234 8059895077
              </p>
              <a
                href='https://wa.me/2348059895077'
                target='_blank'
                rel='noopener noreferrer'
                className={`text-blue-600 text-sm font-medium ${lexend.className}`}
              >
                Chat on WhatsApp →
              </a>
            </div>

            {/* INSTAGRAM */}
            <div className='border border-gray-200 shadow-md rounded-xl p-6 space-y-6 hover:shadow-md transition'>
              <div className='text-blue-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-instagram-icon lucide-instagram'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
              </div>
              <h3 className={`font-semibold text-gray-900 ${lexend.className}`}>
                Instagram
              </h3>
              <p className={`text-sm text-gray-500 ${lexend.className}`}>
                @Abdulinyo_mvp
              </p>
              <a
                href='https://instagram.com/Abdulinyo_mvp'
                target='_blank'
                rel='noopener noreferrer'
                className={`text-blue-600 text-sm font-medium hover:underline ${lexend.className}`}
              >
                Visit profile →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
