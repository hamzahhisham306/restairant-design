import React from 'react';
import './laure.css';
import Laure from '../../assets/mgg-vitchakorn-J5ZivsKiu9c-unsplash 2 (1).png';

function Laurel() {
  return (
    <div className='Laurel section__padding'>
        <div className='our__laurel'>
        <div>
            
          <h3 className='title'>Award & Recognition</h3>
          <h1 className='title'>Our Laurels</h1>
          <div className='list__laurel'>
           <div className='box__laurel'>   
            <h1>2</h1>
            <div className='text__laurel'>
             <h3>Bib Gourmond</h3>
             <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
           </div>
           <div className='box__laurel'>   
            <h1>1</h1>
            <div className='text__laurel'>
             <h3>Bib Gourmond</h3>
             <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
           </div>
           <div className='box__laurel'>   
            <h1>
                3
            </h1>
            <div className='text__laurel'>
             <h3>Bib Gourmond</h3>
             <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
           </div>
           <div className='box__laurel'>   
            <h1>4</h1>
            <div className='text__laurel'>
             <h3>Bib Gourmond</h3>
             <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
           </div>
          </div>
        </div>
        </div>
        <div className='laurel__image'>
         <img src={Laure} alt='laurel'/>
        </div>
    </div>
  )
}

export default Laurel
