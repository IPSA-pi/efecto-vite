import { useState, useEffect } from 'react';

export const useUpdateTime = (refreshInterval) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const interval = setInterval(updateTime, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return time;
};