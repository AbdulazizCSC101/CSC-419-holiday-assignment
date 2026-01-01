'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type FadeImageSliderProps = {
  images: string[];
};

export default function FadeImageSlider({ images }: FadeImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative w-full h-64 sm:h-72 md:h-80 rounded-xl  overflow-hidden shadow-md'>
      <Image
        src={images[current]}
        alt='Project screenshot'
        fill
        className={`object-cover transition-opacity duration-500 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
    </div>
  );
}
