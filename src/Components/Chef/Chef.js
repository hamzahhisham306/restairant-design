import React from 'react';
import './chef.css';
import chef from '../../assets/chef.png';
function Chef() {
  return (
    <div className='chef section__padding app__bg'>
        <div className='chef__image'>
            <img src={chef} alt='chef'/>
        </div>   
        <div className='chef__text'>
          <h3>Chef Word</h3>
          <h1>What We Belive In</h1>
          <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          <h3 className='golden'>Kevin Luo</h3>
          <p>Chef & Founder</p>

        </div>
    </div>
  )
}

export default Chef;
