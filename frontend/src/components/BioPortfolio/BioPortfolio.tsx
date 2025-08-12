import "./BioPortfolio.scss";

function BioPortfolio({
  handleTogglePortfolio,
}: {
  handleTogglePortfolio: () => void;
}) {
  return (
    <div className="bio-portfolio-container">
      <h3 onClick={handleTogglePortfolio}>Portfolio</h3>
      <ul className="bio-portfolio">
        <a
          href="https://www.maze.markfz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li title="LinkedIn">Maze</li>
        </a>
      </ul>
    </div>
  );
}

export default BioPortfolio;
