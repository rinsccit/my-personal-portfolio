import { useState } from 'react'
import { certifications } from '../../portfolio'
import './Certifications.css'

const Certifications = () => {
  const [openIndex, setOpenIndex] = useState(-1)

  if (!certifications.length) return null

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  return (
    <section id='certifications' className='section certifications'>
      <h2 className='section__title'>Certifications</h2>

      <div className='certifications__accordion'>
        {certifications.map((item, index) => {
          const itemKey =
            item.credentialId ||
            item.credentialLink ||
            `${item.title || 'certification'}-${item.issuer || ''}-${item.issued || ''}`

          return (
            <article
              className={`certification-item ${openIndex === index ? 'is-open' : ''}`}
              key={itemKey}
            >
            <h3 className='certification-item__title'>
              <button
                type='button'
                className='certification-item__trigger'
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`certification-item-panel-${index}`}
                id={`certification-item-header-${index}`}
              >
                <span className='certification-item__name'>
                  {item.title || 'Certification Name'}
                </span>
                <span className='certification-item__issued'>
                  {item.issued || 'Issued Date'}
                </span>
                <span className='certification-item__icon' aria-hidden='true'>
                  ▾
                </span>
              </button>
            </h3>

            <div
              id={`certification-item-panel-${index}`}
              role='region'
              aria-labelledby={`certification-item-header-${index}`}
              className='certification-item__panel'
            >
              <div className='certification-item__panel-inner'>
                <p className='certification-item__issuer'>
                  <strong>Issuer:</strong> {item.issuer || 'Issuing Organization'}
                </p>
                <p className='certification-item__credential-id'>
                  <strong>Credential ID:</strong> {item.credentialId || 'N/A'}
                </p>

                {item.credentialLink ? (
                  <p className='certification-item__link'>
                    <strong>Credential Link:</strong>{' '}
                    <a href={item.credentialLink} target='_blank' rel='noreferrer'>
                      Verify/View credential
                    </a>
                  </p>
                ) : null}

                {item.highlights && item.highlights.length ? (
                  <>
                    <p><strong>Highlights:</strong></p>
                    <ul className='certification-item__highlights'>
                      {item.highlights.map((highlight) => (
                        <li
                          key={`${itemKey}-highlight-${highlight}`}
                          className='certification-item__highlight'
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

export default Certifications
