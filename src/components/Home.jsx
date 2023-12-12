import { useUpdateTime } from './JergaRelok/hooks/useUpdateTime';

function Home() {
  const time = useUpdateTime();

  return(
    <div>{time.getTime()}</div>
  );
}

export default Home;