import React from 'react'
import './HomeSection4.css'

import HomeSection4Image from '../../assets/section4-image-min.jpg'

const HomeSection4 = () => {
  return (
    <>
      <div className='homeSection4 '>
        <div className='homeSection4-content'>

            <div className='homeSection4-left'>
                <h1>WHAT WE DO</h1>
                {/* <h2>Quality Care from Quality Experts.</h2> */}
                <p>At Oxnard Rehab, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). <br /> <br /> You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.
                </p> <br />

                <h1>TREATMENT</h1>
                <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. <br /> <br /> In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.
                </p>
            </div>

            <div className='homeSection4-right'>
                <img src={HomeSection4Image} loading="lazy" alt='psychologist'/>
            </div>


        </div>

      </div>
    </>
  )
}

export default HomeSection4

