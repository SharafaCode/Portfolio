import React from 'react';
import './project.css';
import Header from '../header/Header';
import { Icon } from '@iconify/react';
import projectData from './projectData'
// import vite from '../../assets/projects-image/vite-clone-screen.png'

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
                

                <div className="projects-container">
                    {
                        projectData.map((items) => {
                            const {id,img, title, desc, live, github} = items;

                            return (

                                <div className="project-wrapper" key={id}>
                                    <div className='project-image'>

                                    <img src={img} alt="" />
                                    </div>

                                
                                    <div className="project-details">
                                    <h2>
                                        {title}
                                    </h2>
                                    <p>
                                        {desc}
                                    </p>
                                    </div>
                                    <div className="view-project">
                                        <button type='button' className='btn-project'>
                                            <a href={live}>View Project</a>
                                            
                                        </button>
                                        
                                        <button type='button' className='btn-project'>
                                        <a href={github}>
                                            <span className='btn-icon'>
                                            <Icon icon="logos:github-icon" />
                                            </span> Github
                                        </a>
                                        </button>
                                    </div>

                                </div>
                            )
                        })

                    }
                    

                </div>
            </div>
        </article>
    </section>
  )
}

export default Projects