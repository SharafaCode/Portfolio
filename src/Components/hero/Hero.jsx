import React from 'react';
import { MdOutlineSouth } from "react-icons/md";
import './hero.css';
import Header from '../header/Header';
import img from '../../assets/IMG_1689.jpg';
import A from '../../assets/20221103_082341.jpg'

const Hero = () => {
  return (

    <section className='hero-container'>

        <article className='hero-wrapper'>

            <div className="hero-content">

              <Header/>
              <div className='hero-content-wrapper'>

              <div className='name'>

                <div className='hero-content-subtitle'>

                  <div>
                    <p>

                        Hello, I'm

                    </p>

                  </div>
              
                  <h3>
                    SHARAFA
                  </h3>

                  </div>

                    <h1>
                      OLUWATOBI <br />
                      BASHIR'U
                    </h1>

                  </div>


                  <div className='btn-wrapper'>

                    <div>

                      <button className='btn'>
                        More About Me
                      </button>

                    </div>

                    <div>
                      <button className='btn'>
                        Profolio
                      </button>
                    </div>


                  </div>



                  <div className="image">
                    <img src={img} alt=""  className='img'/>
                  </div>

                </div>

              <div className=' cta-btn'>
                <div className='cta-btn-icon'>

                  < MdOutlineSouth />

                </div>
                <span className='cta-btn-text'>
                  <p>
                    Keep <br /> Scrolling
                  </p>

                </span>
              </div>

            </div>



        </article>
    </section>
  )
}

export default Hero