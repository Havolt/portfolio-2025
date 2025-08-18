import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import cv from "@/assets/cv.pdf";
import "./BioLinks.scss";

function BioLinks() {
  return (
    <div className="bio-links-container">
      <ul className="bio-links">
        <li title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/mark-fitzpatrick-491419100/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li title="GitHub">
          <a
            href="https://github.com/Havolt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li title="Email">
          <a
            href="mailto:markfitz815@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li title="Resume">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="bio-links__resume"
          >
            <FontAwesomeIcon icon={faFileLines} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BioLinks;
