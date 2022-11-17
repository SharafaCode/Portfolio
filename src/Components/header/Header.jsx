import React from 'react';
import './header.css';
import logo from '../../assets/20221116_124717_0000-removebg-preview.png';
import { VscChromeClose } from "react-icons/vsc";

const header = () => {
  return (
   <header className='header-section'>

    <nav className='header-container'>


        <div className='header-content'>

            <div className="logo">

                <img src={logo} alt="" />

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
        <div className="nav-list">
            <div className='nav-links'>
                <a href="">
                    Home
                </a>
                <a href="">
                    Project
                </a>
                <a href="">
                    About
                </a>
                <a href="">
                    Contact 
                </a>
            </div>
            <div className='close-icon'>
            <VscChromeClose/>
            </div>
        </div>

   </header>
  )
}

export default header