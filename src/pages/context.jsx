import React from "react";

import Title from "../components/title";
import FormNavigation from "../components/form-navigation";

import createQuestion from "../directives/create-question";

function Context() {
    return (
        <div>
            <Title titleText="3. Определение контекста" />

            { createQuestion(
                'conflict-type','3.1. Где произошёл Ваш конфликт?',
                [['home', 'Дома'], ['work', 'На работе'],
                    ['friends', 'В кругу друзей'], ['hobby', 'В секции (хобби)']]) }

            <FormNavigation
                backLink="/sections/psychotype"
                forwardLink="/solution" />
        </div>
    );
}

export default Context;
