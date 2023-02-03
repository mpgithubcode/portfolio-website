import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  
  return (
    // NAVBAR CONTAINER
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* LOGO */}
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <p className="fontPrimary font-normal cursor-pointer text-[16px] text-textPrimaryColor">MP Code & Developement</p>

      {/* DESKTOP NAVBAR */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {/* MAPS THROUGH EACH LINK */}
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`fontPrimary font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-textPrimaryColor`}> 
            {/* LINK ELEMENT & TEXT */}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* MOBILE NAV MENU */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* HAMBURGER ICON */}
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] justify-end object-contain' onClick={() => settoggle((prev) => !prev)}/>
        {/* MENU CONTAINER */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          {/* MENU ELEMENTS */}
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`fontPrimary font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-10"} text-white`}> 
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
