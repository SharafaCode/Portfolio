import React from 'react';
import './about.css';
import Header from '../header/Header';
import html from '../../assets/html-svgrepo-com.986578b5fa739260c047cad57da59ad6.svg'
import css from '../../assets/css-3.4e47c3122b8d2476a02f97dcfcb28640.svg';
import styles from '../../assets/styled-components-svgrepo-com.eb9a849b9b361c4d919e4f1578700fe9.svg';
import javascript from '../../assets/javascript-svgrepo-com.84ac97b2d839ad0e78473327947874a9.svg';
import react from '../../assets/react-2.e68b35f4774979ae220b1d5d7b345b00.svg';
import redux from '../../assets/redux.0e4fb1c819ac4c060c92343147d4ccf7.svg';
import github from '../../assets/github-svgrepo-com.d4c3fbf515a5c4b4dd5dac6532c2959d.svg';
const About = () => {
  return (
    <section className='frame-section'>
        <article className='frame-article'>
            <Header/>
            <div className="about-content">
                <div className='about-header'>

                    <h1>
                    Me, Myself and I
                    </h1>

                </div>

                <div className='about-desc'>
                    <p>

                    Hello, my name is Tobi, I'm a Front-End Developer from NIgeria (West Africa),  with great passion for building interactive websites.
                    
                    </p>

                    <p>

                    Well-organised person, problem solver, independent employee with high attention to detail. outdoor activities, TV series and oh, i love food, alot.
                    </p>

                    <p>

                    I have a Degree in Computer Science and one year experience using various front-end technologies.
                    </p>

                </div>
                <div className='tech-image'>

                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={styles} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={redux} alt="" />
                    <img src={github} alt="" />

                </div>
            </div>

        </article>
    </section>
  )
}

export default About