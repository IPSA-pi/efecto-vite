import { useState, useCallback } from 'react';
import { useRandomGridUpdates } from './useRandomGridUpdates'; // Make sure to import the new hook

export const useInteractiveGrid = (initialValue, width, height, updateInterval) => {
  const [grid, setGrid] = useState(Array.from({ length: height }, () => Array(width).fill(initialValue)));
  const [isMouseDown, setIsMouseDown] = useState(false);

  const updateCell = useCallback((rowIndex, colIndex, newValue) => {
    setGrid(currentGrid => {
      const newGrid = currentGrid.map(row => [...row]);
      newGrid[rowIndex][colIndex] = newValue;
      return newGrid;
    });
  }, []);

  const handleMouseDown = useCallback((rowIndex, colIndex) => {
    setIsMouseDown(true);
    updateCell(rowIndex, colIndex, '0');
  }, [updateCell]);

  const handleMouseEnter = useCallback((rowIndex, colIndex) => {
    if (isMouseDown) {
      updateCell(rowIndex, colIndex, '0');
    }
  }, [isMouseDown, updateCell]);

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  // Use the custom hook for random updates
  const symbols = [initialValue, '-', '.', '*', ')'];
  useRandomGridUpdates(grid, setGrid, updateInterval, symbols);

  return { grid, handleMouseDown, handleMouseEnter, handleMouseUp };
};
