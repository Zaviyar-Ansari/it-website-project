import React from 'react'
import mainbg from './pictures/Rectangle1.png'
import mission1 from './pictures/mission.jpg'
import mission2 from './pictures/images.jpeg'
import logo from './pictures/logoimg.png'
import logo2 from './pictures/logo2.png'
import logo3 from './pictures/logo3.png'
import logo4 from './pictures/logo4.jpg'
import logo5 from './pictures/logo5.jpeg'
import team from './pictures/Rectangle 55.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
const About = () => {

    
    const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5; // Assuming 5 images/slides

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
      {/*main image section */}
      <div className='relative'>
            <img src={mainbg} alt="" className='object-cover bg-black w-full h-screen -top-10' />
        </div>
        {/*main image text section */}
        <div className='absolute top-60 ml-10 left-0 text-white w-[130vh] '>
            <h1 className='text-center text-7xl flex justify-start font-bold mb-20'>OUR STORY</h1>
            <p className='text-xl mb-20 text-center flex justify-start'>Lorem ipsum dolor sit amet consectetur. Leo id bibendum aliquam eget.</p>

            <div className='flex flex-row justify-start ml-32 gap-20'>
                <button className='bg-primary py-3 px-8 text-xl'>
                    Book a Demo
                </button>
                <button className='bg-transparent border-2 border-white solid p-3 text-xl'>
                REQUEST A QUOTE
                </button>
            </div>
        </div>
        {/*github text section */}
        <div>
            <ul className='flex flex-row justify-evenly gap-10 font-bold text-6xl py-8 shadow-2xl mx-8 bg-white text-black'>
                <li>GitHub</li>
                <li>GitHub</li>
                <li>GitHub</li>
                <li>GitHub</li>
                <li>GitHub</li>
            </ul>
        </div>
        
         {/*Text section*/}
   <div className='font-semibold ml-10 text-5xl mt-0 mb-5 flex justify-center'>
    <h1>Welcome</h1>
    </div>
    {/*text undrline */}
    <div className='flex justify-center items-center ml-20'>
        <p className='border-b-4 border-primary w-[12vh]'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

    {/*paragraph section*/}
    <div className='text-xl font-semibold p-32'>
        <p>background or why we start a company ...Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh
proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae.Lorem
ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices
enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae</p>
    </div>


       {/*Text section*/}
   <div className='font-semibold ml-10 text-5xl mt-0 mb-5 flex justify-center'>
    <h1>Our Team</h1>
    </div>
   
    
    {/*text undrline */}
    <div className='flex justify-center items-center ml-20'>
        <p className='border-b-4 border-primary w-[12vh]'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

     {/*our team section*/}
    <div class="font-sans">
            <div class="lg:max-w-5xl max-w-3xl mx-auto my-20">
                <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                    <div class="border  overflow-hidden bg-black">
                        <img src={team} class="w-full h-56 object-cover rounded-bl-2xl rounded-br-2xl" />

                        <div class="p-4 bg-black">
                            <h4 class="text-white text-base font-bold  text-center">Member name</h4>
                            <p class="text-gray-400 text-xs mt-1  text-center">position in company</p>

                            <div class="space-x-4 mt-4 flex justify-center">
                            <FontAwesomeIcon icon={faFacebook} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faLinkedin} className="text-primary text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div class="border  overflow-hidden bg-black">
                        <img src={team} class="w-full h-56 object-cover rounded-bl-2xl rounded-br-2xl" />

                        <div class="p-4 bg-black">
                            <h4 class="text-white text-base font-bold  text-center">Member name</h4>
                            <p class="text-gray-400 text-xs mt-1  text-center">position in company</p>

                            <div class="space-x-4 mt-4 flex justify-center">
                            <FontAwesomeIcon icon={faFacebook} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faLinkedin} className="text-primary text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div class="border  overflow-hidden bg-black">
                        <img src={team} class="w-full h-56 object-cover rounded-bl-2xl rounded-br-2xl" />

                        <div class="p-4 bg-black">
                            <h4 class="text-white text-base font-bold  text-center">Member name</h4>
                            <p class="text-gray-400 text-xs mt-1  text-center">position in company</p>

                            <div class="space-x-4 mt-4 flex justify-center">
                            <FontAwesomeIcon icon={faFacebook} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faLinkedin} className="text-primary text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div class="border  overflow-hidden bg-black">
                        <img src={team} class="w-full h-56 object-cover rounded-bl-2xl rounded-br-2xl" />

                        <div class="p-4 bg-black">
                            <h4 class="text-white text-base font-bold  text-center">Member name</h4>
                            <p class="text-gray-400 text-xs mt-1  text-center">position in company</p>

                            <div class="space-x-4 mt-4 flex justify-center">
                            <FontAwesomeIcon icon={faFacebook} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl" />
                            <FontAwesomeIcon icon={faLinkedin} className="text-primary text-2xl" />
                            </div>
                        </div>
                    </div>
                    

                   
                </div>
            </div>
        </div>


      {/*imgae and test section*/}
      <div className='flex flex-row p-10'>
        <div className='w-1/2'>
            <img src={mission1} alt="" className='w-full h-full'/>
        </div>
        <div className='w-1/2 px-10'>
        <div className='font-semibold text-4xl mt-0 mb-5 flex justify-start'>
    <h1>Our Mission</h1>
    </div>
    {/*text undrline */}
    <div className='flex justify-start items-center ml-4'>
        <p className='border-b-4 border-primary w-[12vh]'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
            <p className='mt-12 text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur. At leo ornare
sagittis volutpat feugiat volutpat nisl bibendum. Ac
faucibus enim justo tellus bibendum venenatis vel.
Elementum pellentesque dictum viverra tempor. Odio
pellentesque viverra fringilla eleifend laoreet commodo
odio elementum et. Massa a quis facilisi morbi at sit
consequat. Feugiat gravida justo massa et hac. Varius
sed orci tortor et nibh. Pretium leo donec tortor nibh
non pretium fringilla arcu. Nunc quis velit lacus sit.</p>
        </div>
        
    </div>
      {/*imgae and test section*/}
      <div className='flex flex-row p-10 mb-28'>
        <div className='w-1/2 px-10'>
        <div className='font-semibold text-4xl mt-0 mb-5 flex justify-start'>
    <h1>Our Goals</h1>
    </div>
    {/*text undrline */}
    <div className='flex justify-start items-center ml-4'>
        <p className='border-b-4 border-primary w-[12vh]'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
            <p className='mt-12 text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur. At leo ornare
sagittis volutpat feugiat volutpat nisl bibendum. Ac
faucibus enim justo tellus bibendum venenatis vel.
Elementum pellentesque dictum viverra tempor. Odio
pellentesque viverra fringilla eleifend laoreet commodo
odio elementum et. Massa a quis facilisi morbi at sit
consequat. Feugiat gravida justo massa et hac. Varius
sed orci tortor et nibh. Pretium leo donec tortor nibh
non pretium fringilla arcu. Nunc quis velit lacus sit.</p>
        </div>
        <div className='w-1/2'>
            <img src={mission2} alt="" className='w-full h-full'/>
        </div>
    </div>

     {/*boxes and text section*/}
     <div className="bg-black pt-10 w-full mb-20 pb-20">

    {/*Text section*/}
    <div className='font-semibold ml-10 text-5xl mt-5 mb-5 text-white flex justify-center'>
    <h1>Why You Chose Us</h1>
    </div>

    {/*text undrline */}
    <div className='flex justify-center items-center ml-20'>
        <p className='border-b-4 border-primary w-1/4'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

     {/*boxes section */}
       <div className='flex flex-row justify-center space-x-6 px-20 mt-28'>
        <div className='text-center bg-white p-6 '>
            <h1 className='text-xl font-semibold mb-6'>Customer-Centric Approach</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tortor
               sapien commodo nisi volutpat. Lobortis
               sed.Lorem ipsum dolor sit amet consectetur.
               Tortor sapien commodo nisi volutpat. Lobortis
               sed.
            </p>
        </div>
        {/*box2*/}
        <div className='text-center bg-white p-6'>
            <h1 className='text-xl font-semibold mb-6'>Innovation</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tortor
               sapien commodo nisi volutpat. Lobortis
               sed.Lorem ipsum dolor sit amet consectetur.
               Tortor sapien commodo nisi volutpat. Lobortis
               sed.
            </p>
        </div>
        {/*box3*/}
        <div className='text-center bg-white p-6'>
            <h1 className='text-xl font-semibold mb-6'>Reliability</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tortor
               sapien commodo nisi volutpat. Lobortis
               sed.Lorem ipsum dolor sit amet consectetur.
               Tortor sapien commodo nisi volutpat. Lobortis
               sed.
            </p>
        </div>
        
       </div> 
       
       {/*button*/}
       <div className='flex justify-end my-10 px-20'>
        <button className='text-white bg-primary px-7 text-xl py-3'>SEE OUR WORK</button>
       </div>
    
    </div>

    {/*Text section*/}
   <div className='font-semibold ml-10 text-5xl mt-0 mb-5 flex justify-center'>
    <h1>Testimonial's</h1>
    </div>
    {/*text undrline */}
    <div className='flex justify-center items-center ml-20'>
        <p className='border-b-4 border-primary w-[20vh]'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

         {/*crousel messages*/}
    <div id="default-carousel" className="relative w-full p-28 mb-72" data-carousel="slide">
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-2xl">
        <div className={`duration-700 ease-in-out ${currentIndex === 0 ? "block" : "hidden"}`} data-carousel-item>
           <div className='flex flex-row justify-start items-center text-primary text-3xl font-bold'>
           <img src={logo} alt="" />
           <h1>company name</h1>
           </div>
          <p className='px-28 font-bold'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper.
             Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci.
O            rci turpis magna mauris elit aliquam id arcu viverra.
             Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
        </div>
        <div className={`duration-700 ease-in-out ${currentIndex === 1 ? "block" : "hidden"}`} data-carousel-item>
           <div className='flex flex-row justify-start items-center text-primary text-3xl font-bold'>
           <img src={logo2} alt="" />
           <h1>company name</h1>
           </div>
          <p className='px-28 font-bold'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper.
             Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci.
O            rci turpis magna mauris elit aliquam id arcu viverra.
             Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
        </div>
        <div className={`duration-700 ease-in-out ${currentIndex === 2 ? "block" : "hidden"}`} data-carousel-item>
           <div className='flex flex-row justify-start items-center text-primary text-3xl font-bold'>
           <img src={logo3} alt="" />
           <h1>company name</h1>
           </div>
          <p className='px-28 font-bold'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper.
             Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci.
O            rci turpis magna mauris elit aliquam id arcu viverra.
             Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
        </div>
        <div className={`duration-700 ease-in-out ${currentIndex === 3 ? "block" : "hidden"}`} data-carousel-item>
           <div className='flex flex-row justify-start items-center text-primary text-3xl font-bold'>
           <img src={logo4} alt="" />
           <h1>company name</h1>
           </div>
          <p className='px-28 font-bold'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper.
             Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci.
O            rci turpis magna mauris elit aliquam id arcu viverra.
             Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
        </div>
        <div className={`duration-700 ease-in-out ${currentIndex === 4 ? "block" : "hidden"}`} data-carousel-item>
           <div className='flex flex-row justify-start items-center text-primary text-3xl font-bold'>
           <img src={logo5} alt="" />
           <h1>company name</h1>
           </div>
          <p className='px-28 font-bold'>Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut quis semper.
             Sit lectus nibh arcu risus scelerisque neque. At at eget id laoreet sed diam orci.
O            rci turpis magna mauris elit aliquam id arcu viverra.
             Orci vulputate tellus tincidunt nullam etiam. Ut morbi id elementum quam.</p>
        </div>
        {/* Add similar blocks for other images */}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === i ? "bg-black" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Previous button */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevious} aria-label="Previous">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg className="w-12 h-12 text-black  dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next button */}
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNext} aria-label="Next">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg className="w-12 h-12 text-black dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    </div>
  )
}

export default About
