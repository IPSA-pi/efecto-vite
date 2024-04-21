import { useState, useCallback, useRef } from 'react';
import { useRandomGridUpdates } from './useRandomGridUpdates';

export const useInteractiveGrid = (initialValue, width, height, updateInterval) => {
  const [grid, setGrid] = useState(Array.from({ length: height }, () => Array(width).fill(initialValue)));
  const [isMouseDown, setIsMouseDown] = useState(false);
  const gridRef = useRef(null); // Reference to the grid container for touch coordinate calculations

  const getCellFromEvent = (e) => {
    const bounds = gridRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - bounds.left;
    const y = (e.clientY || e.touches[0].clientY) - bounds.top;
    const colIndex = Math.floor(x / (bounds.width / width));
    const rowIndex = Math.floor(y / (bounds.height / height));
    return { rowIndex, colIndex };
  };

  const updateCell = useCallback((rowIndex, colIndex, newValue) => {
    setGrid(currentGrid => {
      const newGrid = currentGrid.map(row => [...row]);
      newGrid[rowIndex][colIndex] = newValue;
      return newGrid;
    });
  }, []);

  const handleStart = useCallback((e) => {
    e.preventDefault(); // Prevents default behavior like scrolling on touch devices
    setIsMouseDown(true);
    const { rowIndex, colIndex } = getCellFromEvent(e);
    updateCell(rowIndex, colIndex, '0');
  }, [updateCell]);

  const handleMove = useCallback((e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const { rowIndex, colIndex } = getCellFromEvent(e);
    updateCell(rowIndex, colIndex, '0');
  }, [isMouseDown, updateCell]);

  const handleEnd = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  useRandomGridUpdates(grid, setGrid, updateInterval, [initialValue, '-', '.', '*', ')']);

  return { grid, handleStart, handleMove, handleEnd, gridRef };
};
