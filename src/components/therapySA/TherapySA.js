import React from "react";
import { Link as LinkRoll } from "react-scroll";

import "./TherapySA.css";
import { Link } from "react-router-dom";

import Alcoholism from '../../assets/alcoholism.webp'
import Cocaine from '../../assets/cocaine_addiction.webp'
import Prescriptions from '../../assets/prescriptions_addiction.webp'

const TherapySA = () => {
  return (
    <>
      <div className="therapy-sa">
        <div className="content container">

          <div className="therapy-sa-header">

            <h2>Break Free from Addiction</h2>
            <h1>Types of Substance Addiction Disorder We Treat</h1>
            <p>Here at Oxnard Rehab, we offer a full array of affordable drug rehab programs that can take addicts from detox to inpatient or outpatient care and back home again.</p>
          </div>
          
        <div className="therapy-sa-flex">

            <div className="sa-card">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/alcohol">
                  <div className="box-content">
                    <img src={Alcoholism} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                    <h1>ALCOHOL ADDICTION</h1>
                  </div>
                </Link>
              </LinkRoll>
            </div>

            <div className="sa-card">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/prescriptions">
                  <div className="box-content">
                    <img src={Prescriptions} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                    <h1>PRESCRIPTIONS ADDICTION</h1>
                  </div>
                </Link>
              </LinkRoll>
            </div>


            <div className="sa-card">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/cocaine">
                  <div className="box-content">
                    <img src={Cocaine} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                    <h1>COCAINE ADDICTION</h1>
                  </div>
                </Link>
              </LinkRoll>
            </div>


            </div>

            <div className="therapy-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/substance-abuse">
                      <div className="therapySA-btn">
                        <button>
                          VIEW ALL
                        </button>
                      </div>
                    </Link>
                  </LinkRoll>
                </div>
          </div>
        </div>
    </>
  );
};

export default TherapySA;
