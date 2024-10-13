import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
    <footer className=' bg-black text-white'>

    <h1 className='text-6xl font-bold px-14 -mb-10 pt-20'>LOGO</h1>

    <div className='flex flex-row justify-between px-14 py-20'>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
Laoreet cras egestas.Lorem ipsum dolor <br />
sit amet consectetur. Laoreet cras <br />
egestas.Lorem ipsum dolor sit amet <br />
consectetur. Laoreet cras egestas.Lorem <br />
ipsum dolor sit amet consectetur. <br />
Laoreet cras egestas.Lorem ipsum dolor <br />
sit amet consectetur. Laoreet cras <br />
egestas.Lorem ipsum dolor sit amet <br />
consectetur. Laoreet cras egestas.</p>
            </div>

        <div>
            <ul>
                <li className='mb-5'>Services</li>
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Graphic Design</li>
                <li>Graphic Design</li>
                <li>Business Planning</li>
            </ul>
        </div>

        <div>
            <ul>
                <li className='mb-5'>Usefull Links</li>
                <li>Lorem</li>
                <li>Contact Us</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Testimonials</li>
            </ul>
        </div>

        <div>
            <h1>Follow Us</h1>
            <div className='grid grid-cols-3 gap-3'>
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 text-2xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700 text-2xl" />
            <FontAwesomeIcon icon={faYoutube} className="text-red-600 hover:text-red-800 text-2xl" />
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900 text-2xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 text-2xl" />
            <FontAwesomeIcon icon={faBehance} className="text-blue-500 hover:text-blue-700 text-2xl" />
            </div>
        </div>

        </div>
        </footer>
    </div>
  )
}

export default Footer