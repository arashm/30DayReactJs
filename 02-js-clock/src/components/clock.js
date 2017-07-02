import React, { Component } from 'react';
import Hand from './hand';

export default class Clock  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoursDegrees: this.getHours(),
      minutesDegrees: this.getMinutes(),
      secondsDegrees: this.getSeconds()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        hoursDegrees: this.getHours(),
        minutesDegrees: this.getMinutes(),
        secondsDegrees: this.getSeconds()
      });
    }, 1000);
  }

  getSeconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    return secondsDegrees;
  }

  getMinutes() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    return minutesDegrees;
  }

  getHours() {
    const now = new Date();
    const hours = now.getHours();
    // convert 24-hours format 12-hours format
    const hours12 = hours < 12 ? hours : hours - 12;
    // Scale it to 60
    const hours60 = (hours12 / 12) * 60;
    const hoursDegrees = ((hours60 / 24) * 360) + 90;
    return hoursDegrees;
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock-face'>
          <Hand label='hours' degree={this.state.hoursDegrees} />
          <Hand label='minutes' degree={this.state.minutesDegrees} />
          <Hand label='seconds' degree={this.state.secondsDegrees} />
        </div>
      </div>
    );
  }
}
