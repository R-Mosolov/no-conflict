import React, { Component } from 'react';

interface Props {
  titleText: string;
}

class Title extends Component<Props> {
  render() {
    return (
      <div>
        <h1 className="mt-3">{this.props.titleText}</h1>
      </div>
    );
  }
}

export default Title;
