import React from 'react'
import ContactForm from '../contact/ContactForm'
import { BsCheck } from 'react-icons/bs';

import './DepressionSection.css'

const DepressionSection = () => {
  return (
<>
<div className="depression-section-header container">
                <h1>DEPRESSION</h1><br/>
                <p>A common but serious mood disorder, depression can affect one’s overall behavior, sleep, eating, or ability to perform day-to-day tasks and obligations. There are several types of depression, but the most commonly diagnosed is Major Depressive Disorder (or Clinical Depression).
                Depression can occur in people from all walks of life, including those that suffer from Bipolar Disorder, and during or after pregnancy for females. <br/> <br/>
                It is much more than just feeling sad or having a bad day. Everyone experiences that. According to the CDC.gov, 1 in 6 adults experience depression, but it can happen to any age and any person. Many people with depression also suffer from other medical issues.
                Ranked as the third cause of Major depressive disorder (MDD) is the most severe form of depression. The most severe cases of MDD can result in suicide. 
                There is clinical depression, and then there is Major Depressive Disorder. <br/><br/>
                Symptoms of Major Depressive Disorder include:
                <br/><br/>
                <ul>
                <li><BsCheck className='star'/> Angry outbursts/Irritability</li>
                <li><BsCheck className='star'/> Loss of interest in favorite activities</li>
                <li><BsCheck className='star'/> Fatigue</li>
                <li><BsCheck className='star'/> Anxiety/Agitation/Restlessness</li>
                <li><BsCheck className='star'/> Trouble sleeping</li>
                <li><BsCheck className='star'/> Slowed thinking, speaking, and moving</li>
                <li><BsCheck className='star'/> Trouble concentrating and remembering</li>
                <li><BsCheck className='star'/> Unexplained physical ailments</li>
                <li><BsCheck className='star'/> Suicidal thoughts/Thoughts of death</li>
                <li><BsCheck className='star'/> Feeling worthless, guilt, and/or self-blame</li>
                </ul>
                </p>
</div>

<ContactForm />

    </>
  )
}

export default DepressionSection
