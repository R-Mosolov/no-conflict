import React from "react";

function createQuestion(radioName, question, idsAndLabelNames) {
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

export default createQuestion;
