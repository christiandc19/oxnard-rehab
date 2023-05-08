import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';





import Slide1 from '../../assets/slider1-min.jpg'
import Slide2 from '../../assets/slider2-min.jpg'
import Slide3 from '../../assets/slider3-min.jpg'

import './Hero.css'

const Hero = () => {
    return (
        <>
<div className="slider">
	<ul>
		<li>
            <img src={Slide1} alt="Conselling Session with a patient" loading="lazy" />
        </li>
		<li><img src={Slide2} alt="Conselling Session with a patient" loading="lazy" /></li>
		<li><img src={Slide3} alt="Conselling Session with a patient" loading="lazy" /></li>
	</ul>

    <div className='hero-caption'> 
    <Fade left>
        <h1>WELCOME TO OXNARD REHAB</h1>
        <h2>We Believe In Effective Therapy</h2>
    </Fade>

        <Link to='/contact'>
        <button>
            Call us
        </button>
        </Link>
    </div>

</div>

        </>
    )
}

export default Hero