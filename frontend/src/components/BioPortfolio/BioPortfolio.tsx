import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./BioPortfolio.scss";

type propsTypes = {
  handleTogglePortfolio: () => void;
  expandPortfolio: boolean;
};

function BioPortfolio({ handleTogglePortfolio, expandPortfolio }: propsTypes) {
  return (
    <div
      className={`bio-portfolio ${
        expandPortfolio ? "bio-portfolio--expanded" : ""
      }`}
    >
      <button className="bio-portfolio__button" onClick={handleTogglePortfolio}>
        <span>Show Portfolio</span>
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>

      <ul className="bio-portfolio__list">
        <a
          href="https://www.maze.markfz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li title="Maze">Maze</li>
        </a>
      </ul>
    </div>
  );
}

export default BioPortfolio;
