import React from 'react'
import ContactForm from '../contact/ContactForm'

import './AngerDisorderSection.css'

import { BsCheck } from 'react-icons/bs';


const AngerDisorderSection = () => {
  return (
<>
<div className="AngerDisorder-section-header container">
                <h1>INTERMITTENT EXPLOSIVE DISORDER</h1><br/>
                <p>Most common in people under 35, Intermittent Explosive Disorder (IED), is a chronic mental health disorder characterized by impulsive, violent, and aggressive behavior, often culminating in verbal and physical outbursts of rage. A few of the most common examples of IED ‘attacks’ or ‘spells’ can include:
                <br/><br/>
                <ul>
                <li><BsCheck className='star'/> Road rage </li>
                <li><BsCheck className='star'/> Verbal outburst</li>
                <li><BsCheck className='star'/> Domestic abuse</li>
                <li><BsCheck className='star'/> Throwing/breaking objects</li>
                <li><BsCheck className='star'/> Physical violence </li>
                <li><BsCheck className='star'/> Fits of rage</li>
                <li><BsCheck className='star'/> Self-injury</li>
                </ul><br/>
                The most significant factor which can determine Intermittent Explosive Disorder is that the reaction exceeds the circumstances, and should be disproportionate to the appropriate amount of anger. <br/><br/>
                The behavior pattern can be not only detrimental to your life and goals but also to the safety of those around you. Relationships can be strained and school or work performance is affected as well.
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

export default AngerDisorderSection
