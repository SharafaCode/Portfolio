import React from 'react';
import { BsArrowDown } from "react-icons/bs";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import './hero.css';
import Header from '../header/Header';
import BashImage from '../../assets/image.png';


const Hero = () => {
  return (
    <section className='frame-section'>
    <article className='frame-article'>
    <Header/>
      <div className="hero-content">

        <div className="col1-wrapper">

          <div className="subname">
            
            <div>
              <h2>
                Hello, I'm
              </h2>
            </div>
            

          </div>

          <div className="name">
            <div>

            <h1>
              OLUWATOBI
            </h1>

            </div>

            <div>
              <h1>
                BASHIRU
              </h1>
            </div>
          </div>
          <div className='decs'>
            <p>
              I build beautiful websites that attracts the right  <br />  kinds of visitors. <span>(FrontEnd Web Dev).</span>
            </p>
          </div>

        </div>

        <div className="image">

          <img src={BashImage} className='img' alt="bash" />

        </div>

        <div className="scrollbtn">

          <div className='scrollIcon'>

          <BsArrowDown/>
          </div>
          <div>
            <p>
              Keep <br />
              Scrolling
            </p>
          </div>


        </div>


        <div className='social-media'>
          <a href="">
          < FaFacebookF/>
          </a>
          <a href="">
          <FaTwitter/>

          </a>
          <a href="">
          <FaLinkedinIn/>

          </a>
          <a href="">
          <FaGithub />

          </a>

        </div>
        {/* <div className='whatsapp'>
       < FaWhatsapp/>
        </div> */}
      
       
      </div>
    </article>
</section>
  
  )
}

export default Hero