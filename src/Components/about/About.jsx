import React from 'react';
import './about.css';
import Header from '../header/Header';

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

                    Hello, my name is Tobi, I'm a Front-End Developer from NIgeria (West Africa),  with great passion for building interactive websites. I have always wondered how things work and that is what fueled my desire to be part of the process.
                    
                    </p>

                    <p>

                    Well-organised person, problem solver, independent employee with high attention to detail. outdoor activities, TV series and oh, i love food, alot.
                    </p>

                    <p>

                    I have a Degree in Computer Science and one year experience using various front-end technologies.
                    </p>

                </div>
            </div>

        </article>
    </section>
  )
}

export default About