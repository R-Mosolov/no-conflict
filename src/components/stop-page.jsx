import React, { Component } from "react";
import { Link } from "react-router-dom";

class StopPage extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-3">К сожалению, мы не сможем Вам помочь!</h1>
                <p className="mt-3">Пожалуйста, обратитесь к квалифицированному { this.props.specialistInNominative }.</p>

                <Link to="/">
                    <button className="mt-2 btn btn-secondary col-6">Вернуться на главную</button>
                </Link>
                <a target="_blank" href={ this.props.link }>
                    <button className="mt-2 btn btn-success col-6">Найти { this.props.specialistInDative }</button>
                </a>
            </div>
        );
    }
}

export default StopPage;
