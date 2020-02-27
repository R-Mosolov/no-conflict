import React from "react";
import { Link } from "react-router-dom";

import createQuestion from "../directives/create-question";

function Psychotype() {
    return (
        <div>
            <h1>2. Определение психотипа</h1>

            { createQuestion(
                'conflict-type','2.1. Какой у Вас психотип?',
                [['choleric', 'Холерик'], ['sanguine', 'Сангвиник'],
                    ['phlegmatic', 'Флегматик'], ['melancholic', 'Меланхолик']]
            ) }

            <Link to="/sections/conflict-type">
                <button className="mt-3 btn btn-secondary col-6">Назад</button>
            </Link>
            <Link to="/sections/context">
                <button className="mt-3 btn btn-success col-6">Далее</button>
            </Link>
        </div>
    );
}

export default Psychotype;
