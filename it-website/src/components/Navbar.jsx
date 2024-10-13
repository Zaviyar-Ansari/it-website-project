import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between mx-auto px-10 bg-black text-white py-4'>
    <h1 className='text-2xl font-bold'>Your Logo</h1>

    <div>
        <ul className="flex flex-row justify-evenly gap-8 py-2">
            <li>PRODUCTS</li>
            <li>WHY XYZ</li>
            <li>RESOURCES</li>
            <li>COMPANY</li>
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