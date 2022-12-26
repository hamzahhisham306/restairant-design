import React from 'react';
import "./special.css";
import special from '../../assets/3596233 1.png';
function Special() {
  return (
    <div className='special section__padding'>
      <h3 className='text-c'>Menu that fits you palatte</h3>
      <h1 className='text-c'>Today Special</h1>
      <div className='special__section'>
         <div className='Wine'>
            <h1>Wine & Beer</h1>
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4 id='dollar'>$56</h4>
            </div>
            <p>AU | Bottle</p>     
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>  
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU   |   Bottle</p>  
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>  
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>        
         </div>
         <div className='special__image'>
         <img src={special} alt='special'/>
         </div>
         <div className='Wine'>
            <h1>Cocktails</h1>
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>     
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>  
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>  
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>  
            <div className='wine-text'>
            <h3>Chapel Hill Shiraz</h3>
             <h4>$56</h4>
            </div>
            <p>AU | Bottle</p>        
         </div>
      </div>
    </div>
  )
}

export default Special
