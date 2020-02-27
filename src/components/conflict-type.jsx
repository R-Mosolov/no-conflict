import React from "react";
import { Link } from "react-router-dom";

import createQuestion from "../directives/create-question";
import redirect from "../directives/redirect";

function ConflictType() {
    return (
        <div>
            <h1>1. Тип конфликта</h1>

            { createQuestion(
                'conflict-type','1.1. Выберите тип Вашего конфликта',
                [['psychological', 'Психологический'], ['psycho', 'Психический'], ['social', 'Социальный']]
            ) }

            <div className="navigation" id="navigation">
                <Link to="/">
                    <button className="mt-3 btn btn-secondary col-6">Назад</button>
                </Link>
                <Link to="/sections/psychotype">
                    <button className="mt-3 btn btn-success col-6" onClick={ redirect }>Далее</button>
                </Link>
            </div>
        </div>
    );
}

export default ConflictType;
