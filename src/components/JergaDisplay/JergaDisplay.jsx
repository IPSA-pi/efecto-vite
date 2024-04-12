import Row from './Row';
import { stringToBinaryArray } from '../../utils/stringToBinaryArray';
import './JergaDisplay.css';

function JergaDisplay(props) {
  const hiloB = stringToBinaryArray(props.hilo, props.slice);

  return(   
    <div className="jerga-display-container">
      {hiloB.map((bString, index) => <Row key={index} className={index} value={bString}/>)}
    </div>        
  );
}

export default JergaDisplay