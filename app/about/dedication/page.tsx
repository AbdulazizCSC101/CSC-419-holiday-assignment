import React from 'react';
import Image from 'next/image';
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

export default function Dedication() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-20 space-y-24'>
      {/* ================= TITLE + HERO ================= */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* TEXT */}
        <div className='space-y-6'>
          <div>
            <h1
              className={`text-4xl md:text-5xl font-bold text-blue-600 ${lexend.className}`}
            >
              Biometric Attendance Tracking System
            </h1>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>
          <p className={`text-gray-600 leading-relaxed ${lexend.className}`}>
            A biometric-based web application designed to accurately track
            employee time-in and time-out, providing organizations with a
            reliable and secure attendance management solution.
          </p>
        </div>

        {/* IMAGE */}
        <div className='relative w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg'>
          <img
            src='/Bio1.png'
            alt='Biometric system dashboard'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
      </div>

      {/* ================= FULL DESCRIPTION ================= */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* TEXT */}

        <div className='space-y-4'>
          <div>
            <h2 className='text-2xl font-semibold text-blue-600'>
              Full Description
            </h2>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>

          <p className={`text-gray-600 leading-relaxed ${lexend.className}`}>
            The Biometric Attendance Tracking System was developed to eliminate
            the inefficiencies of manual attendance recording. By using
            biometric authentication, the system ensures that attendance data is
            accurate, secure, and tied directly to individual employees.
          </p>
        </div>

        {/* IMAGE */}
        <div className='relative w-full h-64 rounded-xl overflow-hidden shadow'>
          <img
            src='/Bio3.png'
            alt='Biometric system dashboard'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
      </div>

      {/* ================= PROBLEM SOLVED ================= */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* TEXT */}
        <div className='space-y-4'>
          <div>
            <h2 className='text-2xl font-semibold text-blue-600'>
              Problem Solved
            </h2>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>

          <p className='text-gray-600 leading-relaxed'>
            I had problem with camera setting up and making form for the editing
            and deleting functions which I was able to find the problem and
            fixed it.
          </p>
        </div>

        {/* IMAGE */}
        <div className='relative w-full h-64 rounded-xl overflow-hidden shadow'>
          <img
            src='/Bio4.png'
            alt='Biometric system dashboard'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
      </div>

      {/* ================= FEATURES (3 CARDS) ================= */}
      <section className='space-y-8'>
        <div>
          <h2 className='text-2xl font-semibold text-blue-600'>Key Features</h2>
          <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='border border-gray-200 shadow-md rounded-xl p-6 space-y-4 hover:shadow-md transition'>
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
                className='lucide lucide-key-round-icon lucide-key-round'
              >
                <path d='M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z' />
                <circle cx='16.5' cy='7.5' r='.5' fill='currentColor' />
              </svg>
            </div>
            <h3 className={`font-semibold text-gray-900 ${lexend.className}`}>
              Biometric Authentication
            </h3>
            <p
              className={`text-sm text-gray-600 leading-relaxed ${lexend.className}`}
            >
              Ensures that attendance records are securely linked to individual
              employees using biometric verification.
            </p>
          </div>

          <div className='border border-gray-200 shadow-md rounded-xl p-6 space-y-4 hover:shadow-md transition'>
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
                className='lucide lucide-clock-check-icon lucide-clock-check'
              >
                <path d='M12 6v6l4 2' />
                <path d='M22 12a10 10 0 1 0-11 9.95' />
                <path d='m22 16-5.5 5.5L14 19' />
              </svg>
            </div>
            <h3 className={`font-semibold text-gray-900 ${lexend.className}`}>
              Time-In / Time-Out Tracking
            </h3>
            <p className={`text-sm text-gray-600 ${lexend.className}`}>
              Accurately records employee working hours with automated
              time-stamping.
            </p>
          </div>

          <div className='border border-gray-200 shadow-md rounded-xl p-6 space-y-4 hover:shadow-md transition'>
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
                className='lucide lucide-layout-dashboard-icon lucide-layout-dashboard'
              >
                <rect width='7' height='9' x='3' y='3' rx='1' />
                <rect width='7' height='5' x='14' y='3' rx='1' />
                <rect width='7' height='9' x='14' y='12' rx='1' />
                <rect width='7' height='5' x='3' y='16' rx='1' />
              </svg>
            </div>
            <h3 className={`font-semibold text-gray-900 ${lexend.className}`}>
              Responsive Dashboard
            </h3>
            <p className={`text-sm text-gray-600  ${lexend.className}`}>
              Allows administrators to monitor attendance records seamlessly
              across mobile, tablet, and desktop devices.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES (UNCHANGED) ================= */}
      <section className='space-y-4'>
        <div className='mt-7'>
          <h2 className='text-2xl font-semibold text-blue-600'>
            Technologies Used
          </h2>
          <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
        </div>

        <div className='flex flex-wrap gap-3'>
          {['React', 'Tailwind CSS', 'Git'].map((tech) => (
            <span
              key={tech}
              className={`px-4 py-1 text-sm rounded-full border border-gray-300 text-black ${lexend.className}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ================= WHAT I LEARNED ================= */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* TEXT */}
        <div className='space-y-4'>
          <div className='mt-7'>
            <h2 className='text-2xl font-semibold text-blue-600'>
              What I learned
            </h2>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>

          <p className='text-gray-600 leading-relaxed'>
            This project improved my understanding of secure authentication
            workflows, responsive UI design, and structuring scalable frontend
            applications that prioritize data integrity and user experience.
          </p>
        </div>

        {/* IMAGE */}
        <div className='relative w-full h-64 rounded-xl overflow-hidden shadow'>
          <Image
            src='/Bio1.png'
            alt='Learning and development illustration'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}
