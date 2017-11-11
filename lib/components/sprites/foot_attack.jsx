import React from 'react';
import SpriteAnimator from 'react-sprite-animator';

class FootAttack extends React.Component {

  render() {
    return (
      <SpriteAnimator
        width={54}
        height={56}
        sprite='./assets/spritesheets/foot-attack.png'
        direction="horizontal"
        shouldAnimate={true}
        fps={10}
        startFrame={0}
        stopLastFrame={true}
        frameCount={2}
        wrapAfter={2}
         />
    );
  }
}

export default FootAttack;
