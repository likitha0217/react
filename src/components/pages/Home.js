import React from 'react'

import '../../App.css';
import About from '../About';
import Cards from '../Cards';
import HeroImage from '../HeroImage';
import HeroSection from '../HeroSection'

function Home(){
    return(
        <>
          <HeroSection />
          <About/>
          <HeroImage/>
          <Cards />
        
         
        
        </>
    )
}

export default Home;