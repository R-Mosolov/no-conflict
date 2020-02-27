import React from "react";

function ConflictType() {
    function createQuestionAndAnswers(radioName, question, idsAndLabelNames) {
        function createAnswers() {
            let arr = [];
            const iterable = new Map(idsAndLabelNames);

            for (let [id, labelName] of iterable) {
                arr.push(
                    <div className="input-group mt-1">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><input type="radio" name={ radioName } id={ id }/></div>
                        </div>

                        <label className="form-control" htmlFor={ id }>{ labelName }</label>
                    </div>
                );
            }

            return arr;
        }

        return (
            <div>
                <p className="mt-4">{ question }</p>

                { createAnswers() }
            </div>
        )
    }

    return (
        <div>
            <h1>1. Тип конфликта</h1>

            { createQuestionAndAnswers(
                'conflict-type','1.1. Выберите тип Вашего конфликта',
                [['psychological', 'Психологический'], ['psycho', 'Психический'], ['social', 'Социальный']]
            ) }

            <button className="mt-3 btn btn-success">Далее</button>
        </div>
    );
}

export default ConflictType;
