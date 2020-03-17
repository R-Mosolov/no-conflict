import React from "react";
import { Link } from "react-router-dom";

import Title from "../../../components/title";
import renderConflictStrategy from "./conflict-strategy";

function RecommendationForTomasKilmann() {
    return (
        <div>
            <Title titleText="Благодарим за ответы!" />

            <p className="mt-3">Исходя из Ваших ответов, наиболее типичные для Вас способы решения конфликтов:</p>
            <div className="pt-3 pb-3 bg-light border rounded" onClick={ () => renderConflictStrategy() }>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <p>Кликните здесь, чтобы загрузить результат...</p>
                </div>
                <canvas id="conflict-strategy" />
            </div>

            <Link to="/sections/tomas-kilmann-3">
            <button className="mt-3 btn btn-secondary w-100">Вернуться назад</button>
            </Link>
            <br/>
            <Link to="/">
                <button className="mt-2 btn btn-success w-100">На главную</button>
            </Link>
        </div>
    );
}

export default RecommendationForTomasKilmann;
