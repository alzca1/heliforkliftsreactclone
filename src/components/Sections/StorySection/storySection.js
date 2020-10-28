import React from "react";
import "./storySection.css";
import Button from "../../UI/button/button";
// import {heli_intro, heli_logo} from '../../../images/images'
import heli_intro from '../../../images/heli_intro.png'
import heli_logo from '../../../images/heli_logo.png'

export default function storySection() {
  return (
    <section id="storySection">
      <div className="storySection container">
        <h2 className="section-title">Lifting the future</h2>
        <div className="storyText">
          <h2>Our Story</h2>
          <p>
            Heli Forklifts Victoria is a company consisting of staff with well
            over 100 years of combined experience in the materials handling
            sector. Sam Biondo began in the industry in 1965 as a dedicated
            forklift mechanic through WAT (Caterpillar).
          </p>
          <p>
            In 1978 he ventured out on his own, growing a business from the back
            of a Toyota Corolla station wagon to having a fleet of machines of
            his own. A range which included Forklifts right through to
            Telehandlers as well as a transport fleet to move the machines
            around. Additionally, multiple onsite service vans to keep their
            customers down time to a minimum.
          </p>

          <p>
            In 2018 Biondo rentals recognised the need for a cost competitive
            and well manufactured solution for their long and short-term rental
            fleet. Management rigorously pursued information on the top brands
            from Asia and after an extensive due diligence and commercial
            appraisal decided to import the Heli product.
          </p>
          <p>
            In our initial discussions with Heli, Australian standards were
            always at the top of our list, so all our imported forklifts have
            mast and travel operator presence systems to meet Australian
            requirements.
          </p>
          <p>
            In 2019 the first units were placed in our short-term fleet and
            these units have been put through their paces in many applications
            and have exceeded our expectations. Confident of the product after
            these units performed so well, we are now adding more to our fleet
            and offering the full Heli forklift range for sale and long-term
            rental.
          </p>
          <div className="storyButtons">
            <Button buttonStyle="medium-red-button" label="new forklifts" />
            <Button buttonStyle="medium-white-button" label="used forklifts" />
          </div>
          <div className="storyImages">
           <img src={heli_intro} alt="forklift"/>
           <img src={heli_logo} alt="heli-logo"/>
          </div>
        </div>
      </div>
    </section>
  );
}
