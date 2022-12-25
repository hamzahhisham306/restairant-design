import React from 'react';
import './Header.css';
import Welcome from '../../../assets/welcome.png';
function Header() {
  return (
    <div className='header section__padding'>
      <div className='header__text'>
        <h3>Chase The New Flavour</h3>
        <h1>The key To Fine Dining</h1>
        <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button>Explore Menu</button>
      </div>
      <div className='header__image'>
        <img src={Welcome} alt='welcome'/>
      </div>
    </div>
  )
}

export default Header
