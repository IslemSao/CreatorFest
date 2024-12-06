'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import speakersDetails from "../../public/data/speakers.json";

type Speaker = {
  name: string;
  description: string;
  imagePath: string;
};

export default function Slider() {
  const [speakers] = useState<Speaker[]>(speakersDetails);
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState<number>(0);

  const nextSpeaker = () => {
    setCurrentSpeakerIndex((currentSpeakerIndex + 1) % speakers.length);
  };

  const previousSpeaker = () => {
    setCurrentSpeakerIndex((currentSpeakerIndex - 1 + speakers.length) % speakers.length);
  };

  const animationVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section id="speakers" className="py-36 bg-[#111111] relative text-white">
      <div className="px-4 flex flex-col gap-16">
        <h2 className="text-5xl md:text-6xl text-center text-shadow-1 font-no-continue">
          SPEAKERS
        </h2>
        <div className="flex items-center justify-center gap-12">
          {/* Previous Button */}
          <button className="w-16 h-16 rounded-full text-3xl flex justify-center items-center lg:border-[4px] lg:border-[#00F2EA]" onClick={previousSpeaker}>
            <Image src="/icons/ltIcon.svg" alt="icon" width={21} height={38} className="-translate-x-1" />
          </button>

          {/* Speaker Details */}
          <div className="flex items-center gap-8 relative flex-wrap-reverse justify-center">
            <AnimatePresence mode="wait">
              {/* Speaker Info */}
              <motion.div
                key={currentSpeakerIndex} // Key ensures proper animations for each speaker
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between rounded-lg bg-[#AFAFAF] bg-opacity-20 max-w-xl min-h-[360px] z-10"
              >
                <div className="bg-gradient-to-r from-[#00F2EA] to-[#FF0050] h-[10px] rounded-t-lg"></div>
                <div className="flex flex-col gap-4 lg:mx-12 md:mx-8 sm:mx-4 mx-4 lg:my-8 sm:my-4 my-4">
                  <h1 className="text-4xl font-bold">{speakers[currentSpeakerIndex].name}</h1>
                  <p className="max-w-xl">{speakers[currentSpeakerIndex].description}</p>
                </div>
                <div className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] h-[10px] rounded-b-lg"></div>
              </motion.div>

              {/* Speaker Image */}
              <motion.div
                key={`image-${currentSpeakerIndex}`}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-[#AFAFAF] bg-opacity-20 p-8 rounded-[14px]"
              >
                <Image
                  src={speakers[currentSpeakerIndex].imagePath}
                  alt="speakerImage"
                  width={279}
                  height={389}
                />
              </motion.div>
            </AnimatePresence>
            <Image src="/icons/redSquare.svg" alt="icon" width={13} height={15} className="absolute right-60 -top-36" />
            <Image src="/icons/blueSquare.svg" alt="icon" width={13} height={15} className="absolute -left-16 top-40 z-0" />
            <Image src="/icons/blueSquare.svg" alt="icon" width={13} height={15} className="absolute left-80 -bottom-8 z-0" />
            <Image src="/icons/blueSquare.svg" alt="icon" width={13} height={15} className="absolute right-36 -bottom-16 z-0" />
          </div>

          {/* Next Button */}
          <button
            className="w-16 h-16 rounded-full text-3xl lg:border-[4px] lg:border-[#FF0050] flex justify-center items-center"
            onClick={nextSpeaker}
          >
            <Image src="/icons/gtIcon.svg" alt="icon" width={21} height={38} className="translate-x-[2px]" />
          </button>
        </div>
      </div>

      {/* Background Decorative Icons */}
      <Image src="/icons/xIcon.svg" alt="icon" width={55.89} height={55.89} className="absolute top-28 left-10" />
      <Image src="/icons/xIcon.svg" alt="icon" width={43.68} height={43.68} className="absolute top-8 right-52" />
      <Image src="/icons/blueSquare.svg" alt="icon" width={13} height={15} className="absolute top-1 right-20" />
      <Image src="/icons/redSquare.svg" alt="icon" width={13} height={15} className="absolute left-28 top-56" />
      <Image src="/icons/redSquare.svg" alt="icon" width={13} height={15} className="absolute left-80 top-10" />
      <Image src="/icons/triangleIcon.svg" alt="icon" width={63.65} height={61.09} className="absolute top-24 right-10" />
    </section>
  );
}
