import React from 'react'
import mainbg from './pictures/Rectangle 39.png'
import mainimg1 from './pictures/img1.png'
import person1 from './pictures/Rectangle 6.png'
import person2 from './pictures/Rectangle 7.png'
import person3 from './pictures/img2.png'
import img1 from './pictures/Rectangle 12.png'
import img2 from './pictures/Rectangle 13.png'
import img3 from './pictures/Rectangle 14.png'
import img4 from './pictures/Rectangle 15.png'
import userimg from './pictures/Group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faUser, faCog, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
        {/*main image section */}
        <div className='relative'>
            <img src={mainbg} alt="" className='object-cover bg-black w-full h-screen -top-10' />
        </div>
        {/*main image text section */}
        <div className='absolute top-60 ml-10 left-0 text-white w-[130vh] '>
            <h1 className='text-center text-5xl flex justify-start font-bold mb-20'>Empowering Your Business with IT <br /> Innovation</h1>
            <p className='text-xl mb-20 text-center flex justify-start'>We specialize in delivering cutting-edge IT services tailored to meet the unique needs of <br />
            businesses across industries. Our expert team is dedicated to providing comprehensive <br />
            solutions that drive efficiency, enhance security, and foster innovation.</p>

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

        {/*after main section image here i can add another iamge */}
        <div className='flex flex-col items-center justify-center  p-20'>
    <img src={mainimg1} alt="" className='mb-6' />
    <h1 className='text-3xl font-semibold text-start'>Give your company a faster, more agile way to work with freelancers and <br />
        contractors. Find, contract, and pay your external workforce in one click, <br /> with 100% compliance.
    </h1>
    </div>

    {/*text section */}
    <div className='bg-primary1 px-16 mx-20 py-8'>
        <h1 className='font-bold text-2xl mb-5'>THAT LOT</h1>
        <p className='text-2xl mb-6'>Give your company a faster, more agile way to work with freelancers and contractors. Find contract <br /> and
        pay yor external workforce in one click, eith 100% compliance.</p>
    </div>

    {/*Text section*/}
    <div className='text-center font-semibold text-5xl my-20'>
    <h1>Everything you need to get ahead</h1>
    <div className='flex justify-center items-center mt-4'>
        <p className='border-b-4 border-primary w-1/2'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
    </div>

    {/*imgae and test section*/}
    <div className='flex flex-row p-10'>
        <div className='w-1/2'>
            <img src={person1} alt=""/>
        </div>
        <div className='w-1/2 px-10'>
            <h1 className='text-4xl font-extrabold mb-10'>The Fastest Hiring And Payments </h1>
            <p className='text-2xl font-medium mb-10'>We specialize in delivering cutting-edge IT services
            tailored to meet the unique needs of businesses across
            industries. Our expert team is dedicated to providing
            comprehensive solutions that drive efficiency, enhance
            security, and foster innovation</p>
            <div>
            <ul className='list-disc text-2xl font-medium ml-6 mb-6'>
                <li>Managed IT Services:</li>
                <li>Cloud Solution</li>
                <li>Cybersecurity:</li>
                <li>IT Consulting</li>
            </ul>
            </div>
            <p> Pay your external workforce in one click.</p>
            <p className='border-b-2 border-black w-1/2 '></p>
        </div>
        
    </div>


    {/*imgae and test section*/}
    <div className='flex flex-row p-10'>
        <div className='w-1/2 px-10'>
            <h1 className='text-4xl font-extrabold mb-10'>The Fastest Hiring And Payments </h1>
            <p className='text-2xl font-medium mb-10'>We specialize in delivering cutting-edge IT services
            tailored to meet the unique needs of businesses across
            industries. Our expert team is dedicated to providing
            comprehensive solutions that drive efficiency, enhance
            security, and foster innovation</p>
            <div>
            <ul className='list-disc text-2xl font-medium ml-6 mb-6'>
                <li>Managed IT Services:</li>
                <li>Cloud Solution</li>
                <li>Cybersecurity:</li>
                <li>IT Consulting</li>
            </ul>
            </div>
            <p> Pay your external workforce in one click.</p>
            <p className='border-b-2 border-black w-1/2 '></p>
        </div>
        <div className='w-1/2'>
            <img src={person2} alt="" />
        </div>
    </div>

    {/*imgae and test section*/}
    <div className='flex flex-row p-10'>
        <div className='w-1/2'>
            <img src={person3} alt="" />
        </div>
        <div className='w-1/2 px-10'>
            <h1 className='text-4xl font-extrabold mb-10'>The Fastest Hiring And Payments </h1>
            <p className='text-2xl font-medium mb-10'>We specialize in delivering cutting-edge IT services
            tailored to meet the unique needs of businesses across
            industries. Our expert team is dedicated to providing
            comprehensive solutions that drive efficiency, enhance
            security, and foster innovation</p>
            <div>
            <ul className='list-disc text-2xl font-medium ml-6 mb-6'>
                <li>Managed IT Services:</li>
                <li>Cloud Solution</li>
                <li>Cybersecurity:</li>
                <li>IT Consulting</li>
            </ul>
            </div>
            <p> Pay your external workforce in one click.</p>
            <p className='border-b-2 border-black w-1/2 '></p>
        </div>
        
    </div>

   {/*text section */}
<div className='bg-primary1 px-16 mx-12 py-8 mb-20'>
  <h1 className='font-bold text-2xl mb-5'>THAT LOT</h1>
  <p className='text-2xl mb-6'>
    Give your company a faster, more agile way to work with freelancers and contractors. Find contract <br /> and
    pay your external workforce in one click, with 100% compliance.
  </p>
  <div className='flex justify-end'>
    <button className='text-white bg-black px-8 py-4'>BOOK A DEMO</button>
  </div>
</div>


    {/*images and text section*/}
    <div className="bg-black pt-44 w-full mb-20 pb-20">
        <div className='flex flex-row justify-between gap-1'>
           <img src={img1} alt=""  className='w-[35vh] h-[50vh]'/>
           <img src={img2} alt=""  className='w-[35vh] h-[50vh]' />
           <img src={img3} alt="" className='w-[35vh] h-[50vh]'/>
           <img src={img4} alt="" className='w-[35vh] h-[50vh]'/>
        </div>
        <div className='text-white w-1/2 p-10 text'> 
            <h1 className='text-4xl foont-semibold'>We specialize in delivering cutting edge
IT services tailored to meet the unique
needs of businesses across industries.
Our expert team is dedicated to
providing comprehensive solutions that
drive efficiency, enhance security, and
foster innovation.</h1>
<p className='underline mt-8'> Pay your external workforce in one click.</p>
        </div>

        <div className='flex flex-row justify-evenly text-center gap-10'>
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold' ><FontAwesomeIcon icon={faCog} className="text-4xl text-white flex flex-col" />  12 Services</p>
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold'> <FontAwesomeIcon icon={faBolt} className="text-5xl text-white" />200+ Projects </p> 
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold'><FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl t ext-white" /> $200k+ Revenue </p> 
        <p className='text-white flex flex-col text-3xl gap-y-4 font-bold'> <FontAwesomeIcon icon={faUser} className="text-4xl text-white" />300+ Happy Clients</p> 
    </div>
    
    </div>


     {/*Text section*/}
     <div className='text-center font-semibold text-4xl my-20'>
    <h1>Don t just take our word for it..</h1>
    <div className='flex justify-center items-center mt-4'>
        <p className='border-b-4 border-primary w-1/4'></p>
        <div className='flex ml-2 gap-2'>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block mr-1'></span>
            <span className='h-3 w-3 bg-primary rounded-full inline-block'></span>
        </div>
    </div>
    </div>


    {/* left and rihgt */}
    <div className='flex flex-row justify-between px-10'>
    <FontAwesomeIcon icon={faArrowLeft} size="2x" />
    <FontAwesomeIcon icon={faArrowRight} size="2x" />
    </div>

    {/*Review section */}
<div className='flex flex-row justify-center gap-10 px-28 mb-28 mt-10'>
              {/*1rd review*/}

<div className='shadow-2xl'>
    <div className='flex flex-rows justify-between items-center'>
        <div >
        <FontAwesomeIcon icon={faStar} className="text-white bg-review1 p-4 text-3xl" />
        </div>
        <div><p className='text-3xl mr-10 font-semibold '>Review</p></div>
    </div>
    <p className='border-b-2 -mt-1 border-gray-600 w-full '></p>
    <div className='flex flex-row justify-start mt-3 px-3'>
        <img src={userimg} alt="" className='w-10 h-10 rounded-full'/>
        <h1 className=' text-gray-600 text-xs ml-3 mt-1'> <span className='font-bold'>JHON SMITH<br /> </span>
        CUSTOMER, AGENT</h1>
    </div>
    <p className='mt-8  px-6 text-gray-600 mb-10'>
    Give your company a faster, more agile
way to work with freelancers and
contractors. Find contract and pay yor
external workforce in one click, eith
100% compliance
    </p>

    </div>
              {/*2rd review*/}

    <div className='shadow-2xl'>
    <div className='flex flex-rows justify-between items-center'>
        <div >
        <FontAwesomeIcon icon={faStar} className="text-white bg-review2 p-4 text-3xl" />
        </div>
        <div><p className='text-3xl mr-10 font-semibold '>Review</p></div>
    </div>
    <p className='border-b-2 -mt-1 border-gray-600 w-full '></p>
    <div className='flex flex-row justify-start mt-3 px-3'>
        <img src={userimg} alt="" className='w-10 h-10 rounded-full'/>
        <h1 className=' text-gray-600 text-xs ml-3 mt-1'> <span className='font-bold'>JHON SMITH <br /> </span>
        CUSTOMER, AGENT</h1>
    </div>
    <p className='mt-8  px-6 text-gray-600 mb-10'>
    Give your company a faster, more agile
way to work with freelancers and
contractors. Find contract and pay yor
external workforce in one click, eith
100% compliance
    </p>

    </div>
          {/*3rd review*/}
    <div className='shadow-2xl'>
    <div className='flex flex-rows justify-between items-center'>
        <div >
        <FontAwesomeIcon icon={faStar} className="text-white bg-review1 p-4 text-3xl" />
        </div>
        <div><p className='text-3xl mr-10 font-semibold'>Review</p></div>
    </div>
    <p className='border-b-2 -mt-1 border-gray-600 w-full '></p>
    <div className='flex flex-row justify-start mt-3 px-3'>
        <img src={userimg} alt="" className='w-10 h-10 rounded-full'/>
        <h1 className=' text-gray-600 text-xs ml-3 mt-1'> <span className='font-bold'>JHON SMITH <br /> </span>
        CUSTOMER, AGENT</h1>
    </div>
    <p className='mt-8  px-6 text-gray-600 mb-10'>
    Give your company a faster, more agile
way to work with freelancers and
contractors. Find contract and pay yor
external workforce in one click, eith
100% compliance
    </p>

    </div>
</div>

       {/*text section */}
<div className='bg-primary1 px-16 mx-12 py-8 mb-36'>
  <h1 className='font-bold text-2xl mb-5'>THAT LOT</h1>
  <p className='text-2xl mb-6'>
    Give your company a faster, more agile way to work with freelancers and contractors. Find contract <br /> and
    pay your external workforce in one click, with 100% compliance.
  </p>
  <div className='flex justify-end'>
    <button className='text-white bg-black px-8 py-4'>BOOK A DEMO</button>
  </div>
</div>



    </div>
  )
}

export default Home