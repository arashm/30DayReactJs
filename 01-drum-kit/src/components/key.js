import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false
    }

    this.removeTransition = this.removeTransition.bind(this);
  }

  playSound() {
    this.setState({ playing: true });
    this.sound.currentTime = 0;
    this.sound.play();
  }

  setClass() {
    let classes = 'key'

    if (this.state.playing) classes += ' playing'

    return classes
  }

  removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.setState({ playing: false });
  }

  render() {
    return (
      <div className={this.setClass()} onTransitionEnd={this.removeTransition}>
        <audio src={this.props.sound} ref={sound => this.sound = sound} />
        <kbd>{this.props.children}</kbd>
        <span className="sound">{this.props.soundName}</span>
      </div>
    )
  }
}

export default Key;
