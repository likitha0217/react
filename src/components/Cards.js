import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Digital Marketing services</h1>
            <p>Technical SEO recommendations and strategies for clients, with industry leading link building and content marketing</p>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/image1.png'
                        
                        
                        path='/services'
                         />

<CardItem 
                        src='images/image2.png'
                        
                        
                        path='/services'
                         />

<CardItem 
                        src='images/image3.png'
                        
                        
                        path='/services'
                         />
</ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
