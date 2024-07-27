import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../assets/images/Image1.png';
import About from '../About Us/About';

const variants = {
  hidden: {
    scale: 0,
    y: 200,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 1,
      duration: 0.8,
      delay: 0.5,
    },
  },
};


const Home = () => {
  return (
    <>
    <div className="absolute top-0 w-full h-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-950 via-indigo-950 to-blue-950 overflow-hidden">
      <div className="flex flex-col md:flex-row h-full justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center font-play text-white px-4 md:px-8 overflow-hidden z-10">
          <div className="overflow-hidden">
            <motion.div variants={variants} initial="hidden" animate="show">
              <h1 className="text-5xl md:text-4xl lg:text-6xl font-medium mb-4">
                Your Mental
              </h1>
              <h1 className="text-5xl md:text-4xl lg:text-6xl font-medium mb-4">
                Health Matters
              </h1>
            </motion.div>
          </div>
          {/* Move image here on small screens */}
          <div className="md:hidden w-full flex justify-center mt-4 overflow-hidden">
            <motion.img
              src={Image1}
              alt="Mental Health"
              className="w-64 max-w-full h-auto"
              variants={variants}
              initial="hidden"
              animate="show"
            />
          </div>
          <div className="mt-10 md:text-lg lg:text-xl font-light overflow-hidden">
            <motion.p
              className="px-12"
              variants={variants}
              initial="hidden"
              animate="show"
            >
              Explore a compassionate space where you can connect, share, and
              grow with others on their mental health journey.
            </motion.p>
          </div>
        </div>
        {/* Image for larger screens */}
        <div className="hidden md:flex w-1/2 justify-center items-center overflow-hidden">
          <motion.img
            src={Image1}
            alt="Mental Health"
            className="w-[500px] md:w-80 lg:w-96 max-w-full h-auto"
            variants={variants}
            initial="hidden"
            animate="show"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
