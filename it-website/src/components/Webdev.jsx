import React from 'react'
import mainbg from './pictures/Rectangle 37.png'
import logo from './pictures/logoimg.png'
import logo2 from './pictures/logo2.png'
import logo3 from './pictures/logo3.png'
import logo4 from './pictures/logo4.jpg'
import logo5 from './pictures/logo5.jpeg'
import img1 from './pictures/Rectangle 84.png'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
const Webdev = () => {

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
        <div className='absolute top-60 ml-20 left-0 text-white w-[130vh] '>
            <h1 className='text-left text-7xl font-bold mb-20'>WEB <br /> <span className='ml-10'> DEVELOPMENT</span></h1>
            <p className='text-xl mb-20 text-left'>Delivering cutting-edge digital solutions tailored to your business needs.</p>

            <div className='flex flex-row justify-left gap-20'>
                <btton className='bg-primary py-3 px-8 text-xl'>
                    Buook a Demo
                </btton>
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
    <div className='font-semibold ml-10 text-5xl my-20'>
    <h1>Service Description</h1>
    <div className='flex justify-start items-center mt-4 ml-4'>
        <p className='border-b-4 border-primary w-1/6'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
    </div>

    <div className='flex justify-center px-28'>
        <p className='text-left text-xl '>
        Lorem ipsum dolor sit amet consectetur. Nibh non viverra purus nunc. In suscipit eget tristique pretium. Congue
quam diam enim mi pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta lorem porttitor
lacus commodo.Elementum elementum orci etiam fames venenatis sed.n suscipit eget tristique pretium. Congue
quam diam enim mi pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta lorem porttitor
lacus commodo.Elementum elementum orci etiam fames venenatis sed <span className='text-primary'>more...</span>
        </p>
    </div>


    {/*text and the image section*/}
    <div className='flex flex-row justify-between items-center text-center px-20'>
        <div className=' w-[60vh] text-2xl space-y-4 ' >
               <p>Front-End Development</p>
               <p className='border-b-4 border-gray-300 w-full'></p>
                <p>Back-End Development</p>
                <p className='border-b-4 border-gray-300 w-full'></p>
                <p>Content Management System (CMS) Integration</p>
                <p className='border-b-4 border-gray-300 w-full'></p>
                <p>Word-Press Development</p>
                <p className='border-b-4 border-gray-300 w-full'></p>
                <p>Shopify Development</p>
                <p className='border-b-4 border-gray-300 w-full'></p>
                
        </div>
        <div className='w-1/2'>
        <img src={img1} alt="" />
        </div>
    </div>

  {/*Text section*/}
  <div className='font-semibold ml-10 text-5xl mt-20 mb-10'>
    <h1>Advantages</h1>
    <div className='flex justify-start items-center mt-4 ml-4'>
        <p className='border-b-4 border-primary w-1/6'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
    </div>

    {/*list section*/}
    <div className='mb-32'>
        <ul className='list-disc mx-32 space-y-5 text-xl font-semibold' >
    <li>Lorem ipsum dolor sit amet consectetur. Nulla commodo fermentum felis enim eleifend tellus leo hac</li>
	 <li>Tristique morbi suspendisse sit vestibulum euismod sit in aliquam. Ipsum pellentesque aliquam elementum sed</li>
	 <li>Dictum velit eros amet morbi augue egestas</li>
	 <li>Congue facilisis senectus amet commodo aliquam vitae mi amet duis</li>
	 <li>Arcu malesuada quam arcu consectetur aliquam. Habitasse eu sem vitae vel id diam</li>
	 <li>Euismod in eget risus etiam a nullam. Potenti netus ipsum sit amet in diam sit vel non.</li>
        </ul>
    </div>

     {/*boxes and text section*/}
     <div className="bg-black pt-10 w-full mb-20 pb-20">

    {/*Text section*/}
    <div className='font-semibold ml-10 text-5xl mt-5 mb-5 text-white flex justify-center'>
    <h1>Our Process</h1>
    </div>

    {/*text undrline */}
    <div className='flex justify-center items-center ml-20'>
        <p className='border-b-4 border-primary w-1/6'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

    {/*paragraph text*/}
    <div className='flex justify-center text-white my-10'>
        <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</p>
    </div>

     {/*boxes section */}
       <div className='flex flex-row justify-center space-x-6 px-20'>
        <div className='text-center bg-white p-6 '>
            <h1 className='text-xl font-semibold mb-6'>Discovery</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tortor
               sapien commodo nisi volutpat. Lobortis
               sed.Lorem ipsum dolor sit amet consectetur.
               Tortor sapien commodo nisi volutpat. Lobortis
               sed.
            </p>
        </div>
        {/*box2*/}
        <div className='text-center bg-white p-6'>
            <h1 className='text-xl font-semibold mb-6'>Planning</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tortor
               sapien commodo nisi volutpat. Lobortis
               sed.Lorem ipsum dolor sit amet consectetur.
               Tortor sapien commodo nisi volutpat. Lobortis
               sed.
            </p>
        </div>
        {/*box3*/}
        <div className='text-center bg-white p-6'>
            <h1 className='text-xl font-semibold mb-6'>Execution</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur. Tortor
               sapien commodo nisi volutpat. Lobortis
               sed.Lorem ipsum dolor sit amet consectetur.
               Tortor sapien commodo nisi volutpat. Lobortis
               sed.
            </p>
        </div>
        {/*box4*/}
        <div className='text-center bg-white p-6'>
            <h1 className='text-xl font-semibold mb-6'>Evaluation</h1>
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
    <h1>Client Reviews</h1>
    </div>
    {/*text undrline */}
    <div className='flex justify-center items-center ml-20'>
        <p className='border-b-4 border-primary w-1/6'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

    {/*crousel messages*/}
    <div id="default-carousel" className="relative w-full p-28 " data-carousel="slide">
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


    
     {/*Text section*/}
   <div className='font-semibold ml-10 text-5xl mt-0 mb-5 flex justify-center'>
    <h1>FAQ's</h1>
    </div>
    {/*text undrline */}
    <div className='flex justify-center items-center ml-20 '>
        <p className='border-b-4 border-primary w-[3vh]'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>

    {/*faq's section*/}
    <div className='px-40 space-y-4 mb-80'>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet <FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. <FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur. Libero viverra non volutpat pretium placerat platea viverra. Placerat potenti a sit
        lectus tincidunt venenatis rutrum aliquet tristique. Morbi enim donec id suspendisse aliquam et leo quisque arcu. Sed</p>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. <FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. Dignissim varius id. <FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. Blandit leo et lectus curabitur aliquam.<FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. Auctor vel phasellus eget consectetur. <FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>
        <p className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. Eu nunc eget nunc eget. Habitant quis. <FontAwesomeIcon icon={faPlus} className='bg-primary text-xl p-1 rounded-full text-white' /> </p>
        <p className='border-b-2 border-gray-300 w-full'></p>


    </div>

    </div>
  )
}

export default Webdev
