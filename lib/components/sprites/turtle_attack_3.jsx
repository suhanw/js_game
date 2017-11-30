import React from 'react';
import SpriteAnimator from 'react-sprite-animator';

class TurtleAttack3 extends React.Component {
  constructor(props) {
    super(props);

    const {turtleName} = this.props;
    if (turtleName === 'mikey') {
      this.width = 120;
      this.height = 108;
      this.frameCount = 6;
    } else if (turtleName === 'leo') {
      this.width = 120;
      this.height = 85;
      this.frameCount = 5;
    } else if (turtleName === 'don') {
      this.width = 147;
      this.height = 74;
      this.frameCount = 4;
    } else if (turtleName === 'raph') {
      this.width = 107;
      this.height = 65;
      this.frameCount = 6;
    }
  }

  render() {
    const {turtleName} = this.props;
    return (
      <SpriteAnimator
        width={this.width}
        height={this.height}
        sprite={`./assets/spritesheets/${turtleName}-attack-3.png`}
        direction="horizontal"
        shouldAnimate={true}
        fps={45}
        startFrame={0}
        stopLastFrame={true}
        frameCount={this.frameCount}
        wrapAfter={this.frameCount}
         />
    );
  }
}

export default TurtleAttack3;
