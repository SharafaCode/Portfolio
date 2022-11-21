import React from 'react';
import { BsArrowDown } from "react-icons/bs";
import './hero.css';
import Header from '../header/Header';
import BashImage from '../../assets/IMG_1689.jpg';


const Hero = () => {
  return (
    <section className='frame-section'>
    <article className='frame-article'>
    <Header/>
      <div className="hero-content">

        <div className="name-wrapper">

        <div className="subname">
          
          <div>
            <p>
              Hello, I'm
            </p>
          </div>
          <div>
            <h3>
              SHARAFA
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
        </div>

        <div className="btn">
          <div>
            <button type='button' className='btns'>
              About Me
            </button>

          </div>
          <div>
            <button type='button' className='btns'>
              Profolio
            </button>
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
      
       
      </div>
    </article>
</section>
  
  )
}

export default Hero