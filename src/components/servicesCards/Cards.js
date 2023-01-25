import React from 'react'
import './Cards.css'
import ServicesCards from '../props/CardProps';

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <>

            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1><br/>
                <p>At Oxnard Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

        <div className='cards'>
            <div className='card-container'>
                <Fade bottom>
                    <ServicesCards
                        Image={Card1}
                        CardName="MENTAL HEALTH TREATMENT​"
                        Description="Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety. Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time."
                    />
                </Fade>

                <Fade top>
                    <ServicesCards
                        Image={Card2}
                        CardName="SUBSTANCE USE TREATMENT"
                        Description="No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Oxnard Rehab Treatment Center."
                    />
                </Fade>

                <Fade bottom>
                    <ServicesCards
                        Image={Card3}
                        CardName="EMPLOYMENT / JOB ASSISTANCE"
                        Description="We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery."
                    />
                </Fade>
            </div>
        </div>
    </>
  )
}

export default Cards
