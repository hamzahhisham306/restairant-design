import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <div className='navbar section__padding'>
      <div className='logo'>
      <h1>GERICHT</h1>
      </div>
      <ul className='nav__list'>
        <li>Home</li>
        <li>Pages</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Landing</li>
      </ul>
      <div className='register'>
        <h5 className='login'>Login / Registration</h5>
        <p>Book Table</p>
      </div>
    </div>
  )
}

export default Navbar
