

import React, { useEffect, useState } from "react";
import chair from "./chair.png";
import curve from "./semicurve.png";
import raja from "./raja.png";
import welcomecs from "./Welcome.module.css";
import profile from "./manish.jpg";
import wave from "../About_us/wave.png";
import axios from "axios";

function Welcome(props) {
  const [contentArray, setContentArray] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setContentArray([])
        const response = await axios.get("https://gtm-backend.onrender.com/api/getalldirector");
        if (Array.isArray(response.data)) {
          setContentArray(response.data);
        } else if (response.data && Array.isArray(response.data.data)) {
          setContentArray(response.data.data);
        } else {
          console.log("Invalid response format:", response.data);
        }
      } catch (error) {
        console.log(`There is an error while fetching data from server: ${error}`);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>
      <div className={welcomecs.director}>
        <img className={welcomecs.chair} src={chair} alt="" />
        <h1 className={welcomecs.welcome}>Welcome</h1>
        <h1 className={welcomecs.welcome1}>To Our Company</h1>
        <img className={welcomecs.wave} src={wave} alt="" />
        
        <div className={welcomecs.director}>
          <img className={welcomecs.curve} src={curve} alt="" />
          <img className={welcomecs.raja} src={raja} alt="" />
          <img className={welcomecs.profile} src={profile} alt="" />
          <h1 className={welcomecs.ceo}>Gokulnanda Ghoria</h1>
          <p className={welcomecs.post}>MANAGING DIRECTOR</p>
        </div>
  
        <h1 className={welcomecs.team}>Meet Our Team Of <br /> Creators, Designers & Developers</h1>
        
        <div className={welcomecs.member}>
          {contentArray.map((member, index) => (
            <div key={index} className={welcomecs.memberItem}>
              <div className={welcomecs.avatarFrame}>
                <img className={welcomecs.curve1} src={curve} alt="" />
                <img className={welcomecs.raja1} src={raja} alt="" />
                <img className={welcomecs.profile1} src={member.avatar} alt="" />
              </div>
              <h1 className={welcomecs.name}>{member.name}</h1>
              <p className={welcomecs.post1}>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}

export default Welcome;
