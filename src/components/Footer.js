import React, { Component } from "react";
import AboutContainer from "./AboutContainer";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content-wrapper">
          <div className="footer-content" id="left">
            <a href="https://newsapi.org/" target="_blank">
              {" "}
              powered by NewsAPI.org{" "}
            </a>
          </div>
          <div className="footer-content">
            <AboutContainer />
          </div>
          <div id="right" className="footer-content">
            <p>Copyright © 2018 all rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
