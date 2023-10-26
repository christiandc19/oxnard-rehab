import React from "react";
import "./Section3.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/program_php.webp";
import Card2 from "../../assets/program_iop.webp";
import Card3 from "../../assets/program_op.webp";
import Card4 from "../../assets/program_case_management.webp";
import Card5 from "../../assets/program_crisis_intervention.webp";
import Card6 from "../../assets/program_family_therapy.webp";



const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="section3-content container">

          <div className="menu-programs-header container">
              <h2>Our Programs</h2>
              <h1>
                Oxnard Rehab Treatment Center offers various Mental Health and Addiction Programs
              
              </h1>
              <p>
                At Oxnard Rehab Treatment Center, clients receive individual
                therapy alongside a range of additional treatments, including relapse
                prevention, trauma therapy, mindfulness meditation, transportation,
                yoga, and more. We offer support that clients need to allow them to
                gradually go back to treatment.
              </p>
            </div>


          <div className="section3-flex">
{/* PHP */}
              <div class="section3-flexItem">
                  <img src={Card1} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>PARTIAL HOSPITALIZATION</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/partial-hospitalization-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/partial-hospitalization-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>

{/* IOP */}

              <div class="section3-flexItem">
                  <img src={Card2} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>INTENSIVE OUTPATIENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/intensive-outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/intensive-outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* OP */}

<div class="section3-flexItem">
                  <img src={Card3} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>OUTPATIENT PROGRAM</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* CASE MANAGEMENT */}

<div class="section3-flexItem">
                  <img src={Card4} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>CASE MANAGEMENT</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/case-management">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/case-management">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* CRISIS INTERVENTION */}

<div class="section3-flexItem">
                  <img src={Card5} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>CRISIS INTERVENTION</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/crisis-intervention">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/crisis-intervention">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* FAMILY THERAPY */}

<div class="section3-flexItem">
                  <img src={Card6} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>FAMILY THERAPY PROGRAM</h1>
                  <div className="hide">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/family-therapy">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>

                  <div className="show">
                    <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                      <Link to="/family-therapy">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



















          </div>
        </div>
      </div>

    </>
  );
};

export default Section3;
