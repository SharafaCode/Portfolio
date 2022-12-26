import React from 'react';
import './contact.css';
import Header from '../header/Header'

const Contact = () => {
  return (

    <section className="frame-section">
        <article className="frame-article">
            <Header/>

            <div className="contact-content">
                <div className="contact-header">
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I'm interested in freelance opportunities, Part Time And Junior Developer Roles - especially ambitious or large projects. However, if you have other request or  questions, please don't hesitate to use the contact form.
                    </p>
                </div>

                <form className="contact-form">

                    <div className='name-email'>
                        <input type="text" name='name' placeholder='Name' />
                        <input type='email' email='email' placeholder='E-mail'/>
                    </div>
                    <div className='sub-message'>
                        <input type="text" name="subject" placeholder='Subject' />
                        <textarea name="message"  cols="30" rows="8" placeholder='Message'></textarea>
                    </div>
                    <div className='form-btn'>
                        <button className='form-buttn'>Send Message!</button>
                    </div>


                </form>

            </div>

        </article>
    </section>

    )
}

export default Contact