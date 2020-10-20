import React from "react";
import Button from '../../UI/button/button';
import "./herosection.css"

function heroSection() {
  return (
    <section id="heroSection">
      <div className="heroSection container">
        <h1>New forklifts for sale</h1>
        <h3 className="section-title red">Lifting the future</h3>
       <Button buttonStyle="red-button" label="find out more" />
      </div>
    </section>
  );
}

export default heroSection;
