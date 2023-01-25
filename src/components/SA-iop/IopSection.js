import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'


import IopSection1 from '../../assets/IopSection1.jpg'
import PhpSection2 from '../../assets/PhpSection2.jpg'


const IopSection = () => {
  return (
    <>
<div className='wrap'>
    <Fade left>
    <div className="box box-left">
        <h1 className='header'>WHY CHOOSE AN IOP?</h1>
        <br/>
        <p>It is common for those struggling with addiction to not respond well to  residential treatment options. An intensive outpatient program may be the best alternative, as it can offer a high level of care and more accountability (removing patients from access to drugs/alcohol, enabling peers, etc.).
        <br /> <br/>
        If the patient has a strong, supportive family and group of friends/peers, they will be able to undergo care with us, but also be able to live at home. </p>
        <br />
        <h1 className='header'>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1>
        <br/>
        <p>Considered our mid-tier intensive care, the program consists of 3 hours of clinical services 3-5 days per week. Patients also participate in group therapy sessions (2 per day) with any additional sessions available if deemed necessary. We also offer several other therapeutic options, such as:</p>
        <br />
        <ul>
            <li><p>Art therapy</p></li>
            <li><p>Hypnotherapy</p></li>
            <li><p>Family Theraphy</p></li>
            <li><p>Cognitive-behavioral therapy</p></li>
        </ul>
        

    </div>
    </Fade>
    <Fade right>
    <div className="box">
        <img src={IopSection1} width="600px" height="500px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>
</div>
    

{/* SECTION 2 */}

<div className='wrap'>

    <Fade left>
    <div className="box">
        <img src={PhpSection2} width="600px" height="450px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>

    <Fade right>
    <div className="box box-left">
        <h1 className='header'>LEARN ABOUT OUR OTHER PROGRAMS</h1>
        <br/><br/>

        <p>
        At Oxnard Treatment Center, we provide several other avenues of addiction treatment. In addition to our partial hospitalization program, we offer:</p>
        <br />
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/substance-abuse-php'><p className='prog-link'>SUBSTANCE ABUSE - PHP</p></Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                       <Link to='/substance-abuse-op'><p className='prog-link'>SUBSTANCE ABUSE - OP</p></Link>
                </LinkRoll>
                <br />
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mental-health-php'><p className='prog-link'>MENTAL HEALTH - PHP</p></Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mental-health-iop'><p className='prog-link'>MENTAL HEALTH - IOP</p></Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mental-health-op'><p className='prog-link'>MENTAL HEALTH - OP</p></Link>
                </LinkRoll>
        <br />
        <p>Contact us today and start your journey to recovery. We are eager to help you overcome your addiction</p> 
        <br />
    
        <div className='box-btn'>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
            <Link to="/contact">
               <button>Call Us</button>
            </Link>
        </LinkRoll>
        </div>    
    </div>
    </Fade>
</div>
    



    </>
  )
}

export default IopSection
