import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormNavigation extends Component {
    render() {
        return (
            <div className="navigation" id="navigation">
                <Link to={ this.props.backLink }>
                    <button className="mt-3 btn btn-secondary col-6">Назад</button>
                </Link>
                <Link to={ this.props.forwardLink }>
                    <button className="mt-3 btn btn-success col-6" onClick={ this.props.onClick }>Далее</button>
                </Link>
            </div>
        );
    }
}

export default FormNavigation;
