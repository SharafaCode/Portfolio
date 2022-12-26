import React from 'react';
import './project.css';
import Header from '../header/Header';
import { Icon } from '@iconify/react';
import vite from '../../assets/projects-image/vite-clone-screen.png'
// import html from '../../assets/html-svgrepo-com.986578b5fa739260c047cad57da59ad6.svg'
// import css from '../../assets/css-3.4e47c3122b8d2476a02f97dcfcb28640.svg';
// import styles from '../../assets/styled-components-svgrepo-com.eb9a849b9b361c4d919e4f1578700fe9.svg';
// import javascript from '../../assets/javascript-svgrepo-com.84ac97b2d839ad0e78473327947874a9.svg';
// import react from '../../assets/react-2.e68b35f4774979ae220b1d5d7b345b00.svg';
// import redux from '../../assets/redux.0e4fb1c819ac4c060c92343147d4ccf7.svg';
// import github from '../../assets/github-svgrepo-com.d4c3fbf515a5c4b4dd5dac6532c2959d.svg';
const Projects = () => {
  return (
    <section className='frame-section'>
        <article className='frame-article'>
            <Header/>

            <div className="projects-content">
                <div className="projects-header">
                    <div>
                        <h1>
                          My Projects
                        </h1>
                    </div>
                    <div>
                        <p>
                        A small gallery of recent projects chosen by me.
                        </p>
                    </div>
                </div>

                <div className="projects-image-container">

                    <div className="image-wrapper">
                        <div className='project-image'>

                        <img src={vite} alt="" />
                        </div>

                    
                        <div className="project-details">
                        <h2>
                            Vite-Clone
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, perferendis!</p>
                        </div>
                        <div className="view-project">
                            <button type='button' className='btn-project'>
                                View Project
                            </button>
                            
                            <button type='button' className='btn-project'>
                            <a href="https://www.google.com/">
                                <span className='btn-icon'>
                                <Icon icon="logos:github-icon" />
                                    </span> Github
                            </a>
                            </button>
                        </div>

                    </div>
                    <div className="image-wrapper">
                        <div className='project-image'>

                        <img src={vite} alt="" />
                        </div>

                    
                        <div className="project-details">
                        <h2>
                            Vite-Clone
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, perferendis!</p>
                        </div>
                        <div className="view-project">
                            <button type='button' className='btn-project'>
                                View Project
                            </button>
                            
                            <button type='button' className='btn-project'>
                            <a href="https://www.google.com/">
                                <span className='btn-icon'>
                                <Icon icon="logos:github-icon" />
                                    </span> Github
                            </a>
                            </button>
                        </div>

                    </div>
                    

                </div>



            </div>

        </article>
    </section>
  )
}

export default Projects