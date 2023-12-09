import { useState } from 'react';

export function useTimeFormat(initialFormat = 'hm') {
  const [timeFormat, setTimeFormat] = useState(initialFormat);

  const toggleTimeFormat = () => {
    switch (timeFormat) {
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
        setTimeFormat('ms');
        break;
      default:
        throw new Error('Unknown time format');
    }
  };

  return [timeFormat, toggleTimeFormat];
}