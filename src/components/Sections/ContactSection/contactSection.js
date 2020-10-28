import React from "react";
import "./contactSection.css";
import Map from "../../UI/map/map";

export default function contactSection() {
  return (
    <section id="contactSection">
      <div className="contactSection container">
        <h3 className="section-subtitle red">contact us</h3>
        <div className="cardGroup">
          <div className="sectionCard">
            <i className="fas fa-map-marker-alt"></i>
            <h5>our address</h5>
            <span className="card-info">25 Zilla Crt,</span>
            <span className="card-info">Dandenong South VIC 3175</span>
          </div>

          <div className="sectionCard">
            <i className="fas fa-phone-volume"></i>
            <h5>phone us</h5>
            <a href="tel:1800644655">1 800 644 655</a>
          </div>
          <div className="sectionCard">
            <i className="far fa-envelope"></i>
            <h5>email us</h5>
            <a href="#heroSection">Send us a Message</a>
          </div>
          <div className="sectionCard">
            <i className="far fa-clock"></i>
            <h5>trading hours</h5>
            <span className="card-info">Mon-Fri</span>
            <span className="card-info">7:00am - 4:30pm</span>
          </div>
        </div>
      </div>
        <Map />
    </section>
  );
}
