import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Game from './game';
import {FRAME_WIDTH, FRAME_HEIGHT} from '../constants';

class Win extends React.Component {
  render() {
    return (
      <div className="win"
        style={this.renderStyles()}>
        Congrats
        Press 'S' to play again.
      </div>
    );
  }

  renderStyles() {
    return {
      width: FRAME_WIDTH,
      height: FRAME_HEIGHT,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", (e)=>{
      if (e.code === 'KeyS') {
        this.props.history.push("/game");
      }
    });
  }
}

export default Win;
