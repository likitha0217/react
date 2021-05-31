import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
                   <h1>WEBSIGMA                  
                       </h1> 
                    <p>DIGITAL MARKETING COMPANY</p><br></br>
                    <div className="">
                        <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                            GET STARTED
                        </Button>
                        
                    </div>
                    
                    </div>
    )
}

export default HeroSection
