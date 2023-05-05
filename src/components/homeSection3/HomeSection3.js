import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'

import './HomeSection3.css'
import { BiBrain } from 'react-icons/bi';
import { FaTheaterMasks } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { ImSad } from 'react-icons/im';


const HomeSection3 = () => {
  return (
    <>
      <div className='homeSection3'>
        <div className='homeSection3-content container'>
            <h1>WHAT WE OFFER</h1>
            <h2>Mental Health Services</h2>
            <p>At Oxnard Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
        
        
            <div className='homeSection3-cards'>

                <div className='homeSection3-item'>
                    <h2><BiBrain /></h2>
                    <h1>ANXIETY</h1>
                    <p>Intense, excessive, and persistent worry and fear about everyday situations. Fast heart rate, rapid breathing, sweating, and feeling tired may occur.</p> <br />

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/anxiety">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection3-item'>
                    <h2><GiBrain /></h2>
                    <h1>DEPRESSION</h1>
                    <p>A group of conditions associated with the elevation or lowering of a person's mood, such as depression or bipolar disorder.</p><br />
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/depression">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                

                </div>

                <div className='homeSection3-item'>
                    <h2><FaTheaterMasks /></h2>
                    <h1>BIPOLAR</h1>
                    <p>The exact cause of bipolar disorder isn’t known, but a combination of genetics, environment, and altered brain structure and chemistry may play a role.</p><br />
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/bipolar-disorder">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection3-item'>
                    <h2><ImSad /></h2>
                    <h1>STRESS DISORDER</h1>
                    <p> It is a state of worry or mental tension caused by a difficult situation. Stress is a natural human response that prompts us to address challenges and threats in our lives. </p><br />
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/acute-stress-disorder">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection3-item'>
                    <h2><BiBrain /></h2>
                    <h1>PANIC DISORDER</h1>
                    <p>It is a recurring and regular panic attacks, often for no apparent reason. Everyone experiences feelings of anxiety and panic at certain times during their lifetime.</p><br />
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/panic-disorder">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

                <div className='homeSection3-item'>
                    <h2><GiBrain /></h2>
                    <h1>SCHIZOPHRENIA</h1>
                    <p>Paranoid delusions, also called delusions of persecution, reflect profound fear and anxiety along with the loss of the ability to tell what's real and what's not real. </p><br />
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/schizophrenia">
                            <button className="cta"> <span>LEARN MORE</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Link>
                    </LinkRoll>                
                </div>

            </div>

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/mental-health">
                <div className='homeSection3-btn'>
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

export default HomeSection3
