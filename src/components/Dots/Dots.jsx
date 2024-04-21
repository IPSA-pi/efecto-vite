import { useInteractiveGrid } from './useInteractiveGrid'; // Ensure it is correctly imported

const Dots = () => {
  const consoleWidth = Math.floor(window.innerWidth / 30);
  const consoleHeight = Math.floor(window.innerHeight / 30);
  const initialGridValue = "'";
  const updateInterval = 125; // Time in milliseconds for random updates

  const { grid, handleMouseDown, handleMouseEnter, handleMouseUp } = useInteractiveGrid(initialGridValue, consoleWidth, consoleHeight, updateInterval);

  const style = {
    fontFamily: 'monospace',
    fontSize: '2rem',
    whiteSpace: 'pre',
    userSelect: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={style} onMouseUp={handleMouseUp}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
            >
              {cell + ' '}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dots;
