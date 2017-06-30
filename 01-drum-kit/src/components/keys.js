import React, { Component } from 'react';
import Key from './key';
import * as Sounds from '../sounds';

const KEYS = [
  {
    label: 'A',
    code: 65,
    soundName: 'clap',
    sound: Sounds.clap
  }, {
    label: 'S',
    code: 83,
    soundName: 'hihat',
    sound: Sounds.hihat
  }, {
    label: 'D',
    code: 68,
    soundName: 'kick',
    sound: Sounds.kick
  }, {
    label: 'F',
    code: 70,
    soundName: 'openhat',
    sound: Sounds.openhat
  }, {
    label: 'G',
    code: 71,
    soundName: 'boom',
    sound: Sounds.boom
  }, {
    label: 'H',
    code: 72,
    soundName: 'ride',
    sound: Sounds.ride
  }, {
    label: 'J',
    code: 74,
    soundName: 'snare',
    sound: Sounds.snare
  },{
    label: 'K',
    code: 75,
    soundName: 'tom',
    sound: Sounds.tom
  }, {
    label: 'L',
    code: 76,
    soundName: 'tink',
    sound: Sounds.tink
  },
]

class Keys extends Component {
  constructor(props) {
    super(props);

    this.childKeys = {}
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const key = this.childKeys[e.keyCode];
      if (key) key.playSound();
    });
  }

  render() {
    const keys = KEYS.map( (key) => {
      return (
        <Key
          key={key.code}
          code={key.code}
          ref={tt => this.childKeys[key.code] = tt}
          sound={key.sound}
          soundName={key.soundName}
        >
          {key.label}
        </Key>
      )
    });

    return (
      <div className='keys'>
        {keys}
      </div>
    )
  }
}

export default Keys;
