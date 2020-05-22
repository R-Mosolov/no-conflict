import React, { Component } from "react";
import { Link } from "react-router-dom";

class SectionNavigation extends Component {
  render() {
    return (
      <nav className="section-navigation mt-3" id={this.props.id}>
        <Link to={this.props.backLink}>
          <button className="btn btn-secondary col-lg-6">Назад</button>
        </Link>
        <Link to={this.props.forwardLink}>
          <button
            className="data-down-btn btn btn-success forward-btn col-lg-6"
            onClick={this.props.onClick}
          >
            Далее
          </button>
        </Link>
      </nav>
    );
  }
}

export default SectionNavigation;
