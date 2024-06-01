import React from 'react'
import mobile from './image/mobile.png';
import laptop from './image/laptop.png';
import text1 from './image/text1.png';
import rating from './image/rating.png';
import header from './Header.module.css';

function Header() {
  return (
    <div className={header.Header}>
      
    <div className={header.shadow}>
    </div>
    
    <img className={header.image1} src={mobile} alt='mobile'/>
    <div className={header.Header2} >
      <img className={header.text1} src={text1} alt="text" />
      <h1>Transforming Ideas into</h1>
      <h2>Innovation Solution</h2>
      <h3>Take charge of your business continuity with<br></br>
         innovative IT solutions</h3>
         <button className={header.lets_start_button}>Let's Start</button>
         <div className={header.shadow2}></div>
    <img className={header.image2} src={laptop} alt='laptop'/>      
    </div>

    
    <div className={header.Header3}>
      <img className={header.Rating} src={rating} alt="rating" />
      <h1>6+ Years of IT Experience <br />
        and Business Knowledge</h1>
        <button className={header.know_more_button}>Know More</button>
    </div>

    </div>
    
  )
}

export default Header
