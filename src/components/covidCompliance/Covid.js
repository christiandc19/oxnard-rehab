import React from 'react'

import './Covid.css'

import CovidImg from '../../assets/covid.png'

const covid = () => {
  return (
    <>
      <div className='covid-container container'>
        <div className='covid-content'>

            <div className='covidImgContainer'>
                <img src={CovidImg} alt='covid 19 virus ' />
            </div>

            <div className='covid-description'>
                <h1>Palm Springs Rehab Treatment Center is Covid 19 Compliant</h1>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default covid
