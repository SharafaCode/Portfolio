import React from 'react';
import './header.css'

const header = () => {
  return (
   <header className='header-section'>

    <nav className='header-container'>


        <div className='header-content'>

            <div className="logo">

                <h3>BS</h3>

            </div>

            <div className='hamburger-container'>
                <div className="hamburger"></div>
            </div>

            <div className='geo-wrapper'>
                <div>
                <p className='time'>
                    10:35 Am
                </p>

                </div>
                <div>
                <p className='location'>
                Lagos ,Nigeria
                </p>

                </div>
            </div>

        </div>

       

    


    </nav>

   </header>
  )
}

export default header