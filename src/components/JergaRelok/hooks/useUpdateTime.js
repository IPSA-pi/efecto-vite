import { useState, useEffect } from 'react';

export const useUpdateTime = () => {
  const refreshInterval = 1;  

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const interval = setInterval(updateTime, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return time;
};