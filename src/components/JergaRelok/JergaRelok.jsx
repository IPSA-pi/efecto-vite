import {useState, useEffect } from 'react';
import { useTimeFormat } from './hooks/useTimeFormat'
import {binaryTime} from '../../utils/binaryTime';
import JergaDisplay from '../JergaDisplay/JergaDisplay'
import Row from './Row';
import './JergaRelok.css';

function JergaRelok() {
  
  // controls
  const refreshInterval = 1000;  

  // time format state
  const [timeFormat, toggleTimeFormat] = useTimeFormat();  
  // current time state
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    function updateTime() {
      setTime(new Date());
    }
    const interval = setInterval(updateTime, refreshInterval);
    return () => clearInterval(interval);
  }, []);  

  const binaryStr = binaryTime(time, timeFormat);

  return(
    <div className="jergaRelokContainer" >
      <div className="jerga"  onClick={toggleTimeFormat}>
        <JergaDisplay hilo={binaryStr} slice='4'/>
      </div>
    </div>
  );
}

export default JergaRelok;