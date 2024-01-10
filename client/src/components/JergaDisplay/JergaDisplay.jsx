import Row from './Row';
import { stringToBinaryArray } from '../../utils/stringToBinaryArray'

function JergaDisplay(props) {
  const hiloB = stringToBinaryArray(props.hilo, props.slice);

  return(           
    hiloB.map((bString, index) => <Row key={index} className={index} value={bString}/>)    
  );
}

export default JergaDisplay