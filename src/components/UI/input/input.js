import React from "react";
import "./input.css";

const input = (props) => {
  let inputElement = null;

  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          {...props}
          className="commonFieldStyle inputStyle"
          onChange={props.waschanged}
        />
      );
      break;

    case "textArea":
      inputElement = (
        <textarea
          {...props}
          className="commonFieldStyle textAreaStyle"
          rows="13"
          cols="50"
          onChange={props.waschanged}
        />
      );
      break;

    default:
      inputElement = (
        <input
          {...props}
          className="commonFieldStyle inputStyle"
          onChange={props.waschanged}
        />
      );
  }

  return (
    <div>
      <div className="input">{inputElement}</div>
    </div>
  );
};

export default input;
