import React from 'react'
import './ServicesCards.css'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Fade from 'react-reveal/Fade';
import Wave4 from '../../assets/waves4.svg'


const ServicesCards2 = () => {
  return (
    <>


<div className='cards2main-container'>


<div class="cards2-divider-bottom">
<img src={Wave4} loading="lazy" repeat-x alt='wave divider'/>
</div>


<div className="cards2-header container">
                <div className='header-left'>
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <h3>The best possible care. The best possible people.</h3>
                </div>

                <div className='header-right'>
                  <p>At <span>Palm Springs Rehab Treatment Center,</span>  clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
                </div>
</div>

<div className="ServicesCards2-container">

<Fade left>
  <div className="drop drop1" >
    <div className="content">
      <h2>01</h2>
      <div className='drop1-header'>
        <h4>MENTAL HEALTH TREATMENT​</h4>
      </div>
      <p>Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety.</p>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
      <Link to="/mental-health">
        <div className='drop-btn'>
            <p>Read More</p>
        </div>
      </Link>
      </LinkRoll>
    </div>
  </div>
</Fade>

<Fade bottom>
  <div className="drop drop2">
    <div className="content">
      <h2>02</h2>
      <div className='drop2-header'>
        <h4>SUBSTANCE ABUSE TREATMENT​</h4>
      </div>
      <p>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Palm Springs Rehab.</p>

      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
      <Link to="/substance-abuse">
        <div className='drop-btn'>
            <p>Read More</p>
        </div>
      </Link>
      </LinkRoll>
    </div>
  </div>
</Fade>


<Fade right>
  <div className="drop drop3">
    <div className="content">
      <h2>03</h2>
      <div className='drop3-header'>
        <h4>EMPLOYMENT ASSISTANCE​</h4>
      </div>
      <p>We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>

      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
      <Link to="/jobs">
        <div className='drop-btn'>
            <p>Read More</p>
        </div>
      </Link>
      </LinkRoll>
    </div>
  </div>
</Fade>

</div>
</div>
    </>
  )
}

export default ServicesCards2
