import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../assets/images/Image1.png';

const Home = () => {
  return (
    <div className='relative pt-[68px] h-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-950 via-indigo-950 to-blue-950'>
      <div className='flex h-full'>
        <motion.div
          className='w-1/2 flex flex-col justify-center items-center text-center font-play text-white overflow-hidden relative'
          initial={{
            scale: 0,
            y: 200,
          }}
          animate={{
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <h1 className='text-6xl font-medium mb-4'>
            Your Mental
          </h1>
          <h1 className='text-6xl font-medium'>
            Health Matters
          </h1>
          <div className='mt-10 font-light text-lg'>
            <p className='px-12'>
              Explore a compassionate space where you can connect, share, and grow with others on their mental health journey.
            </p>
          </div>
        </motion.div>
        <div className='w-1/2 flex justify-center items-center overflow-hidden relative'>
          <motion.img
            src={Image1}
            alt='Mental Health'
            className='w-[500px] max-w-full h-auto'
            initial={{
              scale: 0,
              x: 500,
            }}
            animate={{
              scale: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
