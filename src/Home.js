import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";
import Logo from "./Logo.jpg";
import HeroImage from "./Hero Image (1).jpg";
import Facebook from "./Facebook.jpg";
import Instagarm from "./Instagram.jpg";
import Linkeedin from "./LinkedIn.jpg";
import Github from "./GitHub.jpg";
import koko from "./koo.jpg";
import Telegram from "./Telegram.jpg"
import Twitter from "./Twitter.jpg";
import HandImage from "./Rectangle.png";
import background from "./Hero Background.png";
import AshImage from "./Group 32.png";
import Moon from "./Moon Black.png";
function Home() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
   
        <div  className={isDarkTheme ? "dark-theme" : ""}>
        <nav>
            <ul>
                <li>
                    <img src={Logo} alt='logo'className='logo'/>
                </li>
                <li className="name">
                    ANISH KUMAR SNIHA
                </li>
                <li>
                    <Link to="/" style={{color:"black", textDecoration:"none"}}>Home</Link>
                </li>
                <li>
                    <Link to="/"  style={{color:"black", textDecoration:"none"}}>About</Link>
                </li>
                <li>
                    <Link to="/"  style={{color:"black", textDecoration:"none"}}>Resume</Link>
                </li>
                <li>
                    <Link to="/"  style={{color:"black", textDecoration:"none"}}>Skills</Link>
                </li>
                <li>
                    <Link to="/"  style={{color:"black", textDecoration:"none"}}>Project</Link>
                </li>
                <li>
                   <Link to="/"  style={{color:"black", textDecoration:"none"}}>Contact</Link> 
                </li>
                <li>
                    
                    <img  src={Moon} alt="dark" className='dark-theme' onClick={toggleDarkTheme}/>
                   
                </li>
            </ul>
        </nav>
        <div className='details'>
            <div>
                <p className='msg-box' >Hello!</p>
                <p  className= 'heading' >I'm <sapn style={{textDecoration:"underline"}}>Anish</sapn></p>
                <p>UI/UX Designer, Front-End Developer & Thinker.<br></br>
                    Based in India.</p>
                    <button className='cv-download'>Download Cv</button> 
                    <button className='get-in-touch'>Get in Touch</button>
            </div>
            <div className='hero-container'>
    <div className="hero-image-wrapper">
        <img src={HeroImage} alt="hero" className='hero-image' />
    </div>
</div>

            
        </div>
        <div className='images'>
        
        <div className='socail-websites'>
            <img src={Facebook} className='social-images' alt='facebook'/><br></br>
            <img src={Instagarm} alt="instagram" className='social-images'/><br></br>
            <img src={Github} alt='github' className='social-images'/><br></br>
            <img src=
            {Linkeedin} alt="linkedin" className='social-images'/><br></br>
            <img src={koko} alt="koko" className='social-images'/><br></br>
            <img src={Twitter} alt="twitter" className='social-images'/><br></br>
            <img src={Telegram} alt="telegram" className='social-images'/><br></br>
        </div>
        <div><p className='mail'>sinhaanishkumar@outlook.com <sapn>____</sapn><br></br></p></div>
        </div>
        <div className='about'>
            <div className='image1' >
               <img src={HandImage} alt='hand' className='hand-iamge' /><br></br>
               <img src={Facebook} className='social-images' alt='facebook' style={{marginLeft:"30px"}}/><br></br>
            <img src={Instagarm} alt="instagram" className='social-images' style={{marginLeft:"30px"}}/><br></br>
            <img src={Github} alt='github' className='social-images' style={{marginLeft:"30px"}}/><br></br>
            <img src=
            {Linkeedin} alt="linkedin" className='social-images' style={{marginLeft:"30px"}}/><br></br>
            <img src={koko} alt="koko" className='social-images' style={{marginLeft:"30px"}}/><br></br>
            <img src={Twitter} alt="twitter" className='social-images' style={{marginLeft:"30px"}}/><br></br>
            <img src={Telegram} alt="telegram" className='social-images' style={{marginLeft:"30px"}}/><br></br>
            <img src ={background} alt='background' className='background-image'style={{marginLeft:"200px"}}/>
           
            </div>
            <div className='paragraph' >
                <p  className='paragraph' style={{fontSize:"15px"}}>This is it     ;) <sapn style={{paddingLeft:"50px"}}> ________________________________________________________</sapn></p>
                <p style={{fontSize:"11px"}} >Anish Kr. Sinha is an Indian <b>UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. 
                   <br></br> He holds a <b>bachelor degree in Computer Applications</b>. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. 

               <br></br> His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan.

              
               <br></br> When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
               <sapn className="under-line"> ________________________________________________________</sapn>   
           
            </div>
            <div className='image2'>
            <img src ={background} alt='background' className='background-image' style={{width:"300px"}}/><br></br>
                <img src={AshImage} className='ash-iamge' alt="grp"  style={{width:"200px"}}/> 
                
            </div>
            <div><p className='mail' style={{marginLeft:"0px",marginTop:"400px"}}>sinhaanishkumar@outlook.com <sapn>____</sapn><br></br></p></div>
           
        </div>
        
    </div>

  )
}

export default Home;