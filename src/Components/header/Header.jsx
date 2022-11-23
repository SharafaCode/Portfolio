import React from 'react';
import './header.css';
import logo from '../../assets/Black_Minimalist_Initial_Font_BE_Logo-removebg-preview.png';
import { VscChromeClose } from "react-icons/vsc";

const header = () => {
  return (
   <header className='header-section'>

    <nav className='header-container'>


        <div className='header-content'>

            <div className="logo">
                <h1>
                    B.S
                </h1>

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
    </nav>

   </header>
  )
}

export default header