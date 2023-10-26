import React from 'react'
import './HomeSection2.css'
import { BsCheckLg } from 'react-icons/bs';

import HomeSection2Image from '../../assets/section2-image-min.jpg'

const HomeSection2 = () => {
  return (
    <>
      <div className='homeSection2 '>
        <div className='homeSection2-content'>
            <div className='homeSection2-left'>
            <img src={HomeSection2Image} loading="lazy" alt='psychologist'/>
            </div>

            <div className='homeSection2-right'>
                <h1>ABOUT OXNARD REHAB</h1>
                <h2>Quality Care from Quality Experts.</h2>
                <p>At Oxnard Rehab, we provide safe and comfortable medical detox services for those struggling with addiction.</p> <br /> <br />
                             
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>A comprehensive medical assessment by a doctor to create an        individualized treatment plan.</p>
                    </div>
                </div>    
                <br />
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Urine tests and other lab tests.</p>
                    </div>
                </div>     
                <br />
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.</p>
                    </div>
                </div>                       

                   
            </div>

        </div>

      </div>
    </>
  )
}

export default HomeSection2

