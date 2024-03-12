import { useState } from 'react';

export function useTimeFormat(initialFormat = 'full') {
  const [timeFormat, setTimeFormat] = useState(initialFormat);

  const toggleTimeFormat = () => {
    switch (timeFormat) {
      case 'full':
        setTimeFormat('ms');
        break;
      case 'ms':
        setTimeFormat('hmsm');
        break;
      case 'hmsm':
        setTimeFormat('hms');
        break;
      case 'hms':
        setTimeFormat('hm');
        break;
      case 'hm':
        setTimeFormat('full');
        break;
      default:
        throw new Error('Unknown time format');
    }
  };

  return [timeFormat, toggleTimeFormat];
}