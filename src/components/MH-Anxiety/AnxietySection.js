import React from 'react'
import ContactForm from '../contact/ContactForm'
import { BsCheck } from 'react-icons/bs';

import './AnxietySection.css'

const AnxietySection = () => {
  return (
<>
<div className="anxiety-section-header container">
                <h1>ANXIETY DISORDER</h1><br/>
                <p>As a normal reaction to stress, anxiety generally refers to the worry or fear related to the unknown, the future, or uncertain outcomes of situations.
                An anxiety disorder is more than just the everyday stress that the average person experiences. Anxiety disorders indicate deeper problems, and
                When the symptoms of anxiety begin to affect your ability to function and cope with day-to-day life.
                Those with anxiety disorders look for drugs or alcohol to cope with day-to-day life. This can result in the worsening of symptoms, straining of relationships with others, and the obstruction of performing well at work or school.
                </p>   
</div>

<div className="anxiety-section-header container">
                <h1>SIGNS AND SYMPTOMS OF ANXIETY DISORDER</h1><br/>
                <p>Although there are several individual anxiety disorders, there are some symptoms to look out for that may indicate the presence of one or multiple of these anxiety disorders. 

                <br/> <br />
                <ul>
                <li><BsCheck className='star'/> Panic attacks</li>
                <li><BsCheck className='star'/> Restlessness</li>
                <li><BsCheck className='star'/> Trouble sleeping</li>
                <li><BsCheck className='star'/> Hyperventilation</li>
                <li><BsCheck className='star'/> Constant worry or fear</li>
                <li><BsCheck className='star'/> Interference in work, school, or personal relationships</li>
                <li><BsCheck className='star'/> Avoiding things that trigger anxiety (certain places, things, people, etc.)</li>
                </ul>
                </p>
</div>

<div className="anxiety-section-header container">
                <h1>EFFECTS OF ANXIETY DISORDER</h1><br/>
                <p>The effects of anxiety can be wide-ranging. Those dealing with an anxiety disorder may turn to substances like drugs and alcohol to cope with day-to-day life. This can result in the worsening of symptoms, straining of your personal relationships, and a decrease of  your performance at school or on the job. 
                </p>
</div>

<div className="anxiety-section-header container">
                <h1>ANXIETY DISORDER TREATMENT</h1><br/>
                <p>With a solid plan and medical counseling, anxiety disorders don't have to dictate your quality of life. The right combination of treatment centers can be a great place to start. Common anxiety disorder treatments include:
                <br/> <br />
                <ul>
                <li><BsCheck className='star'/> Psychotherapy</li>
                <li><BsCheck className='star'/> Cognitive treatment</li>
                <li><BsCheck className='star'/> Behavioral therapy</li>
                <li><BsCheck className='star'/> Lifestyle changes</li>
                <li><BsCheck className='star'/> Anti-anxiety medication</li>
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

export default AnxietySection
