import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


import './HomeSection5.css'
import { BiBrain } from 'react-icons/bi';
import { FaBeer } from 'react-icons/fa';
import { GiPowder } from 'react-icons/gi';
import { RiSyringeLine } from 'react-icons/ri';

const HomeSection5 = () => {
  return (
    <>
      <div className='homeSection5'>
        <div className='homeSection5-content container'>
            <h1>WHAT WE OFFER</h1>
            <h2>SUBSTANCE ABUSE TREATMENT OPTIONS</h2>
            <p>At Oxnard Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
        
        
            <div className='homeSection5-cards'>

                <div className='homeSection5-item'>
                    <h2><BiBrain /></h2>
                    <h1>PARTIAL HOSPITALIZATION PROGRAM</h1>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/substance-abuse-php">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection5-item'>
                    <h2><BiBrain /></h2>
                    <h1>INTENSIVE OUTPATIENT PROGRAM</h1>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/substance-abuse-iop">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection5-item'>
                    <h2><BiBrain /></h2>
                    <h1>OUTPATIENT PROGRAM</h1>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/substance-abuse-op">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>ALCOHOLISM</h1>
                    <p>A chronic disease characterized by uncontrolled drinking and preoccupation with alcohol.</p> <br/>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/alcohol">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection5-item'>
                    <h2><GiPowder /></h2>
                    <h1>COCAINE ADDICTION</h1>
                    <p>Cocaine is a powerfully addictive stimulant drug that comes in the form of a white powder which is commonly snorted, smoked, or injected.</p>
                    <br/>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/cocaine">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                 </div>

                <div className='homeSection5-item'>
                    <h2><RiSyringeLine /></h2>
                    <h1>HEROIN ADDICTION</h1>
                    <p>Heroin is a highly addictive and
                        rapidly acting opiate. Specifically,
                        heroin is produced from morphine,
                        which is a principal component of
                        opium.</p>
                    <br/>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/heroin">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                 </div>

            </div>

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/substance-abuse">
                <div className='homeSection5-btn'>
                        <p class="fancy">
                        <span class="top-key"></span>
                        <span class="text">View All</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                        </p>
                </div>
            </Link>
            </LinkRoll>


        </div>
      </div>
    </>
  )
}

export default HomeSection5
