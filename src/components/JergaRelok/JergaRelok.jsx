import { useTimeFormat} from './hooks/useTimeFormat'
import { useUpdateTime } from './hooks/useUpdateTime'
import {binaryTime} from '../../utils/binaryTime';
import JergaDisplay from '../JergaDisplay/JergaDisplay'
import './JergaRelok.css';

function JergaRelok() {

  // time format state
  const [timeFormat, toggleTimeFormat] = useTimeFormat();  

  // current time state
  const time = useUpdateTime();

  // get time string with specified format
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