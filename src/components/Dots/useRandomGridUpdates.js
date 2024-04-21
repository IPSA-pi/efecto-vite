import { useEffect } from 'react';

export const useRandomGridUpdates = (grid, setGrid, updateInterval, symbols) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(currentGrid => {
        const newGrid = currentGrid.map(row => [...row]);
        const rowIndex = Math.floor(Math.random() * newGrid.length);
        const colIndex = Math.floor(Math.random() * newGrid[0].length);
        const currentSymbol = newGrid[rowIndex][colIndex];
        const nextSymbolIndex = (symbols.indexOf(currentSymbol) + 1) % symbols.length;
        newGrid[rowIndex][colIndex] = symbols[nextSymbolIndex];
        return newGrid;
      });
    }, updateInterval);
    return () => clearInterval(interval);
  }, [grid, setGrid, updateInterval, symbols]);
};
