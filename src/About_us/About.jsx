import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import './About.css'
import gd1 from './GD.png';
import gd2 from './note.png';
import gd3 from './discusion.png';
import bg from './bg.png';
import star from './star.png';
import world from './world.png';
import StarEffect from './StarEffect';
import wave from './wave.png';
import about from './About.module.css';


function About() {
  return (
    <>


    {/* <Navbar /> */}


    <StarEffect/>
    <div className={about.sun}>
      <p></p>
      </div>


    <div className={about.Aboutus}>
      {/* <img src={bg} alt="" /> */}
      <p>ABOUT US</p>
      <p1>Home/ABOUT US</p1>
      <img className={about.ring} src={star} alt=""/>
      <img className={about.world} src={world} alt="" />
    </div>

    

    <div className={about.gd}>
    {/* <div >
    
    </div> */}
    <div className={about.arrange}>
    <div className={about.who}>
      <h1>Who We Are ?</h1>
      <p>Goodtech Mind is a leading App and Web development company in India that emphasises bringing the best of technology on the mobile platforms for benefit of its clients. The mobile app and Web Application market that already exists is worth billions of dollars and it is lucrative for investing too.From operations to marketing to games to infotainment,</p>
      <p>
apps have come a long way and are on the threshold of more incredible advancements. In today's
consistently evolving market, apps need to be
interesting, innovative and intuitive to fulfil your ever- increasing goals. At Goodtech Mind, we have a team of developers with the creative insight and technical skills to develop unique apps that are visually appealing and functionally simple.</p>
      <img className={about.gd1} src={gd1} alt='gd1'/>
      <img className={about.service} src={bg} alt="" />
      {/* <div ><h1 className='text1' style={{color: "white" ,textAlign: 'center'}} >0<br></br> clients</h1></div>
      <div ><h1 className='text2' style={{color: "white" ,textAlign: 'center'}} >100%<br></br> Saticfaction</h1></div>
      <div ><h1 className='text3'  style={{color: "white" ,textAlign: 'center'}} >6<br></br> Years of service</h1></div> */}
      <div className={about.box}><h1  style={{color: "white", paddingLeft: '220px', position: "relative", top: "45px"}}>0</h1>
      <p1 style={{color: "white" ,paddingLeft: '200px', position: "relative", top: "45px"}}>Clients</p1></div>
      <div className={about.text2}><h1 style={{color: "white", paddingLeft: '200px', position: "relative", top: "90px"}}>100%</h1>
      <p2 style={{color: "white" ,paddingLeft: '195px', position: "relative", top: "90px"}}>Saticfaction</p2></div>
      <div className={about.text3}><h1 style={{color: "white", paddingLeft: '260px', position: "relative", top: "140px"}}>6</h1>
      <p3 style={{color: "white" ,paddingLeft: '200px', position: "relative", top: "140px"}}>Years of service</p3></div>
      </div>


     <div className={about.mission}>
     <h1>Our Mission</h1>
     <p>

We aspire to serve our clients with the best SEO services offered at the best prices. By delivering myriad range of internet marketing services, we build long term relationship with them and endeavor to expand our client base through referrals.</p>
</div>
<div className={about.vision}>
<h1>Our Vision</h1>
<p>
Our vision is to gain a strong foothold in the internet marketing industry in the coming few years. We believe our quality services offered by talented team of professionals will help us in expanding our presence in different parts of the country within short frame of time.</p>
<img className={about.gd2} src={gd2} alt='gd2'></img>
</div>
<div className={about.what}>
<h1>What We Do?</h1>
<p>
The professional team of Technocrux India works round-the- clock to deliver effective and result-oriented digital marketing and SEO services. Acting as one stop solution provider of web based solutions, our service spectrum comprises of web designing, development, hosting to broad range of SEO and digital marketing services. By employing
the best technology and the best SEO tools, we aim at increasing brand visibility of a website. As we follow white hat techniques, thus desired results are achieved within specified time frame. When it comes to expertise and experience, no one can beat the team of Texchnocrux India.....it is our commitment!</p>
<img className={about.gd3} src={gd3} alt='gd3'></img>
</div>
    </div>
    <img className={about.wave} src={wave} alt="" />
    </div>

    </>
  )
}

export default About