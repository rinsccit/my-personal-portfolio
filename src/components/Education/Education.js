import { useState } from 'react'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  const [openIndex, setOpenIndex] = useState(-1)

  if (!education.length) return null

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__accordion'>
        {education.map((item, index) => {
          const itemKey =
            item.institution ||
            item.university ||
            `${item.program || 'education'}-${item.years || ''}-${item.location || ''}`

          return (
            <article className={`education-item ${openIndex === index ? 'is-open' : ''}`} key={itemKey}>
            <h3 className='education-item__title'>
              <button
                type='button'
                className='education-item__trigger'
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`education-item-panel-${index}`}
                id={`education-item-header-${index}`}
              >
                <span className='education-item__institution'>
                  {item.institution || 'Institution'}
                </span>
                <span className='education-item__years'>
                  {item.years || 'Years'}
                </span>
                <span className='education-item__icon' aria-hidden='true'>
                  ▾
                </span>
              </button>
            </h3>

            <div
              id={`education-item-panel-${index}`}
              role='region'
              aria-labelledby={`education-item-header-${index}`}
              className='education-item__panel'
            >
              <div className='education-item__panel-inner'>
                <p className='education-item__program'>
                  <strong>Program:</strong> {item.program || 'Program Name'}
                </p>
                <p className='education-item__university'>
                  <strong>University:</strong> {item.university || 'University'}
                </p>
                <p className='education-item__location'>
                  <strong>Location:</strong> {item.location || 'Location'}
                </p>

                {item.highlights && item.highlights.length ? (
                  <>
                    <p><strong>Highlights:</strong></p>
                    <ul className='education-item__highlights'>
                      {item.highlights.map((highlight) => (
                        <li
                          key={`${itemKey}-highlight-${highlight}`}
                          className='education-item__highlight'
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Education