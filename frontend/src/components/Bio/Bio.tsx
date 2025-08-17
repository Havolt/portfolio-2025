import { useEffect, useRef, useState, useCallback } from "react";
import BioLinks from "@/components/BioLinks/BioLinks";
import BioBlurb from "@/components/BioBlurb/BioBlurb";
import BioPortfolio from "@/components/BioPortfolio/BioPortfolio";
import bioPng from "@/assets/bio.png";
import bioWebp from "@/assets/bio.webp";
import "./Bio.scss";

export default function Bio() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasBeenFlipped, setHasBeenFlipped] = useState(false);
  const [expandPortfolio, setExpandPortfolio] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();

      const inverted = isFlipped ? -1 : 1;

      // Only apply effect when mouse is over the image (with small buffer)
      const buffer = 20;
      const isInRange =
        e.clientX >= left - buffer &&
        e.clientX <= left + width + buffer &&
        e.clientY >= top - buffer &&
        e.clientY <= top + height + buffer;

      if (!isInRange) {
        imageRef.current.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        return;
      }

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Reduced rotation amount for subtler effect
      const rotateX = -(e.clientY - centerY) / 15;
      const rotateY = (e.clientX - centerX) / 15;

      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${
        rotateY * inverted
      }deg)`;
    },
    [isFlipped]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove]);

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const handleFlip = () => {
    const element = containerRef.current;
    if (element) {
      element.style.animation = "none";
      // Force reflow
      void element.offsetHeight;
      element.style.animation = "";
      setIsFlipped(!isFlipped);
      setHasBeenFlipped(true);
    }
    clearImageTransform();
  };

  // Clear the image transform when the container is flipped
  const clearImageTransform = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const bioContainerClasses = () => {
    if (isFlipped) {
      return "bio__container--flipped";
    } else if (hasBeenFlipped) {
      return "bio__container--unflipped";
    }
    return "";
  };

  const togglePortfolio = () => {
    console.log("Toggling portfolio");
    setExpandPortfolio(!expandPortfolio);
  };

  const skillList = [
    "React",
    "Vue",
    "JavaScript",
    "TypeScript",
    "SCSS",
    "HTML",
    "Python",
    "Jest",
    "SQL",
    "Git",
    "Docker",
    "CI/CD",
    "Agile",
    "Scrum",
    "Leadership",
    "Debugging",
    "Teamwork",
    "Adaptability",
  ];

  return (
    <div className="bio">
      <div
        ref={containerRef}
        className={`bio__container ${bioContainerClasses()}`}
      >
        <div ref={imageRef} className="bio__card">
          <div className="bio__img" onClick={handleFlip}>
            <picture>
              <source srcSet={bioWebp} type="image/webp" />
              <img src={bioPng} alt="Mark Fitzpatrick - Full Stack Developer" />
            </picture>
          </div>
          <div className="bio__reverse" onClick={handleFlip}>
            <h2>Skills</h2>
            <div className="bio__skills">
              {skillList.map((skill, index) => (
                <p key={index} className="bio__skill">
                  - {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="bio__title">Hi, I'm Mark.</h1>
      <BioBlurb className={`${expandPortfolio ? "hide" : ""}`} />
      <BioPortfolio
        handleTogglePortfolio={togglePortfolio}
        expandPortfolio={expandPortfolio}
      />
      <BioLinks />
    </div>
  );
}
