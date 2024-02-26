import { useUpdateTime } from './JergaRelok/hooks/useUpdateTime';
import '../styles/global.css'

function Home() {
  const time = useUpdateTime();
  const epochStyle = {
    textAlign: 'center',
    fontSize: 'var(--font-size-x-large)',
    overflow: 'auto',
  }

  return(
    // <div style={epochStyle}>{time.getTime()}</div>
    <div></div>
  );
}

export default Home;