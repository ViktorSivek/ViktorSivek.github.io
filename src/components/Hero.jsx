import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const SocialLinks = () => {
  return (
    <div className='flex space-x-4'>
      <motion.a
        href='https://github.com/yourusername'
        target='_blank'
        rel='noopener noreferrer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='bg-black rounded-full w-10 h-10 flex items-center justify-center'
      >
        <FontAwesomeIcon icon={faGithub} className="text-white text-xl"/>
      </motion.a>
      <motion.a
        href='https://linkedin.com/in/yourusername'
        target='_blank'
        rel='noopener noreferrer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center'
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl"/>
      </motion.a>
    </div>
  );
};

const Hero = () => {
  const phrases = ["Turning Ideas Into Code", "Your Data, Smarter Decisions", "Front-end to Back-end, I've Got it", "Unearthing Insights Through Analytics", "Building User-Frindly Digital Solutions", "Fast Learner, Eager Problem Solver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Change the text every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, [phrases.length]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e13f3f]' />
          <div className='w-1 sm:h-60 h-24 bg-[#e13f3f]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className="text-[#e13f3f]">Viktor</span></h1>
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
          <SocialLinks />
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