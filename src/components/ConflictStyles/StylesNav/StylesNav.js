import React, { Component } from "react";
import "./StylesNav.css";

class StylesNav extends Component {
  render() {
    return (
      <nav className="StylesNav">
        <ul>
          <button className="SN">
            <li
              className="SN-Link"
              onClick={() => this.props.updateSection("Collaborating")}
            >
              Collaborating
            </li>
          </button>
          <button className="SN">
            <li
              className="SN-Link"
              onClick={() => this.props.updateSection("Competing")}
            >
              Competing
            </li>
          </button>
          <button className="SN">
            <li
              className="SN-Link"
              onClick={() => this.props.updateSection("Avoiding")}
            >
              Avoiding
            </li>
          </button>
          <button className="SN">
            <li
              className="SN-Link"
              onClick={() => this.props.updateSection("Accommodating")}
            >
              Accommodating
            </li>
          </button>
          <button className="SN">
            <li
              className="SN-Link"
              onClick={() => this.props.updateSection("Compromising")}
            >
              Compromising
            </li>
          </button>
        </ul>
      </nav>
    );
  }
}

export default StylesNav;
