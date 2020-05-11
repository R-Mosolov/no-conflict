import React from "react";
import { Link } from "react-router-dom";

import Title from "../../../../components/title";

function Recommendation() {
  return (
    <div>
      <Title titleText="Благодарим за ответы!" />

      <p className="mt-3">
        Исходя из Ваших ответов, рекомендуем Вам следующее решение конфликтной
        ситуации:
      </p>
      <p className="p-5 bg-light border rounded">
        <i>"{localStorage.getItem("recommendation-text")}"</i>
      </p>
      <p className="mt-3">
        Далее Вам будет предложено пройти тест Томаса-Килманна. Он покажет Вам
        наиболее типичные для Вас способы решения конфликтных ситуаций.
      </p>

      <Link to="/Hramova-test/conflict-reason-and-place">
        <button className="mt-2 btn btn-secondary w-100">
          Вернуться назад
        </button>
      </Link>
      <br />
      <Link to="/Tomas-Kilmann-test/section-1">
        <button className="mt-2 btn btn-success w-100">
          Перейти к тесту Томаса-Килманна
        </button>
      </Link>
    </div>
  );
}

export default Recommendation;
