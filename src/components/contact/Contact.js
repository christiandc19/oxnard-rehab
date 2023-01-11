import React from "react";
import Fade from 'react-reveal/Fade';

import './Contact.css';
import ContactForm from "./ContactForm";


const Contact = () => {

    return (
      <>

<div className='contact-hero'>
       <div className="container">
            <div className="content">
            <Fade top>
                    <h1>Have Some Questions?</h1>
            </Fade>
            </div>
     </div>
</div>

      <ContactForm />

      </>
    )
}



export default Contact