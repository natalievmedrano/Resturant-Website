import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>
    <div className="aboutus">
      <h1 className="headtext__cormorant">About Us</h1>
      <img src={images.spoon} alt="spoon" className="spoonimage" />
      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button type="button" className="custom__button">Know More</button>
    </div>
    <div className="knifeimg">
      <img src={images.knife} alt="knife" />
    </div>
    <div className="history">
      <h1 className="headtext__cormorant">Our History</h1>
      <img src={images.spoon} alt="spoon" className="spoonimage" />
      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button type="button" className="custom__button">Know More</button>
    </div>
  </div>
);

export default AboutUs;
