import React from 'react';
import './gallery.css';
import first1 from '../../assets/cala-w6ftFbPCs9I-unsplash.png';
import first2 from '../../assets/christian-coquet-p1sdBSnS3Qc-unsplash.png';
import first3 from '../../assets/michele-blackwell-rAyCBQTH7ws-unsplash 2.png';

function Gallery() {
  return (
    <div className='gallery section__padding'>
      <div className='descrption__gallery'>
        <h3>Instagram</h3>
        <h1>Photo Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button>View More</button>
      </div>
      <div className='gallery__images'>
      <img alt='img' src={first1} />
      <img alt='img' src={first2}/>
      <img alt='img' src={first1}/>
      <img alt='img' src={first3}/>
      </div>
    </div>
  )
}

export default Gallery
