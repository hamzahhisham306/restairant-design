import React from 'react';
import './find.css';
import find from '../../assets/vitor-pinto-bYSpfD0Wn04-unsplash 1.png';
function Find() {
  return (
    <div className='find section__padding app__bg'>
      <div className='find__us'>
       <h3>Contact</h3>
       <h1>Find Us</h1>
       <p>Lane Ends Bungalow Whatcoft hall Lane Rudheath CW9 75G</p>
       <h4>Opening Hours</h4>
       <p>Mon - Fri : 10:00 am - 02:00 am</p>
       <p>Sat - Sun : 10:00 am - 03:00 am</p>
       <button>Visit Us</button>
      </div>
       <div className='find__image'>
        <img src={find} alt='img'/>
       </div>
    </div>
  )
}

export default Find
