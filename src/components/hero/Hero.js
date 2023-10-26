import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from "react-scroll";

import HeroLogo from '../../assets/hero-bg-logo2.png'

import Wave from '../../assets/waves.svg'



import Slide1 from '../../assets/hero-image1.webp'
import Slide2 from '../../assets/hero-image2.webp'
import Slide3 from '../../assets/hero-image3.webp'

import './Hero.css'

const Hero = () => {
    return (
        <>

<div className="hero-bg">
<div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
<div className='hero container'>

<div className="slider">
	<ul>
		<li><img src={Slide1} alt="Conselling Session with a patient" loading="lazy" /></li>
		<li><img src={Slide2} alt="Conselling Session with a patient" loading="lazy" /></li>
		<li><img src={Slide3} alt="Conselling Session with a patient" loading="lazy" /></li>
	</ul>
</div>

<div className='hero-right'>
    <div className='hero-caption'> 
        <Fade bottom>

            <div className='hero-headline-hide'>
                <h1>WELCOME TO</h1>
            </div>

            <div className='hero-logo'>
                <img src={HeroLogo}  alt="Oxnard Rehab Logo" loading="lazy" />
            </div>
            <div className='hero-headline'>
                <h1>"You're Stronger Than You Think"</h1>
            </div>

            <p>Substance Abuse and Mental Health Treatment Facility</p>
        </Fade>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <div className='hero-btn'>
                <Link to='/contact'>
                    <button>
                        CALL US
                    </button>
                </Link>
                </div>
            </LinkRoll>
        </div>
    </div> 
</div>


</div>

        </>
    )
}

export default Hero