import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useStrobeTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [isStrobing, setIsStrobing] = useState(false);
  const [strobeIntervalId, setStrobeIntervalId] = useState(null);

  const toggleStrobe = () => {
    setIsStrobing(prev => !prev);
  };

  useEffect(() => {
    if (isStrobing) {
      const id = setInterval(() => {
        toggleTheme(); // Use the toggleTheme from context
      }, 1000);
      setStrobeIntervalId(id);
    } else {
      clearInterval(strobeIntervalId);
      setStrobeIntervalId(null);
    }

    return () => {
      if (strobeIntervalId) {
        clearInterval(strobeIntervalId); 
      }
    };
  }, [isStrobing, toggleTheme]);

  return [isStrobing, toggleStrobe];
}