import { useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./BioPortfolio.scss";

type propsTypes = {
  handleTogglePortfolio: () => void;
  expandPortfolio: boolean;
};

const PORTFOLIO_ITEMS = [
  {
    name: "Maze",
    description:
      "Explore an interactive version of Christopher Manson's classic maze book, Maze Adventure.",
    link: "https://www.maze.markfz.com/",
  },
];

function BioPortfolio({ handleTogglePortfolio, expandPortfolio }: propsTypes) {
  const portfolioListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (expandPortfolio) {
      setTimeout(() => {
        if (!portfolioListRef.current) {
          return;
        }
        window.scrollTo({
          top: portfolioListRef.current.offsetTop + 100,
          behavior: "smooth",
        });
      }, 150);
    }
  }, [expandPortfolio]);

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
        <span>{expandPortfolio ? "Hide Portfolio" : "Show Portfolio"}</span>
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>

      {/* <hr /> */}

      <ul className="bio-portfolio__list" ref={portfolioListRef}>
        {PORTFOLIO_ITEMS.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BioPortfolio;
