import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className='footer app__bg section__padding'>
      <div className='contact'>
      <div className='contact__flex'>
       <h3>Newsletter</h3>
       <h1>Subscribe TO Our Newsletter</h1>
       <p>And never miss latest Updates!</p>
       <div className='contact__form'>
          <input type='email' placeholder='Email Address'/>
          <button>Subscribe</button>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
