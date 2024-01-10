import {useState} from 'react';
import JergaDisplay from '../JergaDisplay/JergaDisplay';
import './JergaCreate.css';

function CreateJerga() {

  const [hilo, setHilo] = useState("EFECTOTV")

  const handleHiloChange = (event) => {
    setHilo(event.target.value);
  };

  return(
    <div className="jerga-create">
      <textarea
        name="userHilo" 
        id="userHilo" 
        cols="16" 
        rows="1" 
        value={hilo}
        onChange={handleHiloChange}
        />
      <div className="jerga-container">
        <JergaDisplay hilo={hilo} slice='0'/>
      </div>
    </div>
  );
}

export default CreateJerga;