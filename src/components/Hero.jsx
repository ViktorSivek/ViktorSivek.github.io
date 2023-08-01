import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const phrases = ['I do web applications', 'I do data analysis'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Change the text every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e13f3f]' />
          <div className='w-1 sm:h-60 h-24 bg-[#e13f3f]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#e13f3f]">Viktor</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <AnimatePresence mode="wait">
              <motion.span
                className="overflow-hidden inline-block cursor"
                style={{whiteSpace: "nowrap"}}
                key={phrases[index]}
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                exit={{ width: 0 }}
                transition={{ duration: 1, type: "tween" }}
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </p>
        </div>
      </div>



      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;