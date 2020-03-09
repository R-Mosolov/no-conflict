import React from "react";
import { Link } from "react-router-dom";

import Title from "../../components/title";

function Recommendation() {
    return (
        <div>
            <Title titleText="Благодарим за ответы!" />

            <p className="mt-3">Исходя из Ваших ответов, рекомендуем Вам следующее решение конфликтной ситуации.</p>
            <ol>
                <li>Рекомендуемое действие</li>
                <li>Рекомендуемое действие</li>
                <li>Рекомендуемое действие</li>
            </ol>
            <p className="mt-3">Далее Вам будет предложено пройти тест Томаса-Килманна. Он покажет Вам наиболее типичные
                для Вас способы решения конфликтных ситуаций.</p>

            <button
                className="mt-3 btn btn-secondary w-100"
                onClick={() => alert('В настоящее время эта функция находится в процессе разработки. Попробуйте, ' +
                    'пожалуйста, использовать её позднее.')}>Скачать рекомендации по 1-му тесту в PDF</button>
            <br/>
            <Link to="/sections/tomas-kilmann-1">
                <button className="mt-2 btn btn-success w-100">Перейти к тесту Томаса-Килманна</button>
            </Link>
        </div>
    );
}

export default Recommendation;
