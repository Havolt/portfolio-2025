import { useState } from "react";
import BioLinks from "@/components/BioLinks/BioLinks";
import BioBlurb from "@/components/BioBlurb/BioBlurb";
import BioImage from "@/components/BioImage/BioImage";
import BioPortfolio from "@/components/BioPortfolio/BioPortfolio";
import "./Bio.scss";

export default function Bio() {
  const [expandPortfolio, setExpandPortfolio] = useState(false);

  const togglePortfolio = () => {
    console.log("Toggling portfolio");
    setExpandPortfolio(!expandPortfolio);
  };

  return (
    <div className="bio">
      <BioImage />
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
