import React from "react";
import { Link } from "react-router-dom";

function Psychologist() {
    return (
        <div>
            <h1 className="mt-3">К сожалению, мы не сможем Вам помочь!</h1>
            <p className="mt-3">Пожалуйста, обратитесь к квалифицированному психологу.</p>

            <a target="_blank" href="https://www.google.com/search?q=%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8+%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0">
                <button className="mt-3 mr-3 btn btn-success">Найти психолога</button>

                <Link to="/">
                    <button className="mt-3 btn btn-secondary">Вернуться на главную</button>
                </Link>
            </a>
        </div>
    );
}

export default Psychologist;
