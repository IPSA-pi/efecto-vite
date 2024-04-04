// P5Wrapper.js
import { useEffect, useRef } from 'react';
import p5 from 'p5';

const style = {
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden'
}

const P5Wrapper = ({ sketch }) => {
  const sketchRef = useRef();
  const p5Instance = useRef(null);

  useEffect(() => {
    // Check if the p5 instance is already initialized
    if (p5Instance.current) {
      console.log('p5 instance already exists');
      return;
    }

    console.log('Initializing p5 instance');
    p5Instance.current = new p5(sketch, sketchRef.current);

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
