import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";



const About = () => {

    return (
            <>
            <div className='about main-menu'>
                    <div className="container">
                        <div className="main-menu-content">
                            <Fade top>
                                <h1>WHO WE ARE</h1>

                                <p>Oxnard Treatment Center lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. Our nursing team is adept at administering medications for gradual tapering. And whenever you feel up to it, you also have the chance to participate in therapy and peer support groups to explore the underlying triggers of addiction and associated mental health disorders. </p>
                            </Fade>
                        </div>
                    </div>
            </div>
                                            {/* aboutUsContainer */}
                                <div className="main-menu-header">
                                <br/>
                                    <h1>ABOUT US</h1>

                                    <Fade top>
                                    <p className="container">
                                    <br/>
                                    Oxnard Rehab Treatment Center helps you taper in a safe, structured environment. We are there for you, through every stage of recovery. No matter where you’re located, you can reach out and get in touch with someone from our staff today. 
                                    </p><br/>
                                    </Fade>
                                </div>



            <ContactForm />
            </>
    )

    }
export default About
