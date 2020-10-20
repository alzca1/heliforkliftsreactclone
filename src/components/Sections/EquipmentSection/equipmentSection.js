import React from "react";
import "./equipmentSection.css";
import Button from "../../UI/button/button";

export default function equipmentSection() {
  const buttonsText = [
    "lpg dual fuel",
    "diesel",
    "reach trucks",
    "lithium ion electric",
    "3 wheeled electric",
    "4 wheeled electric",
    "electric pallet trucks",
    "pallet stackers",
  ];

  const buttons = buttonsText.map((element) => {
    return <Button label={element} buttonStyle="large-button" />;
  });

  return (
    <section id="equipmentSection">
      <div className="equipmentSection container">
        <h3 className="section-subtitle red">equipment</h3>
        <h2 className="section-title">our forklift range</h2>
        <div className="buttonGroup">{buttons}</div>
      </div>
    </section>
  );
}
