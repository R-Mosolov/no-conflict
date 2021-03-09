import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from '../components/title';

class HramovaContacts extends Component {
  render() {
    return (
      <div>
        <Title titleText="Визитка эксперта" />

        <div className="mt-4 mb-4 p-4 bg-light border rounded">
          <div className="d-lg-flex justify-content-around  align-items-center">
            <img
              className="p-1"
              src="img/kfu-logo.png"
              style={{ width: 120 + 'px', height: 120 + 'px' }}
              alt="Логотип КФУ"
            />
            <p className="p-1">
              <br />
              <b>ХРАМОВА Евгения Валерьевна</b>,
              <br />
              Кандидат политических наук,
              <br />
              Доцент кафедры конфликтологии ИСФН К(П)ФУ,
              <br />
              +7 (903) 388-29-28.
            </p>
          </div>
        </div>

        <Link to="/">
          <button className="mt-2 btn btn-secondary btn-block">
            Вернуться на главную
          </button>
        </Link>
      </div>
    );
  }
}

export default HramovaContacts;
