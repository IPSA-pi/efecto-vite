// import { useUpdateTime } from './JergaRelok/hooks/useUpdateTime';
import '../styles/global.css'
import P5Wrapper from './P5Wrapper/P5Wrapper'
import sketch from './P5Wrapper/sketch';

function Home() {
  // const time = useUpdateTime();
  // const epochStyle = {
  //   textAlign: 'center',
  //   fontSize: 'var(--font-size-x-large)',
  //   overflow: 'auto',
  // }

  return(
    // <div style={epochStyle}>{time.getTime()}</div>
      <P5Wrapper sketch={sketch}/>
  );
}

export default Home;