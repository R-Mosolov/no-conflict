import React from "react";

import "../create-question-tk/create-question-tk.css";

function createQuestionForTomasKilmann(radioName, question, idsAndLabelNames) {
    function createAnswers() {
        let arr = [];
        const iterable = new Map(idsAndLabelNames);

        for (let [id, labelName] of iterable) {
            arr.push(
                <div className="mt-1 d-flex border rounded">
                    <div className="answer pt-2 pl-lg-3 pr-lg-3 border custom-input-bg">
                        <div><input type="radio" name={ radioName } id={ id }/></div>
                    </div>

                    <label className="mt-2 pl-lg-3" htmlFor={ id }>{ labelName }</label>
                </div>
            );
        }

        return arr;
    }

    return (
        <div>
            <h6 className="question mt-4 mb-3">{ question }</h6>

            { createAnswers() }
        </div>
    )
}

export default createQuestionForTomasKilmann;
