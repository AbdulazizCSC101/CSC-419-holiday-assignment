'use client';
import React from 'react';
import FadeImageSlider from '../../imageslider';
import { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});
export default function Projects() {
  const careImages = ['/Care1.png', '/Care2.png', '/Care3.png', '/Care4.png'];

  const biometricImages = [
    '/Bio1.png',
    '/Bio2.png',
    '/Bio3.png',
    '/Bio4.png',
    '/Bio 5.png',
  ];

  // ===== STATE =====
  const [careIndex, setCareIndex] = useState(0);
  const [bioIndex, setBioIndex] = useState(0);
  const [careFade, setCareFade] = useState(true);
  const [bioFade, setBioFade] = useState(true);

  // ===== CARE PROJECT SLIDER =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCareFade(false);
      setTimeout(() => {
        setCareIndex((prev) => (prev + 1) % careImages.length);
        setCareFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ===== BIOMETRIC PROJECT SLIDER =====
  useEffect(() => {
    const interval = setInterval(() => {
      setBioFade(false);
      setTimeout(() => {
        setBioIndex((prev) => (prev + 1) % biometricImages.length);
        setBioFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className='max-w-6xl mx-auto px-4 py-20 space-y-20'>
        {/* HEADER */}
        <div className='space-y-6'>
          <div>
            <h2 className='text-2xl font-bold text-blue-600'>Selected work</h2>
            <div className='mt-1 h-1 w-12 bg-blue-600 rounded-full shadow-lg'></div>
          </div>

          <p className={`max-w-2xl text-gray-600 ${montserrat.className}`}>
            A selection of projects showcasing my experience in building
            responsive web applications and practical systems using modern
            frontend technologies.
          </p>
        </div>

        {/* PROJECTS WRAPPER */}
        <div className='mt-20'>
          {/* ================= PROJECT 1 ================= */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* TEXT */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold text-blue-600'>
                Care Learning Landing Page
              </h2>

              <p
                className={`text-gray-600 leading-relaxed ${montserrat.className}`}
              >
                A responsive care-learning landing page built for Hayoke
                Medicare at Harmonic Plaza. The project focused on clear content
                structure, accessibility, and smooth responsiveness across
                mobile, tablet, and desktop devices.
              </p>

              <div className='flex flex-wrap gap-2'>
                {['React', 'Tailwind CSS', 'Firebase'].map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs rounded-full border border-black 0 text-black hover:text-blue-500 shadow-md ${montserrat.className}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className='relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-md'>
              <img
                src={careImages[careIndex]}
                alt='Care learning project screenshot'
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  careFade ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-6xl mx-auto px-4 py-20 space-y-20'>
        {/* ================= PROJECT 2 ================= */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* IMAGE */}
          <div className='relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-md md:order-1'>
            <img
              src={biometricImages[bioIndex]}
              alt='Biometric attendance project screenshot'
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                bioFade ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* TEXT */}
          <div className='space-y-4 md:order-2'>
            <h2 className='text-2xl font-semibold text-blue-600'>
              Biometric Attendance System
            </h2>

            <p
              className={`text-gray-600 leading-relaxed ${montserrat.className}`}
            >
              A biometric attendance application designed to track employee
              time-in and time-out efficiently. The system provides a clean,
              intuitive interface for attendance monitoring while ensuring
              accuracy and reliability.
            </p>

            <div className='flex flex-wrap gap-1'>
              {['React', 'Tailwind CSS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs rounded-full border text-black border-black hover:text-blue-700 ${montserrat.className} shadow-md`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
