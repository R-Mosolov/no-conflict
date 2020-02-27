import React from "react";
import { Link } from "react-router-dom";

import CreateQuestion from "../directives/create-question";

function ConflictType() {
    return (
        <div>
            <h1>1. Тип конфликта</h1>

            { CreateQuestion(
                'conflict-type','1.1. Выберите тип Вашего конфликта',
                [['psychological', 'Психологический'], ['psycho', 'Психический'], ['social', 'Социальный']]
            ) }

            <div className="">
                <Link to="/">
                    <button className="mt-3 btn btn-secondary col-6">Назад</button>
                </Link>
                <Link to="/sections/psychotype">
                    <button className="mt-3 btn btn-success col-6">Далее</button>
                </Link>
            </div>
        </div>
    );
}

export default ConflictType;
