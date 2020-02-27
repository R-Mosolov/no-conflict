import React from "react";

import CreateQuestion from "../directives/create-question";
import { Link } from "react-router-dom";

function Context() {
    return (
        <div>
            <h1>3. Определение контекста</h1>

            { CreateQuestion(
                'conflict-type','3.1. Где произошёл Ваш конфликт?',
                [['home', 'Дома'], ['work', 'На работе'],
                    ['friends', 'В кругу друзей'], ['hobby', 'В секции (хобби)']]
            ) }

            <Link to="/sections/psychotype">
                <button className="mt-3 btn btn-secondary col-6">Назад</button>
            </Link>
            <Link to="/solution">
                <button className="mt-3 btn btn-success col-6">Далее</button>
            </Link>
        </div>
    );
}

export default Context;
