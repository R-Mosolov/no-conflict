import React, { Component } from "react";
import { Link } from "react-router-dom";

import Title from "../../components/title";

class ChramovaContacts extends Component {
    render() {
        return (
            <div>
                <Title titleText="Визитка Е.В. Храмовой" />

                <div className="mt-4 mb-3 p-5 bg-light border rounded">
                    <div className="d-flex justify-content-around align-items-center">
                        <img src="img/kfu-logo.png" style={{ width: 120 + "px", height: 120 + "px" }} />
                        <p>
                            <br/><b>ХРАМОВА Евгения Валерьевна</b>,
                            <br/>Кандидат политических наук,
                            <br/>Доцент кафедры конфликтологии ИСФН К(П)ФУ,
                            <br/>+7 (903) 388-29-28.
                        </p>
                    </div>
                </div>

                <Link to="/">
                    <button className="mt-2 btn btn-secondary btn-block">Вернуться на главную</button>
                </Link>
            </div>
        );
    }
}

export default ChramovaContacts;
