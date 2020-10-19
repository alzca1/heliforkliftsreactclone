import React from "react";
import Button from '../../UI/button/button';
import "./herosection.css"

function herosection() {
  return (
    <section id="heroSection">
      <div className="heroSection container">
        <h1>New forklifts for sale</h1>
        <h3 className="section-title">Lifting the future</h3>
       <Button label="find out more" />
      </div>
    </section>
  );
}

export default herosection;
