import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/WhatWeDo';
// import ContactForm from '../contact/ContactForm';
// import Cards2 from '../servicesCards/ServicesCards';
// import COVID from '../covidCompliance/Covid'
import HomeSection1 from '../homeSection1/HomeSection1';
import HomeSection2 from '../homeSection2/HomeSection2';
import HomeSection3 from '../homeSection3/HomeSection3';
import HomeSection4 from '../homeSection4/HomeSection4';
import HomeSection5 from '../homeSection5/HomeSection5';


const home = () => {
  return (
    <>
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
    <InsuranceSection />

    {/* <Cards2 />
    <WhatWeDo />
    <ContactForm />
    <COVID /> */}
    </>
  )
}

export default home
