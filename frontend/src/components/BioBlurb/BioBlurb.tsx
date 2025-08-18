import "./BioBlurb.css";

export function BioBlurb({ className = "" }) {
  return (
    <div className={`bio-blurb ${className}`}>
      <p>
        Full-stack developer with a passion for crafting modern web experiences.
      </p>
      <p>
        Specialized in React, Vue, and TypeScript, with expertise in ad tech and
        analytics.
      </p>
      <p>Bringing creative solutions to complex technical challenges.</p>
    </div>
  );
}
export default BioBlurb;
