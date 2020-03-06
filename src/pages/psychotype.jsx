import React from "react";

import Title from "../components/title";
import FormNavigation from "../components/form-navigation";

import createQuestion from "../directives/create-question";
import checkAnswers from "../directives/check-answers";

function Psychotype() {
    return (
        <div>
            <Title titleText="3. Определение психотипа" />

            { createQuestion(
                'conflict-type','Какой у Вас психотип?',
                [['choleric', 'Холерик'], ['sanguine', 'Сангвиник'],
                    ['phlegmatic', 'Флегматик'], ['melancholic', 'Меланхолик']]) }

            <FormNavigation
                backLink="/sections/conflict-type"
                forwardLink="/solution"
                onClick={ () => checkAnswers(['choleric', 'sanguine', 'phlegmatic', 'melancholic'], 'navigation-psychotype') }/>
        </div>
    );
}

export default Psychotype;
