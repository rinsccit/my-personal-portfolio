import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [isImagePreparing, setIsImagePreparing] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const contribution =
    project.contribution || project.role || 'Add your contribution or role for this project.'
  const outcome = project.outcome || 'Add the project outcome here.'
  const modalSections = [
    {
      title: 'Project Details',
      content: project.description || 'Add the project details here.',
    },
    {
      title: 'Contribution/Role',
      content: contribution,
    },
    {
      title: 'Outcome',
      content: outcome,
    },
  ]
  const imageSrc =
    project.image &&
    (project.image.startsWith('http')
      ? project.image
      : `${process.env.PUBLIC_URL}/images/${project.image}`)
  const portalTarget =
    typeof document !== 'undefined' ? document.querySelector('.app') || document.body : null

  const isAnyModalOpen = isImageOpen || isDetailsModalOpen

  const handleOpenImage = () => {
    if (!imageSrc || isImagePreparing) return

    setIsImagePreparing(true)

    const preloadedImage = new Image()
    preloadedImage.decoding = 'async'
    preloadedImage.src = imageSrc

    const openModal = () => {
      setIsImageOpen(true)
      setIsImagePreparing(false)
    }

    const preloadAndOpen = async () => {
      try {
        if (typeof preloadedImage.decode === 'function') {
          await preloadedImage.decode()
          openModal()
          return
        }

        await new Promise((resolve, reject) => {
          if (preloadedImage.complete) {
            resolve()
            return
          }

          preloadedImage.onload = () => resolve()
          preloadedImage.onerror = () => reject(new Error('Image load failed'))
        })

        openModal()
      } catch {
        // Fall back to opening even if preload/decode fails.
        setIsImageOpen(true)
        setIsImagePreparing(false)
      }
    }

    preloadAndOpen()
  }

  useEffect(() => {
    if (!isAnyModalOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return

      if (isDetailsModalOpen) {
        setIsDetailsModalOpen(false)
        return
      }

      setIsImageOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isAnyModalOpen, isDetailsModalOpen])

  const renderLightbox =
    isImageOpen && portalTarget
      ? createPortal(
          <div
            className='project__lightbox'
            role='dialog'
            aria-modal='true'
            aria-label={`${project.name} image preview`}
          >
            <button
              type='button'
              className='project__lightbox-close'
              onClick={() => setIsImageOpen(false)}
              aria-label='Close enlarged image'
            >
              x
            </button>
            <div className='project__lightbox-content'>
              <img
                className='project__lightbox-image'
                src={imageSrc}
                alt={`${project.name} screenshot enlarged`}
              />
            </div>
          </div>,
          portalTarget
        )
      : null

  const renderDetailsModal =
    isDetailsModalOpen && portalTarget
      ? createPortal(
          <div
            className='project__details-modal-overlay'
            role='dialog'
            aria-modal='true'
            aria-label={`${project.name} project details`}
          >
            <div className='project__details-modal'>
              <button
                type='button'
                className='project__details-modal-close'
                onClick={() => setIsDetailsModalOpen(false)}
                aria-label='Close project details'
              >
                x
              </button>

              <h3 className='project__details-modal-title'>{project.name}</h3>

              <div className='project__details-modal-scroll'>
                <div className='project__details-modal-content'>
                  {modalSections.map((section) => (
                    <section className='project__details-modal-section' key={section.title}>
                      <h4>{section.title}</h4>
                      <p className='project__details-modal-text'>{section.content}</p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          portalTarget
        )
      : null

  return (
    <div className={`project ${isImageOpen ? 'project--image-open' : ''}`}>
      {project.image && (
        <>
          <button
            type='button'
            className='project__image-button'
            onClick={handleOpenImage}
            disabled={isImagePreparing}
            aria-label={`Expand image for ${project.name}`}
          >
            <img
              className='project__image'
              src={imageSrc}
              alt={`${project.name} screenshot`}
            />
          </button>
          {renderLightbox}
        </>
      )}

      {renderDetailsModal}

      <h3 className='project__title'>{project.name}</h3>

      <button
        type='button'
        className='project__details-button'
        onClick={() => {
          setIsImageOpen(false)
          setIsDetailsModalOpen(true)
        }}
      >
        Project Details
      </button>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {(project.sourceCode || project.livePreview) && (
        <div className='project__links'>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectContainer
