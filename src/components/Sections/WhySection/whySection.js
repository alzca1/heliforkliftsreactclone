import React from "react";
import "./whySection.css";
import Button from '../../UI/button/button'

function whySection() {
  return (
    <section id="whySection">
      <div className="whySection container">
        <div className="whyText">

        
        <h3 className="section-title">Why heli forklifts?</h3>
        <p>
          Heli Forklifts in Melbourne specialise in forklift sales and rental.
          We supply internationally-recognised materials handling equipment that
          exceeds expectations in durability, reliability and
          safety.Customer-satisfaction is always our priority.
        </p>
        <p>
          We offer quality forklifts for a wide range of purposes, including LPG
          dual fuel forklifts, diesel forklifts, electric forklifts and reach
          trucks, warehouse equipment and rough terrain forklifts for sale. All
          of our machines satisfy OHS requirements and meet Australian
          standards. Heli forklifts are sold with a 12 months parts and labour
          warranty.
        </p>
        <p>
          Talk to our team for all your forklift purchase and rental
          requirements. We provide competitive pricing and expert advice, to
          ensure you make the right choice for your budget and job requirements.
        </p>
        </div>
        <div>
          <Button buttonStyle="red-button" label="contact us" />
        </div>
      </div>
    </section>
  );
}

export default whySection;
