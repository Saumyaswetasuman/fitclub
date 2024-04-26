import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png"
import{motion} from "framer-motion";
import CounteUp from "react-countup"
const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth <=768 ?true :false
  return (
    <div className="hero" id="home">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*  the best ad*/}
        <div className="the-best-ad">
          <motion.div initial={{left:mobile ?"178px":"238px"}}
          whileInView={{left:'9px'}}
          transition={{...transition, type:'tween'}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
              <div>
                <span className="stroke-text">Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
        </div>
        {/* figure */}
        <div className="figures">
          <div><span>
           <CounteUp end={140} start={100} delay='4s' prefix="+"/></span>
          <span>expert coaches</span>
          </div>
          <div>
            <span><CounteUp end={978} start={800} delay='4s' prefix="+"/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><CounteUp end={50}start={0} delay='4s' prefix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h"> 
      <button className="btn">Join Now</button>

      <motion.div
      initial={{right:'-1rem'}}
      whileInView={{right:'4rem'}}
      transition={transition}
       className="heart-rate">
        <img src={heart} alt=""/>
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </motion.div>
      <img src={ hero_image} alt="" className="hero-image"/>
      <motion.img
      initial={{right:'11rem'}}
      whileInView={{right:'20rem'}} 
      transition={transition}
      src={hero_image_back} alt="" className="hero-image-back"/>
      {/* calories */}
      <motion.div
      initial={{right:'37rem'}}
      whileInView={{right:'28rem'}}
      transition={transition}
       className="calories">
      <img src={calories} alt=""/>
      <div>
      <span>Calories burned</span>
      <span>220 Kcal</span>
      </div>
     

      </motion.div>
      </div>
    </div>
  );
};

export default Hero;
