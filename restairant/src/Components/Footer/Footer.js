import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className='footer app__bg section__padding'>
      <div className='contact'>
      <div className='contact__flex'>
       <h3>Newsletter</h3>
       <h1 className='h1-golden'>Subscribe TO Our Newsletter</h1>
       <p>And never miss latest Updates!</p>
       <div className='contact__form'>
          <input type='email' placeholder='Email Address'/>
          <button>Subscribe</button>
       </div>
      </div>
      </div>
      <div className='footer__end'>
        <div className='footer__end__section'>
          <div className='contactus'>
            <h2>Contact Us</h2>
            <p className='p-gray'>9 W 53rd St, New York, NY 10019, USA</p>
            <p className='p-gray'>+1 212-344-1230</p>
            <p className='p-gray'>+1 212-555-1230</p>
          </div>
          <div className='gericht'>
             <h1 className='h1-golden'>GERICHT</h1>
             <p className='p-gray'>"The best way to find yourself is to lose yourself in the service of others.”</p>

          </div>
          <div className='contactus'>
           <h2>Working Hours</h2>
           <p className='p-gray'>Monday-Friday<br/>
            08:00 am -12:00 am</p>
            <p className='p-gray'>
            Saturday-Sunday:<br/>
            07:00am -11:00 pm
            </p>
          </div>
        </div>
      </div>
      <p className='p-gray' style={{textAlign:'center', paddingTop:'50px'}}>2022 Gerícht. All Rights reserved.</p>
    </div>
  )
}

export default Footer
