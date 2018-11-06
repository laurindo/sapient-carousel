import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
      </header>
    );
  }
}
