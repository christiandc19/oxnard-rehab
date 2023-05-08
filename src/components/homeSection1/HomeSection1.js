import React from 'react'
import './HomeSection1.css'
import Fade from 'react-reveal/Fade';

import { BsFillPeopleFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';


const HomeSection1 = () => {
  return (
    <>
      
        <div className='homeSection1'>
            <div className='homeSection1-content'>
                {/* <div className='homeSection1-header container'>
                    <h1>We Have More Than 10 Years of Professional Experience in Mental Health and Substance Abuse Treatment</h1>
                    <p>At Oxnard Rehab Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
                </div> */}

                <div className='homeSection1-flexbox'>
                <Fade left>
                    <div className='homeSection1-flexItem homeSection1-flexItem1'>
                        <div className='homeSection1-icon'><BsFillPeopleFill /></div>
                        <div className='homeSection1-icon-caption'>
                            <h1>DEDICATED STAFF</h1>
                            <p>The medical professionals on our team are completely dedicated to your recovery.</p>
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className='homeSection1-flexItem homeSection1-flexItem2'>
                        <div className='homeSection1-icon homeSection1-icon2'><BsGear /></div>
                        <div className='homeSection1-icon-caption'>
                            <h1>PROVEN METHODS</h1>
                            <p>Our treatment methods are solely based on proven research and science-based evidence.</p>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className='homeSection1-flexItem homeSection1-flexItem3'>
                        <div className='homeSection1-icon'><BiSupport /></div>
                        <div className='homeSection1-icon-caption'>
                            <h1> 24/7 SUPPORT</h1>
                            <p>Guidance and support are always in reach. We provide care for you whenever needed.</p>
                        </div>
                    </div>
                </Fade>
                </div>

            </div>
        </div>

    </>
  )
}

export default HomeSection1
