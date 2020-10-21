import React from "react";
import Button from '../../UI/button/button'
import "./questionSection.css"

export default function questionSection() {
  return (
    <section id="questionSection">
      <div className="questionSection">
        <div className="questionText">
          <h3>Have a question?</h3>
          <span>Speak to a Heli expert today</span>
          <Button buttonStyle="red-button" label="contact us" />
        </div>
      </div>
    </section>
  );
}
