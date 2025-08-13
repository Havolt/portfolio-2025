import BioLinks from "@/components/BioLinks/BioLinks";
import BioBlurb from "@/components/BioBlurb/BioBlurb";
import BioImage from "@/components/BioImage/BioImage";
import "./Bio.scss";

export default function Bio() {
  return (
    <div className="bio">
      <BioImage />
      <h1 className="bio__title">Hi, I'm Mark.</h1>
      <BioBlurb />
      <BioLinks />
    </div>
  );
}
