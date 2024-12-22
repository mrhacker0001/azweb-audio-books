import React from 'react'
import './Footer.css'
import logo from './Home/assets/audiobooklogo.png'
import telegram from './Home/assets/telegram (1).png'
import instagram from './Home/assets/instagram (1).png'
import facebook from './Home/assets/social-media.png'
import twitter from './Home/assets/twitter (1).png'


function Footer() {
    return (
        <div className='Footer'>
            <img src={logo} alt="..." className='logo' />

            <div className="all">
                <div className="categ">
                    <b>Categories</b>
                    <span>Fantasy</span>
                    <span>Romance</span>
                    <span>Horror</span>
                    <span>Comedy</span>
                </div>
                <div className="categ">
                    <b>Company</b>
                    <span>Home</span>
                    <span>Sign in</span>
                    <span>Contact</span>
                </div>
            </div>

            <div className="icons">
                <button><img src={telegram} alt="..." /></button>
                <button><img src={instagram} alt="..." /></button>
                <button><img src={twitter} alt="..." /></button>
                <button><img src={facebook} alt="..." /></button>
            </div>

        </div>
    )
}

export default Footer