import { useRef, useEffect, useState, type TransitionEvent } from "react";

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
      "Explore an interactive version of Christopher Manson’s classic maze book, Maze Adventure.",
    link: "https://maze.markfz.com/",
  },
  {
    name: "Durrower",
    description:
      "Discover a randomly generated selection of creepy stories from across Reddit.",
    link: "https://durrower.markfz.com/",
  },
];

function BioPortfolio({ handleTogglePortfolio, expandPortfolio }: propsTypes) {
  const portfolioListRef = useRef<HTMLUListElement>(null);
  const [portfolioListVisible, setPortfolioListVisible] = useState(expandPortfolio);
  const [portfolioListExpanded, setPortfolioListExpanded] = useState(false);

  useEffect(() => {
    if (!expandPortfolio) {
      setPortfolioListExpanded(false);
      return;
    }

    setPortfolioListVisible(true);
    let secondAnimationFrame: number | undefined;
    const firstAnimationFrame = window.requestAnimationFrame(() => {
      secondAnimationFrame = window.requestAnimationFrame(() => {
        setPortfolioListExpanded(true);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstAnimationFrame);
      if (secondAnimationFrame !== undefined) {
        window.cancelAnimationFrame(secondAnimationFrame);
      }
    };
  }, [expandPortfolio]);

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

  const handlePortfolioListTransitionEnd = (
    event: TransitionEvent<HTMLUListElement>,
  ) => {
    if (event.propertyName === "max-height" && !expandPortfolio) {
      setPortfolioListVisible(false);
    }
  };

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

      <ul
        className={`bio-portfolio__list ${
          portfolioListExpanded ? "bio-portfolio__list--expanded" : ""
        }`}
        ref={portfolioListRef}
        onTransitionEnd={handlePortfolioListTransitionEnd}
        style={{ display: portfolioListVisible ? "flex" : "none" }}
        aria-hidden={!portfolioListVisible}
      >
        {PORTFOLIO_ITEMS.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.name} project`}
              tabIndex={expandPortfolio ? 0 : -1}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BioPortfolio;
