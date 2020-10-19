import React from "react";
import './button.css'
export default function button(props) {
  return (
    <>
      <a className="a-button" href={props.link} type="button">
        {props.label}
      </a>
    </>
  );
}
