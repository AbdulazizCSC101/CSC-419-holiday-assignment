'use client';
import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

import { useEffect, useState } from 'react';

const images = ['/meme2.jpg', '/meme3.jpg', '/meme4.jpg', '/meme5.gif'];

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

export default function AboutMe() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 5000); // duration must match CSS
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='space-y-4'>
      <section className='max-w-6xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* TEXT CONTENT */}
          <div>
            <span className='text-blue-600 font-semibold tracking-wide uppercase text-lg'>
              About Me
            </span>

            <h1 className='mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 '>
              Building clean, scalable web experiences for real-world problems.
            </h1>

            <p className='mt-6 text-gray-600  max-w-xl leading-relaxed'>
              Hi, I’m <strong>Abdulaziz Ibrahim</strong>, a frontend developer
              focused on crafting responsive and user-friendly web applications.
              I enjoy transforming complex ideas into simple, intuitive
              interfaces using modern web technologies. I believe good software
              should be easy to use, reliable, and built with purpose.
            </p>

            {/* BUTTONS */}
            <div className='mt-8 flex flex-wrap gap-4'>
              <button
                className={`inline-flex items-center gap-2 justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition ${montserrat.className}`}
              >
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
                  className='lucide lucide-download-icon lucide-download'
                >
                  <path d='M12 15V3' />
                  <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                  <path d='m7 10 5 5 5-5' />
                </svg>
                <span> Download Resume</span>
              </button>

              <button
                className={`inline-flex items-center gap-1 justify-center rounded-2xl border border-black  px-6 py-3 text-black  hover:bg-red-500 hover:text-white  transition ${montserrat.className}`}
              >
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
                  className='lucide lucide-folder-key-icon lucide-folder-key'
                >
                  <circle cx='16' cy='20' r='2' />
                  <path d='M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2' />
                  <path d='m22 14-4.5 4.5' />
                  <path d='m21 15 1 1' />
                </svg>
                <span>View Projects</span>
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className='flex justify-center md:justify-end'>
            <div className='relative w-full max-w-sm md:max-w-md'>
              <Image
                src={images[current]} // put your image in /public
                alt='Profile picture'
                width={400}
                height={500}
                className='rounded-xl object-cover w-full h-auto'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 py-16 space-y-16'>
        {/* WHAT I DO */}
        <div className='mb-8'>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold   text-blue-600  hover:text-blue-600 hover:border-gray-300'>
              What I Do
            </h2>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* CARD 1 */}
            <div className='border border-gray-200 shadow-lg rounded-xl p-6 space-y-4 hover:shadow-md transition'>
              <div className='text-blue-600 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-computer-icon lucide-computer'
                >
                  <rect width='14' height='8' x='5' y='2' rx='2' />
                  <rect width='20' height='8' x='2' y='14' rx='2' />
                  <path d='M6 18h2' />
                  <path d='M12 18h6' />
                </svg>
              </div>
              <h3 className='font-semibold text-black text-lg mb-2'>
                Frontend Development
              </h3>
              <p
                className={`text-gray-600 text-sm leading-relaxed ${montserrat.className}`}
              >
                I build responsive and accessible user interfaces using modern
                frontend technologies, ensuring applications work smoothly
                across devices.
              </p>
            </div>

            {/* CARD 2 */}
            <div className='border border-gray-200 shadow-lg space-y-4 rounded-xl p-6 hover:shadow-md transition'>
              <div className='text-blue-600 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-notebook-pen-icon lucide-notebook-pen'
                >
                  <path d='M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4' />
                  <path d='M2 6h4' />
                  <path d='M2 10h4' />
                  <path d='M2 14h4' />
                  <path d='M2 18h4' />
                  <path d='M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z' />
                </svg>
              </div>

              <h3 className='font-semibold text-black text-lg mb-2'>
                UI Implementation
              </h3>
              <p
                className={`text-gray-600 text-sm leading-relaxed ${montserrat.className}`}
              >
                I translate designs into clean, maintainable code while
                maintaining visual consistency and usability.
              </p>
            </div>

            {/* CARD 3 */}
            <div className='border border-gray-200 shadow-lg space-y-4 rounded-xl p-6 hover:shadow-md transition'>
              <div className='text-blue-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-bug-icon lucide-bug'
                >
                  <path d='M12 20v-9' />
                  <path d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z' />
                  <path d='M14.12 3.88 16 2' />
                  <path d='M21 21a4 4 0 0 0-3.81-4' />
                  <path d='M21 5a4 4 0 0 1-3.55 3.97' />
                  <path d='M22 13h-4' />
                  <path d='M3 21a4 4 0 0 1 3.81-4' />
                  <path d='M3 5a4 4 0 0 0 3.55 3.97' />
                  <path d='M6 13H2' />
                  <path d='m8 2 1.88 1.88' />
                  <path d='M9 7.13V6a3 3 0 1 1 6 0v1.13' />
                </svg>
              </div>
              <h3 className='font-semibold text-black text-lg mb-2'>
                Problem Solving
              </h3>
              <p
                className={`text-gray-600 text-sm leading-relaxed ${montserrat.className}`}
              >
                I enjoy breaking down complex problems and building practical
                solutions that improve user experience and system efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* TECHNICAL FOCUS */}
        <div className='space-y-12'>
          <div>
            <h2 className='text-2xl font-bold text-blue-600 '>
              Technical Focus
            </h2>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>

          <p
            className={`text-black max-w-2xl mb-8 text-md ${montserrat.className}`}
          >
            Tools and technologies I use to bring ideas to life.
          </p>

          <div className='space-y-6'>
            {/* DEVELOPMENT */}
            <div>
              <h4 className='font-semibold text-black mb-3'>Development</h4>
              <div className='flex flex-wrap gap-3'>
                {[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'Next.js',
                  'Tailwind CSS',
                  'Git',
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full border text-gray-700 hover:text-blue-500 ${montserrat.className}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div>
              <h4 className='font-semibold text-black mb-3'>
                Tools & Workflow
              </h4>
              <div className='flex flex-wrap gap-3'>
                {['VS Code', 'GitHub', 'Figma', 'Netlify', 'Vercel'].map(
                  (tool) => (
                    <span
                      key={tool}
                      className={`px-3 py-1 text-sm rounded-full border text-gray-700 hover:text-blue-500 ${montserrat.className}`}
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
