import React from 'react'
import knives from '../../../assets/savernake-knives-f4jl2ezowuM-unsplash 2.png';
import './about.css';
function About() {
  return (
    <div className='about section__padding'>
       <div className='about__us'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button>Know More</button>
       </div>
       <div className='savermake'>
        <img src={knives} alt='knives'/>
       </div>
       <div className='our__history'>
       <h1>Our History</h1>
        <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button>Know More</button>
       </div>
    </div>
  )
}

export default About;
