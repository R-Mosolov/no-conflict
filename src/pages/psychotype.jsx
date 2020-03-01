import React from "react";

import Title from "../components/title";
import FormNavigation from "../components/form-navigation";

import createQuestion from "../directives/create-question";

function Psychotype() {
    return (
        <div>
            <Title titleText="2. Определение психотипа" />

            { createQuestion(
                'conflict-type','2.1. Какой у Вас психотип?',
                [['choleric', 'Холерик'], ['sanguine', 'Сангвиник'],
                    ['phlegmatic', 'Флегматик'], ['melancholic', 'Меланхолик']]) }

            <FormNavigation
                backLink="/sections/conflict-type"
                forwardLink="/sections/context" />
        </div>
    );
}

export default Psychotype;
