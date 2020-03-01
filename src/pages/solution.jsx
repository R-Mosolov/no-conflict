import React from "react";
import { Link } from "react-router-dom";

import Title from "../components/title";

function Solution() {
    return (
        <div>
            <Title titleText="Благодарим за ответы!" />

            <p className="mt-3">Исходя из Ваших ответов, рекомендуем Вам следующее решение конфликтной ситуации.</p>
            <ol>
                <li>Рекомендуемое действие</li>
                <li>Рекомендуемое действие</li>
                <li>Рекомендуемое действие</li>
            </ol>

            <button
                className="mt-3 btn btn-success w-100"
                onClick={() => alert('В настоящее время эта функция находится в процессе разработки. Попробуйте, ' +
                    'пожалуйста, использовать её позднее.')}>Скачать рекомендацию в PDF для печати</button>
            <br/>
            <Link to="/">
                <button className="mt-2 btn btn-secondary w-100">Вернуться на главную</button>
            </Link>
        </div>
    );
}

export default Solution;
