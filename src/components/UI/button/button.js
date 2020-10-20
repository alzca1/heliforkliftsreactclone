import React from "react";
import "./button.css";
export default function button(props) {
  const STYLES = ["red-button", "white-button", "medium-red-button", "medium-white-button", "large-button"];
 

  const checkStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : "default-button";
  return (
    <>
      <a className={`default-button ${checkStyle}`} href={props.link} type="button">
        {props.label}
      </a>
    </>
  );
}
