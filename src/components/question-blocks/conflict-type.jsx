import React from "react";

function ConflictType() {
    function createAnswer(id, labelName, radioName) {
        return (
            <div className="input-group mt-1">
                <div className="input-group-prepend">
                    <div className="input-group-text"><input type="radio" name={radioName} id={id} /></div>
                </div>

                <label className="form-control" htmlFor={id}>{labelName}</label>
            </div>
        )
    }

    return (
        <div>
            <h1>1. Тип конфликта</h1>

            <p className="mt-4">1.1. Выберите тип Вашего конфликта</p>
            {createAnswer('psychological', 'Психологический', 'conflict-type')}
            {createAnswer('psycho', 'Психический', 'conflict-type')}
            {createAnswer('social', 'Социальный', 'conflict-type')}

            <button className="mt-3 btn btn-success">Далее</button>
        </div>
    );
}

export default ConflictType;
