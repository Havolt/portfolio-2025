import { useState } from "react";
import BioLinks from "@/components/BioLinks/BioLinks";
import BioBlurb from "@/components/BioBlurb/BioBlurb";
import BioImage from "@/components/BioImage/BioImage";
import BioPortfolio from "@/components/BioPortfolio/BioPortfolio";
import "./Bio.scss";

export default function Bio() {
  const [hideBlurb, setHideBlurb] = useState(false);
  const [expandPortfolio, setExpandPortfolio] = useState(false);

  const togglePortfolio = () => {
    const swapTime = 400;
    console.log("Toggling portfolio");
    if (!expandPortfolio) {
      setHideBlurb(true);
      setTimeout(() => {
        setExpandPortfolio(!expandPortfolio);
      }, swapTime);
    } else {
      setExpandPortfolio(!expandPortfolio);
      setTimeout(() => {
        setHideBlurb(false);
      }, swapTime);
    }
    // setExpandPortfolio(!expandPortfolio);
  };

  return (
    <div className="bio">
      <BioImage expandPortfolio={expandPortfolio} />
      <h1 className="bio__title">Hi, I'm Mark</h1>
      <BioBlurb className={`${hideBlurb ? "hide" : ""}`} />
      <BioPortfolio
        handleTogglePortfolio={togglePortfolio}
        expandPortfolio={expandPortfolio}
      />
      <BioLinks />
    </div>
  );
}
