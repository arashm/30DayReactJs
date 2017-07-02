import React, { Component } from 'react';

export default class Hand extends Component {
  render() {
    return (
      <div
        className={`hand ${this.props.label}`}
        style={{"transform": `rotate(${this.props.degree}deg)`}}
        ref={hand => this.hand = hand}
      />
    );
  }
}
