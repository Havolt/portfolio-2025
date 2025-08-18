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
      <button
        className="bio-portfolio__button"
        onClick={handleTogglePortfolio}
        type="button"
      >
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
            Explore an interactive version of Christopher Manson's classic maze
            book, Maze Adventure.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default BioPortfolio;
