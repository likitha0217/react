import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <h1>About WEBSIGMA</h1>

             <div className="About__Container">
                 <div className="About__wrapper">
                     <div className="About__Item1">
                     
                     <h2>We create digital experiences that excite and inspire</h2>
                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>

                     
                     </div>

                     <div className="About__Item2">
                     <p>
                     <img 
                        src='images/image10.jpg'
                        text='Explore The hidden waterfall deep
                        inside the amazon'
                        label='Adventure'
                        path='/services'
                        width="600px;"
                         />
                     </p>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default About
