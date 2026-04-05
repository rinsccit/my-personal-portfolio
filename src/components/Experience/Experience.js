import { useState } from 'react';
import { experience } from '../../portfolio';
import ExperienceContainer from '../Experience Container/ExperienceContainer';
import './Experience.css';

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(-1)

  if (!experience.length) return null

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Work Experience</h2>

      <div className='experience__accordion'>
        {experience.map((exp, index) => {
          const experienceKey =
            exp.id ||
            exp.company ||
            exp.name ||
            `${exp.role || 'experience'}-${exp.years || ''}-${exp.location || ''}`

          return (
            <ExperienceContainer
              key={experienceKey}
              experience={exp}
              index={index}
              isOpen={index === openIndex}
              onToggle={() => handleToggle(index)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Experience;