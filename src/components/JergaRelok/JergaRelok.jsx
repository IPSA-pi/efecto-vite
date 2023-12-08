import {useState, useEffect } from 'react';
import {binaryTime} from '../../utils/binaryTime';
import Row from './Row';
import './JergaRelok.css';

function JergaRelok() {
  
  // controls
  const refreshInterval = 1000;  

  // time format state
  const [timeFormat, setTimeFormat] = useState('hm');  
  // current time state
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    function updateTime() {
      setTime(new Date());
    }
    const interval = setInterval(updateTime, refreshInterval);
    return () => clearInterval(interval);
  }, []);

  const toggleTimeFormat = () => {
    switch (timeFormat) {
      case 'ms':
        setTimeFormat('hmsm');
        break;
      case 'hmsm':
        setTimeFormat('hms');
        break;
      case 'hms':
        setTimeFormat('hm');
        break;
      case 'hm':
        setTimeFormat('ms');
        break;
      default:
        throw new Error('Unknown time format');
    }
  };

  return(
    <div className="jergaRelokContainer" >
      <div className="jerga"  onClick={toggleTimeFormat}>
        {
          binaryTime(time, timeFormat).map((bString, index) => <Row key={index} className={index} value={bString}/>)
        }
      </div>
    </div>
  );
}

export default JergaRelok;