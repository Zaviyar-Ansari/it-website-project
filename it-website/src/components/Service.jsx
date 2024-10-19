import React from 'react'
import mainbg from './pictures/Rectangle 37.png'
import img1 from './pictures/Rectangle 3.png'
import img2 from './pictures/UIUX.png'
import img3 from './pictures/Group 44.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faUser, faCog, faBolt } from '@fortawesome/free-solid-svg-icons';
const Service = () => {
  return (
    <div>
       {/*main image section */}
       <div className='relative'>
            <img src={mainbg} alt="" className='object-cover bg-black w-full h-screen -top-10' />
        </div>
        {/*main image text section */}
        <div className='absolute top-60 ml-10 left-0 text-white w-[130vh] '>
            <h1 className='text-left text-7xl font-bold mb-20'>OUR SERVICES</h1>
            <p className='text-xl mb-20 text-left text-gray-400'>Delivering cutting-edge digital solutions tailored to your business needs.</p>

            <div className='flex flex-row justify-left ml-20 gap-20'>
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
    <div className='text-center font-semibold text-5xl my-20'>
    <h1>Our Offerings</h1>
    <div className='flex justify-center items-center mt-4'>
        <p className='border-b-4 border-primary w-1/6'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
    </div>


    {/*text in image section*/}
        <div className='grid grid-cols-3 px-10 mx-auto gap-10'>
        <div className='relative'>
  <img src={img1} alt="" />
  
  {/* Text at the bottom center with blackish background */}
  <div className='absolute bottom-3 text-4xl h-[12vh] left-0 ml-2 w-[40.5vh] bg-black bg-opacity-60 text-white text-center px-5 py-7 rounded-tl-2xl rounded-tr-2xl '>
    <p>Business Planning</p>
  </div>
</div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <div className='relative'>
  <img src={img1} alt="" />
  
  {/* Text at the bottom center with blackish background */}
  <div className='absolute bottom-3 text-4xl h-[12vh] left-0 ml-2 w-[40.5vh] bg-black bg-opacity-60 text-white text-center px-5 py-7 rounded-tl-2xl rounded-tr-2xl '>
    <p>Business Planning</p>
  </div>
</div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <div className='relative'>
  <img src={img1} alt="" />
  
  {/* Text at the bottom center with blackish background */}
  <div className='absolute bottom-3 text-4xl h-[12vh] left-0 ml-2 w-[40.5vh] bg-black bg-opacity-60 text-white text-center px-5 py-7 rounded-tl-2xl rounded-tr-2xl '>
    <p>Business Planning</p>
  </div>
</div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
         {/*button after the images*/}   
        <div className='my-32 flex justify-center'>
        <btton className='bg-primary text-white py-3 px-8 text-xl'>
                    SEE OUR WORK
        </btton>
        </div>


        {/*images and text section*/}
    <div className="bg-black pt-44 w-full mb-60 pb-20">
         {/*text section */}
<div className='bg-primary1 px-16 mx-10 py-8 mb-20'>
  <h1 className='font-bold text-2xl mb-5'>THAT LOT</h1>
  <p className='text-2xl mb-6'>
    Give your company a faster, more agile way to work with freelancers and contractors. Find contract <br /> and
    pay your external workforce in one click, with 100% compliance.
  </p>
  <div className='flex justify-end'>
    <button className='text-white bg-black px-8 py-4'>BOOK A DEMO</button>
  </div>
</div>
        <div className='flex flex-row justify-evenly text-center gap-10'>
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold' ><FontAwesomeIcon icon={faCog} className="text-4xl text-white flex flex-col" />  12 Services</p>
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold'> <FontAwesomeIcon icon={faBolt} className="text-4xl text-white" />200+ Projects </p> 
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold'><FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl t ext-white" /> $200k+ Revenue </p> 
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold'> <FontAwesomeIcon icon={faUser} className="text-4xl text-white" />300+ Happy Clients</p> 
    </div>
    
    </div>



    </div>
  )
}

export default Service
