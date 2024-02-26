import {useState } from 'react';
import JergaDisplay from '../JergaDisplay/JergaDisplay';
import './JergaCreate.css';

function CreateJerga() {

  const [hilo, setHilo] = useState("EFECTOTV");


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
        maxLength='12'
        />
      <div className="jerga-container">
        <JergaDisplay hilo={hilo} slice='0'/>
      </div>

      {/* {user ? (<div>logged in</div>) : (<div>not logged in</div>)} */}
    </div>
  );
}

export default CreateJerga;