import React from "react";
import { Link } from "react-router-dom";

import Title from "../components/title";
import testDb from "../db";

function Welcome() {
    return (
        <div>
            <Title titleText="Приветствуем Вас!" />

            <p className="mt-3">Данный сервис поможет Вам найти выход из конфликтной ситуации. Для этого Вам нужно
                будет заполнить небольшую анкету, состоящую из 4 блоков. Старайтесь отвечать на вопросы максимально
                быстро, не задумываясь.</p>

            <p className="mt-3">Все полученные результаты являются анонимными. Они будут использоваться
                исключительно в научных целях и только в обобщённом виде. Ответы на вопросы займут около 5-7 минут.</p>

            Обратите внимание:
            <br/>
            – <b className="text-info">под словом «интерес»</b> мы будем подразумевать Ваше действие для исполнения какого-то желания;
            <br/>
            – <b className="text-info">под словом «оппонент»</b> – другую сторону Вашего конфликта. Например, мужа / жену,
                работодателя / подчинённого и т.д.

            {/*<Link to="/Hramova-test/conflict-existence">*/}
                <button
                    className="mt-3 btn btn-success col-12"
                    onClick={ () => testDb() }>
                    Далее
                </button>
            {/*</Link>*/}
        </div>
    );
}

export default Welcome;
