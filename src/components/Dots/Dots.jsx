import  { useState, useEffect } from 'react';

const Dots = () => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        const consoleWidth = Math.floor(window.innerWidth / 10); // Adjust character size as needed
        const consoleHeight = Math.floor(window.innerHeight / 10); // Adjust character size as needed

        const initialGrid = Array.from({ length: consoleHeight }, () => Array(consoleWidth).fill(' '));
        setGrid(initialGrid);
    }, []);

    const updateGridRandomly = () => {
        setGrid(currentGrid => {
            // Copy the current grid to avoid direct state mutation
            const newGrid = currentGrid.map(row => [...row]);

            const cellsToUpdate = Math.floor(newGrid.length * newGrid[0].length * 0.01);

            for (let i = 0; i < cellsToUpdate; i++) {
              // Randomly select a cell
              const rowIndex = Math.floor(Math.random() * newGrid.length);
              const colIndex = Math.floor(Math.random() * newGrid[0].length);
              const cellValue = newGrid[rowIndex][colIndex];
  
              // Update the cell based on its current value
              switch (cellValue) {
                  case ' ':
                    newGrid[rowIndex][colIndex] = '.';
                    break;
                  case '.':
                    newGrid[rowIndex][colIndex] = ',';
                    break;
                  case ',':
                    newGrid[rowIndex][colIndex] = '`';
                    break;
                  // case '`':
                  //   newGrid[rowIndex][colIndex] = '*';
                  //   break;
                  // case '*':
                  //   newGrid[rowIndex][colIndex] = ' ';
                  //   break;
                  default:
                    break;
              }
            }

            return newGrid;
        });
    };

    useEffect(() => {
        const interval = setInterval(updateGridRandomly, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{fontFamily: 'monospace', fontSize: '2rem', whiteSpace: 'pre' }}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.join(' ')}
                </div>
            ))}
        </div>
    );
};

export default Dots;
