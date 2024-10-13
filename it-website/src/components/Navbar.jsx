import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between mx-auto px-10 bg-black text-white py-4'>
    <h1 className='text-2xl font-bold'>Your Logo</h1>

    <div>
        <ul className="flex flex-row justify-evenly gap-8 py-2">
            <Link to='/'><li>PRODUCTS</li></Link>
            <Link to='/service'><li>WHY XYZ</li></Link>
            <Link to='/webdev'><li>RESOURCES</li></Link>
            <Link to='/about'><li>COMPANY</li></Link>
            <li>PRICING</li>
        </ul>
    </div>

    <div>
        <ul className="flex flex-row justify-evenly gap-8 py-2">
            <li>LOGIN</li>
            <li>CONTACT</li>
        </ul>
    </div>
</div>

    </div>
  )
}

export default Navbar