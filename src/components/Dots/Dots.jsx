import  { useState, useEffect } from 'react';

const Dots = () => {
  const [grid, setGrid] = useState([]);

  const initialGridValue = "'"

  useEffect(() => {
      const consoleWidth = Math.floor(window.innerWidth / 30); // Adjust character size as needed
      const consoleHeight = Math.floor(window.innerHeight / 30); // Adjust character size as needed

      const initialGrid = Array.from({ length: consoleHeight }, () => Array(consoleWidth).fill(initialGridValue));
      setGrid(initialGrid);
  }, []);

  const updateGridRandomly = () => {
    setGrid(currentGrid => {
      // Copy the current grid to avoid direct state mutation
      const newGrid = currentGrid.map(row => [...row]);

      // const cellsToUpdate = Math.floor(newGrid.length * newGrid[0].length * 0.01);
      const cellsToUpdate = 1;
      // const a = ' ';
      // const b = '.';
      // const c = '*';
      // const d = '-';

      // const a = '\\';
      // const b = '|';
      // const c = '/';
      // const d = '-';

      // const a = 'a';
      // const b = 'b';
      // const c = 'c';
      // const d = 'd';

      // const a = '1';
      // const b = '2';
      // const c = '3';
      // const d = '4';

      const a = initialGridValue;
      const b = '-';
      const c = '.';
      const d = '*';
      const e = ')';


      for (let i = 0; i < cellsToUpdate; i++) {
        // Randomly select a cell
        const rowIndex = Math.floor(Math.random() * newGrid.length);
        const colIndex = Math.floor(Math.random() * newGrid[0].length);
        const cellValue = newGrid[rowIndex][colIndex];


        // Update the cell based on its current value
        switch (cellValue) {
          case a:
            newGrid[rowIndex][colIndex] = b;
            break;
          case b:
            newGrid[rowIndex][colIndex] = c;
            break;
          case c:
            newGrid[rowIndex][colIndex] = d;
            break;
          case d:
            newGrid[rowIndex][colIndex] = e;
            break;
          case e:
            newGrid[rowIndex][colIndex] = a;
            break;
          default:
            break;
        }
      }
      return newGrid;
    });
  };

  useEffect(() => {
      const interval = setInterval(updateGridRandomly, 125/2);
      return () => clearInterval(interval);
  }, []);

  const style = {
    fontFamily: 'monospace', 
    fontSize: '2rem', 
    whiteSpace: 'pre' 
  }

  return (
      <div style={style}>
          {grid.map((row, rowIndex) => (
              <div key={rowIndex}>
                  {row.join(' ')}
              </div>
          ))}
      </div>
  );
};

export default Dots;
