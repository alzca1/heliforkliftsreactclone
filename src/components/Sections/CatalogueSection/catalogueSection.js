import React from "react";
import "./catalogueSection.css";

export default function catalogueSection() {
  const catalogue = [
    {
      src: require("../../../img/catalogue1.png"),
      type: "counterbalance forklifts",
      description:
        "Our counterbalance range meets the demands of various industries and applications:",
      types: [
        "Diesel counterbalance forklift trucks",
        "LPG counterbalance forklift trucks",
        "Heavy counterbalance forklift trucks",
        "Exceptional loading capacity",
      ],
    },

    {
      src: require("../../../img/catalogue2.png"),
      type: "electric forklifts",
      description:
        "We have an extensive range of electric forklifts including lithium Ion:",
      types: [
        "Lithium ion electric forklifts",
        "3-wheel electric counterbalance forklifts",
        "4-wheel electric counterbalance forklifts",
      ],
    },
    {
      src: require("../../../img/catalogue3.jpg"),
      type: "warehouse equipment",
      description: "Our exceptional range of warehouse equipment includes:",
      types: [
        "Reach trucks",
        "Pallet stackers",
        "Tugs and tow trucks",
        "Electric pallet trucks",
      ],
    },
  ];

  return (
    <section id="catalogueSection">
      <div className="catalogueSection container">
        <div>
          <h3 className="section-title">our forklifts</h3>
          {catalogue.map((element) => {
            return (
              <div className="card" key={element.type}>
                <img src={element.src} alt="forklift" />
                <div className="cardText">
                  <h5>{element.type}</h5>
                  <p> {element.description}</p>
                  <ul>
                    {element.types.map((subtype) => {
                      return <li key={subtype}>{subtype}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
