import Row from './Row';
import { stringToBinaryArray } from '../../utils/stringToBinaryArray';
import './JergaDisplay.css';

function JergaDisplay(props) {
  const hiloB = stringToBinaryArray(props.hilo, props.slice);
  const timeFormat = props.timeFormat;

  return(   
    <div className={"jerga-display-container " + timeFormat}>
      {hiloB.map((bString, index) => <Row key={index} className={index.toString()} value={bString}/>)}
    </div>        
  );
}

export default JergaDisplay