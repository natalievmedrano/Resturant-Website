import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import{MdOutlineResturantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className="navbarlogo">
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className='app_nav-links'>
      <li className='p_opensans'> <a href="#home">Home</a></li>
      <li className='p_opensans'> <a href="#about">About</a></li>
      <li className='p_opensans'> <a href="#menu">Menu</a></li>
      <li className='p_opensans'> <a href="#awards">Awards</a></li>
      <li className='p_opensans'> <a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
