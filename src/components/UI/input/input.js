import React from "react";
import "./input.css";

const input = (props) => {
  let inputElement = null;
  let validationError = null;
  let classes = ["commonFieldStyle"];

  if (props.elementtype === "input") {
    classes.push("inputStyle");
  }
  if (props.elementtype === "textArea") {
    classes.push("textAreaStyle");
  }

  if (!props.isvalid && props.touched) {
    validationError = (
      <small className="validationError">
        {props.elementtype === "input"
          ? `Please, enter a valid ${props.placeholder.toLowerCase()}`
          : "Please, enter a valid message (max. 500 characters)"}
      </small>
    );
    classes.push("invalid-field");
  }

  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          {...props}
          className={classes.join(" ")}
          onChange={props.waschanged}
        />
      );
      break;

    case "textArea":
      inputElement = (
        <textarea
          {...props}
          className={classes.join(" ")}
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
          className={classes.join(" ")}
          onChange={props.waschanged}
        />
      );
  }

  return (
    <div>
      <div className="input">
        {inputElement}
        {validationError}
      </div>
    </div>
  );
};

export default input;
