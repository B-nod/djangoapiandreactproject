import React from 'react';
import hero_image from '../Assets/hero_image.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1">
        <div className=" mt-8 place-self-start lg:col-span-7 pl-12 md:col-span-6 sm:col-span-1">
          <h4 className="max-w-2xl mb-6 text-black lg:mb-4 mt-6 md:text-lg lg:text-md dark:text-gray-400">
            NEW ARRIVALS ONLY
          </h4>
          <h1 className="max-w-x3l top mb-8 font-semibold  tracking-tight leading-none md:text-5xl xl:text-7xl sm:text-5xl dark:text-white">
            New<br /> Collections<br /> For Everyone
          </h1>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Latest Collections
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className=" lg:col-span-5 md:col-span-6 sm:col-span-1 mt-0 flex items-center justify-start ">
          <img src={hero_image} alt="mockup" className="image-right"  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
