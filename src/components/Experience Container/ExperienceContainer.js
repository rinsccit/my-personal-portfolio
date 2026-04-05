import './ExperienceContainer.css';

const ExperienceContainer = ({
  experience,
  index,
  isOpen,
  onToggle,
  idPrefix = 'experience',
  locationLabel = 'Place of Work',
  detailsLabel = 'Work Details',
}) => {
  const company = experience.company || experience.name || 'Company Name'
  const years = experience.years || experience.duration || 'Years of Experience'
  const location = experience.location || experience.placeOfWork || 'Place of Work'
  let detailItems = ['Add your experience details here']

  if (experience.details && experience.details.length) {
    detailItems = experience.details
  } else if (experience.description) {
    detailItems = [experience.description]
  }

  const buttonId = `${idPrefix}-item-header-${index}`
  const panelId = `${idPrefix}-item-panel-${index}`

  return (
    <article className={`experience-item ${isOpen ? 'is-open' : ''}`}>
      <h3 className='experience-item__title'>
        <button
          type='button'
          className='experience-item__trigger'
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={buttonId}
        >
          <span className='experience-item__company'>{company}</span>
          <span className='experience-item__years'>{years}</span>
          <span className='experience-item__icon' aria-hidden='true'>
            ▾
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role='region'
        aria-labelledby={buttonId}
        className='experience-item__panel'
      >
        <div className='experience-item__panel-inner'>
          {experience.role && (
            <p className='experience-item__role'>
              <strong>Role:</strong> {experience.role}
            </p>
          )}

          <p className='experience-item__location'>
            <strong>{locationLabel}:</strong> {location}
          </p>

          <p><strong>{detailsLabel}:</strong></p>
          <ul className='experience-item__details'>
            {detailItems.map((item) => (
              <li key={`${company}-${item}`} className='experience-item__detail'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceContainer;
