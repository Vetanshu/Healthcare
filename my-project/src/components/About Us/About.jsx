import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 top-0 absolute flex justify-center h-screen">
      <div className="flex flex-col items-center lg:flex-row mt-28 lg:mt-32 lg:ml-60 ">
        <div className="relative flex flex-col items-center lg:items-start md:justify-normal">
          <div className="small-box w-[30%] lg:w-60 h-[35%]  -translate-x-[200px] lg:h-48 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 text-3xl lg:text-4xl text-white flex justify-center items-center absolute font-semibold font-play rounded-tr-3xl rounded-bl-3xl lg:top-0 lg:left-0 transform lg:transform-none md:-translate-x-40 md:text-3xl md:w-[210px] md:h-[150px]">
            What Are <br /> We?
          </div>
          <div className="text-box w-[55%] h-[400px] text-[22px] ml-24  lg:w-1/2 bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900 lg:h-[350px] rounded-3xl mt-28 -translate-x-7 lg:ml-48 z-10 flex justify-center items-center px-5 lg:px-10 lg:text-2xl font-medium font-kalam text-white lg:mt-28 md:w-[50%] md:ml-52 md:p-11 md:mt-24 md:text-xl
           md:h-[400px]">
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
      </div>
    </div>
  );
};

export default About;
