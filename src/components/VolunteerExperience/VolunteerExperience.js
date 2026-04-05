import { useState } from 'react';
import { volunteerExperience } from '../../portfolio';
import ExperienceContainer from '../Experience Container/ExperienceContainer';
import './VolunteerExperience.css';

const VolunteerExperience = () => {
  const [openIndex, setOpenIndex] = useState(-1)

  if (!volunteerExperience.length) return null

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  return (
    <section id='volunteer-experience' className='section volunteer-experience'>
      <h2 className='section__title'>Volunteer Experience</h2>

      <div className='volunteer-experience__accordion'>
        {volunteerExperience.map((item, index) => {
          const volunteerKey =
            item.id ||
            item.company ||
            item.name ||
            `${item.role || 'volunteer-experience'}-${item.years || ''}-${item.location || ''}`

          return (
            <ExperienceContainer
              key={volunteerKey}
              experience={item}
              index={index}
              isOpen={index === openIndex}
              onToggle={() => handleToggle(index)}
              idPrefix='volunteer-experience'
              locationLabel='Place of Volunteer Work'
              detailsLabel='Volunteer Details'
            />
          )
        })}
      </div>
    </section>
  )
}

export default VolunteerExperience
