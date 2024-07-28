import React from "react";
import { motion, useInView } from 'framer-motion';

const variants = {
  hidden: {
    opacity:0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 1,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const right = {
  hidden: {
    opacity:0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 1,
      duration: 0.8,
      delay: 0.5,
    },
  },
};


const About = () => {
  return (
    <div className="w-full bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 top-0 absolute flex justify-center h-screen overflow-y-auto overflow-hidden">
      
      <div className="flex flex-col items-center space-y-16 mt-28 lg:mt-32">
        <motion.div className="box-1 flex flex-col items-center"
        variants={variants}
        initial="hidden"
        animate="show"
        >
          <div className="relative flex flex-col items-center lg:items-start md:justify-normal">

            <div className="small-box w-[30%] h-[100px] sm:w-[30%] sm:h-[150px] text-[0.9rem] sm:-top-2  left-10 mt-2 lg:w-60  lg:h-48 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 sm:text-3xl lg:text-4xl text-white flex justify-center items-center absolute font-semibold font-play rounded-tr-3xl rounded-bl-3xl lg:top-0 lg:ml-5 transform md:-translate-x-40 md:text-3xl md:w-[210px] md:h-[150px] box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);">
              What Are <br /> We?
            </div>
            <div className="text-box w-[60%] h-[280px] text-[0.8rem] mt-16 ml-32 sm:h-[340px] sm:w-[68%]  sm:text-[22px] sm:ml-28 sm:mt-24
            lg:w-[600px] bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900 lg:h-[350px] rounded-3xl -translate-x-7 z-10 flex justify-center items-center px-5 lg:px-10 lg:text-2xl font-medium font-kalam text-white lg:mt-28 lg:ml-16 md:w-[50%] md:ml-52 md:p-11 md:mt-24 md:text-xl md:h-[400px] box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);">
              <p>
                We're more than just a platform; we're a beacon of hope in the
                digital realm, providing solace to those navigating life's storms.
                Our mission is simple yet profound: to create a nurturing
                environment where individuals can share their struggles openly
                while receiving invaluable insights and support from a caring
                community.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="box-2 flex flex-col items-center">
          <motion.div className="relative flex flex-col items-center lg:items-start md:justify-normal lg:mt-32"
          variants={right}
          initial="hidden"
          whileInView= "show"
          viewport={{
            once: true
          }}
          >
            <div className="small-box w-[30%] lg:text-right lg:w-60 h-[35%] -translate-x-[200px] lg:h-48 bg-gradient-to-bl from-violet-500 via-purple-600 to-indigo-700 text-3xl lg:text-4xl text-white flex justify-center items-center absolute font-semibold font-play rounded-tl-3xl rounded-br-3xl lg:top-0 lg:translate-x-[550px] transform md:-translate-x-40 md:text-3xl md:w-[210px] md:h-[150px] box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);
            ">
              What We <br />
              Do?
            </div>
            <div className="text-box w-[55%] h-[400px] text-sm ml-24 lg:w-[600px] bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900 lg:h-[350px] rounded-3xl mt-28 -translate-x-7 z-10 flex justify-center items-center px-5 lg:px-10 lg:text-2xl font-medium font-kalam text-white lg:mt-28 lg:ml-16 md:w-[50%] md:ml-52 md:p-11 md:mt-24 md:text-xl md:h-[400px] box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);">
              <p>
                We harness the power of technology not just to connect, but to heal—to ensure that every interaction nurtures both mind and soul. We believe in the transformative magic of sharing, knowing that in each narrative lies the potential for healing and growth.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="box-3 flex flex-col items-center ">
          <motion.div className="relative flex flex-col items-center lg:items-start md:justify-normal lg:mt-32 lg:mb-14"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once:true
          }}

          >
            <div className="small-box w-[30%] lg:w-60 h-[35%] lg:leading-mid -translate-x-[200px] lg:h-48 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 text-3xl lg:text-4xl text-white flex justify-center items-center absolute font-semibold font-play rounded-tr-3xl rounded-bl-3xl lg:top-0 lg:ml-5 transform md:-translate-x-40 md:text-3xl md:w-[210px] md:h-[150px] box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);  ">
              Why We <br />
              Do?
            </div>
            <div className="text-box w-[55%] h-[400px] text-[22px] ml-24 lg:w-[700px] bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900 lg:h-[370px] rounded-3xl mt-28 -translate-x-7 z-10 flex justify-center items-center px-5 lg:px-10 lg:text-2xl font-medium font-kalam text-white lg:mt-28 lg:ml-16 md:w-[50%] md:ml-52 md:p-11 md:mt-24 md:text-xl md:h-[400px] box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);">
              <p>
              In a world where mental well-being is often overlooked, especially in India where millions grapple with silent battles, we stand firm in our commitment to fostering positive change. Through our app and website, we've cultivated a diverse tapestry of voices, including survivors, therapists, psychologists, and everyday heroes. Here, conversations span a myriad of topics—from financial woes to familial dynamics—bolstered by the unifying thread of empathy and understanding.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
