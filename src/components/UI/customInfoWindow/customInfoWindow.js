import React, { useState } from "react";
import PopOver from "../popover/popOver";
import "./customInfoWindow.css";

function CustomInfoWindow() {
  const [toggledState, setToggleState] = useState(false);

  const handleToggle = () => setToggleState(!toggledState);

  const viewMapURL =
    "https://www.google.com/maps?ll=-38.010837,145.210236&z=14&t=m&hl=en&gl=AU&mapclient=embed&q=25+Zilla+Ct+Dandenong+South+VIC+3175";
  const infoDirectionsURL =
    "https://www.google.com/maps?ll=-38.010837,145.210236&z=14&t=m&hl=en&gl=AU&mapclient=embed&daddr=25+Zilla+Ct+Dandenong+South+VIC+3175@-38.010837,145.210236";

  return (
    <div className="infoWindow">
      {toggledState? <PopOver />: null}
      <div className="infoAddress">
        <h5>25 Zilla Ct</h5>
        <span>25 Zilla CT, Dandenong South VIC</span>
        <span>3175</span>
        <a href={viewMapURL} rel="noopener noreferrer" target="_blank">
          View Larger Map
        </a>
      </div>
      <div className="infoDirections">
        <a
          href={infoDirectionsURL}
          rel="noopener noreferrer"
          target="_blank"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        >
          <i class="fas fa-directions"></i>
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}

export default CustomInfoWindow;
