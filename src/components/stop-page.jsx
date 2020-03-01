import React, { Component } from "react";
import { Link } from "react-router-dom";

import Title from "./title";

class StopPage extends Component {
    render() {
        return (
            <div>
                <Title titleText="К сожалению, мы не сможем Вам помочь!" />
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
