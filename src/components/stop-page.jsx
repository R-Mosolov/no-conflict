import React, { Component } from "react";
import { Link } from "react-router-dom";

class StopPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="mt-3">К сожалению, мы не сможем Вам помочь!</h1>
                <p className="mt-3">Пожалуйста, обратитесь к квалифицированному { this.props.specialistInNominative }.</p>

                <a target="_blank" href={ this.props.link }>
                    <button className="mt-3 mr-3 btn btn-success">Найти { this.props.specialistInDative }</button>

                    <Link to="/">
                        <button className="mt-3 btn btn-secondary">Вернуться на главную</button>
                    </Link>
                </a>
            </div>
        );
    }
}

export default StopPage;
