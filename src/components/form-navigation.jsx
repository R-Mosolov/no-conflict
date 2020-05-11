import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormNavigation extends Component {
  render() {
    return (
      <nav className="mt-3" id={this.props.id}>
        <Link to={this.props.backLink}>
          <button className="btn btn-secondary col-lg-6">Назад</button>
        </Link>
        <Link to={this.props.forwardLink}>
          <button
            className="data-down-btn btn btn-success col-lg-6"
            onClick={this.props.onClick}
          >
            Далее
          </button>
        </Link>
      </nav>
    );
  }
}

export default FormNavigation;
