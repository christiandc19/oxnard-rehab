import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Treatment from '../components/treatment/Treatment'
import Footer from '../components/footer/Footer'
import TreatmentSection from '../components/treatment/TreatmentSection'
import ContactForm from '../components/contact/ContactForm';




const TreatmentPage = () => {
    return (
        <>
           <Navbar /> 
           <Treatment />
           <TreatmentSection />
           <ContactForm />
           <Footer />
        </>
    )
}

export default TreatmentPage
