// P5Wrapper.js
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const style = {
  display: 'flex',
  justifyContent: 'center'
}

const P5Wrapper = ({ sketch }) => {
  const sketchRef = useRef();
  const p5Instance = useRef(null);

  useEffect(() => {
    // Initialize the p5 instance only once
    if (!p5Instance.current) {
      p5Instance.current = new p5(sketch, sketchRef.current);
    }

    // Cleanup function to remove the sketch on component unmount
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, [sketch]);

  return <div ref={sketchRef} className='p5Wrapper' style={style}></div>;
};

export default P5Wrapper;
