import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from './title';

interface Props {
  specialistInNominative: string;
  link: string;
  specialistInDative: string;
}

class StopPage extends Component<Props> {
  render() {
    return (
      <div>
        <Title titleText="К сожалению, мы не сможем Вам помочь!" />
        <p className="mt-3">
          Пожалуйста, обратитесь к квалифицированному{' '}
          {this.props.specialistInNominative}.
        </p>

        <Link to="/">
          <button className="mt-2 btn btn-secondary col-lg-6">
            Вернуться на главную
          </button>
        </Link>
        <a href={this.props.link}>
          <button className="mt-2 btn btn-success col-lg-6">
            {this.props.specialistInDative}
          </button>
        </a>
      </div>
    );
  }
}

export default StopPage;
