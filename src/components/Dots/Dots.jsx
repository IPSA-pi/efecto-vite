import { useInteractiveGrid } from './useInteractiveGrid';

const Dots = () => {
  const consoleWidth = Math.floor(window.innerWidth / 30);
  const consoleHeight = Math.floor(window.innerHeight / 30);
  const initialGridValue = "'";
  const updateInterval = 125;

  const { grid, handleStart, handleMove, handleEnd, gridRef } = useInteractiveGrid(initialGridValue, consoleWidth, consoleHeight, updateInterval);

  const style = {
    fontFamily: 'monospace',
    fontSize: '2rem',
    whiteSpace: 'pre',
    userSelect: 'none',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div
      ref={gridRef}
      style={style}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <span key={`${rowIndex}-${colIndex}`}>
              {cell + ' '}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dots;