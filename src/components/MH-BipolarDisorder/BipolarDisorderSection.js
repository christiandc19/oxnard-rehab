import React from 'react'
import ContactForm from '../contact/ContactForm'
import { BsCheck } from 'react-icons/bs';

import './BipolarDisorderSection.css'

const BipolarDisorder = () => {
  return (
<>
<div className="BipolarDisorder-section-header container">
                <h1>BIPOLAR DISORDER</h1><br/>
                <p>Also known as manic depression, bipolar disorder is a mental health condition in which one suffers extreme mood swings (mania/hypomania to lows/depression). Episodes of mania may create feelings of euphoria, energy, or irritability.<br/> <br/>
                Episodes of bipolar depression can include symptoms of:<br/><br/>
                <ul>
                <li><BsCheck className='star'/> Sadness</li>
                <li><BsCheck className='star'/> Hopelessness</li>
                <li><BsCheck className='star'/> Loss of pleasure/interest in activities</li>
                <li><BsCheck className='star'/> Mood swings</li>
                </ul><br/>
                <p>                Although these mood swings aren’t frequent, they can cause changes to energy levels, sleep, judgment, decision-making, and overall behavior.<br/><br/>
</p>
                <ul>
                <li><BsCheck className='star'/> Stress</li>
                <li><BsCheck className='star'/> Drug use</li>
                <li><BsCheck className='star'/> Alcohol abuse</li>
                <li><BsCheck className='star'/> Irregular sleep patterns</li>
                </ul>
                </p>
</div>

<div className="contact2-header contact2-container">
        <h1>DO YOU NEED URGENT HELP?</h1>
        <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week.</p>
    </div>

<ContactForm />

    </>
  )
}

export default BipolarDisorder
