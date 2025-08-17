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
        <span>{expandPortfolio ? "Intro" : "Portfolio"}</span>
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>

      {/* <hr /> */}

      <ul className="bio-portfolio__list">
        <li>
          <a
            href="https://www.maze.markfz.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maze
          </a>
          <p>
            Interative recreation of the the maze adventure book by Christopher
            Manson.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default BioPortfolio;
