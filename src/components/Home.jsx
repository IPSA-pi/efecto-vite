// import { useUpdateTime } from './JergaRelok/hooks/useUpdateTime';
import '../styles/global.css'
// import P5Wrapper from './P5Wrapper/P5Wrapper'
// import {ReactP5Wrapper} from 'react-p5-wrapper'
// import sketch from './P5Wrapper/sketch';
import Dots from './Dots/Dots';
import './Home.css'

function Home() {
  // const time = useUpdateTime();
  // const epochStyle = {
  //   textAlign: 'center',
  //   fontSize: 'var(--font-size-x-large)',
  //   overflow: 'auto',
  // }

  return(
    // <div style={epochStyle}>{time.getTime()}</div>
      // <ReactP5Wrapper sketch={sketch}/>
      // <P5Wrapper sketch={sketch}/>
      <div className="home-wrapper">
        <Dots />
      </div>
  );
}

export default Home;