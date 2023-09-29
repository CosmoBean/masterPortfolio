import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    // remove props.isVisible if you want to show it by default in every page
    <>
      {props.isVisible && (
        <div className="footer-div">
          <Fade>
            <p
              className="footer-text"
              style={{ color: props.theme.secondaryText }}
            >
              Made with <span role="img">❤️</span> by {greeting?.title}
            </p>
            {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
          </Fade>
        </div>
      )}
    </>
  );
}
