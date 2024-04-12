import {useState } from 'react';
import JergaDisplay from '../JergaDisplay/JergaDisplay';
import './JergaCreate.css';

function CreateJerga() {

  const [hilo, setHilo] = useState("EFECTOTV");


  const handleHiloChange = (event) => {
    setHilo(event.target.value);
  };

  return(
    <>

      <div className="jerga-container">
        <textarea
          name="userHilo" 
          id="userHilo" 
          // cols="16" 
          rows="1" 
          value={hilo}
          onChange={handleHiloChange}
          maxLength='12'
        />
        <JergaDisplay hilo={hilo} slice='0'/>
      </div>

    </>
  );
}

export default CreateJerga;