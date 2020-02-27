import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div>
            <h1 className="mt-3">Приветствуем Вас!</h1>

            <p className="mt-3">Данный сервис поможет Вам найти выход из конфликтной ситуации. Для этого Вам нужно
                будет заполнить небольшую анкету, состоящую из 4 блоков. Старайтесь отвечать на вопросы максимально
                быстро, не задумываясь.</p>

            <p className="mt-3">Все полученные результаты являются анонимными. Они будут использоваться
                исключительно в научных целях и только в обобщённом виде. Ответы на вопросы займут около 5-7 минут.</p>

            <Link to="/sections/conflict-type">
                <button className="mt-2 btn btn-success col-12">Далее</button>
            </Link>
        </div>
    );
}

export default Welcome;
