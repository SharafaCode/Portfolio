import React from 'react';
import { BsArrowDown } from "react-icons/bs";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Icon } from '@iconify/react';
import './hero.css';
import Header from '../header/Header';
import BashImage from '../../assets/image.png';


const Hero = () => {

  return (

    <section className='frame-section'>
      
    <article className='frame-article'>
    <Header/>
      <div className="hero-content">

      

          <div className="subname">
            
            <div>
              <h3>
                Hello, I'm
              </h3>
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
          <div>
            <h2>
               FRONT-END DEVELOPER
            </h2>
          </div>
          <div className='decs'>
            <p>
              I Build Beautiful Simple Things!<span className='project'> <a href=""> Projects</a></span>
            </p>
          </div>

        

        <div className='social-media'>

            <a href="">
            <Icon icon="logos:twitter" />
              </a>

              <a href="" className='font-size'>
              <Icon icon="logos:linkedin-icon" />
              </a>

              <a href="" className='font-size'>
              <Icon icon="logos:github-icon" />
              </a>

              <a href="" className='font-size'>
              <Icon icon="logos:facebook" />
          </a>
         
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
      
       
      </div>
    </article>
</section>
  
  )
}

export default Hero