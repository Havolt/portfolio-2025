import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines} from '@fortawesome/free-solid-svg-icons'
import cv from '@/assets/cv.pdf'
import './BioLinks.scss'

function BioLinks() {
  return (
    <ul className="bio-links">
        <a href='https://www.linkedin.com/in/mark-fitzpatrick-491419100/' target='_blank' rel='noopener noreferrer'><li title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></li></a>
        <a href='https://github.com/Havolt' target='_blank' rel='noopener noreferrer'><li title="GitHub"><FontAwesomeIcon icon={faGithub} /></li></a>
        <a href='mailto:markfitz815@gmail.com' target='_blank' rel='noopener noreferrer'><li title="Email"><FontAwesomeIcon icon={faEnvelope} /></li></a>
        <a href={cv} target='_blank' rel='noopener noreferrer' className='bio-links__resume'><li title="Resume"><FontAwesomeIcon icon={faFileLines} /></li></a>
    </ul>
  )
}

export default BioLinks