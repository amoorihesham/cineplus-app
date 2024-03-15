import { HIWBox, Sectionheading } from "../../components";
import {
  faCalendar,
  faCar,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const HIWSection = () => {
  return (
    <section className="how-it-work">
      <Sectionheading
        heading="How It"
        highlight="Works"
        text="Rent With Following 3 Working Steps"
      />
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <HIWBox
              boxColor="paleBlue"
              icon={faLocation}
              title="Choose Location"
              text="Choose your location and find your best car."
            />
          </div>
          <div className="col d-flex justify-content-center">
            <HIWBox
              boxColor="mainBlue"
              iconColor="default"
              scale={true}
              icon={faCalendar}
              title="Pick Up Date"
              text="Select your pick up date and time to book your car"
            />
          </div>
          <div className="col d-flex justify-content-center">
            <HIWBox
              boxColor="paleBlue"
              icon={faCar}
              title="Book Your Car"
              text="Book your car and we will deliver it directly to you"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HIWSection;
