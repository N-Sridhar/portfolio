import React from 'react';
import {useTrail, config, animated} from 'react-spring';

function About() {
  const [trail, set] = useTrail(1, () => ({
    transform: 'translate3d(0, 30px, 0)',
    opacity: 0,
    config: config.wobbly,
  }));
  set({transform: 'translate3d(0, 0px, 0)', opacity: 1});
  return (
    <div className="About">
      <animated.div style={trail[0]}>
        <h1>About</h1>
      </animated.div>
    </div>
  );
}

export default About;