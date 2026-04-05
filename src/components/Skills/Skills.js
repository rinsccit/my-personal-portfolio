import uniqid from 'uniqid'
import { skills, softSkills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length && !softSkills.length) return null

  const hasTechnical = skills.length > 0
  const hasSoft = softSkills.length > 0

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='skills__layout'>
        {hasTechnical ? (
          <div className={`skills__column ${hasSoft ? '' : 'skills__column--full'}`}>
            <h3 className='skills__column-title'>Technical Skills</h3>
            <ul className='skills__list'>
              {skills.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasSoft ? (
          <div
            className={`skills__column skills__column--partition ${hasTechnical ? '' : 'skills__column--full'}`}
          >
            <h3 className='skills__column-title'>Soft Skills</h3>
            <ul className='skills__list'>
              {softSkills.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Skills
