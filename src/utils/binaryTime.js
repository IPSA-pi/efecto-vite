const binaryTime = (time, timeFormat) => {
  const [hour, minutes, seconds, milliseconds] = [
    time.getHours(), 
    time.getMinutes(), 
    time.getSeconds(), 
    time.getMilliseconds()
  ];

  // format time so that digits under 10 get a 0 at the beginning 
  let formatTime = (timeFormat === 'ms')
    ? time.getTime().toString()
    : [
        hour.toString().padStart(2, '0'), 
        minutes.toString().padStart(2, '0'), 
        seconds.toString().padStart(2, '0')
      ].join('') + (timeFormat === 'hmsm' ? milliseconds.toString().padStart(3, '0') : '');
    
  switch (timeFormat) {
    case 'ms':
    case 'hmsm':
      return formatTime;

    case 'hms':  
      return formatTime;

    case 'hm':  
      return formatTime.slice(0,-2);

    default:
      throw new Error('Invalid time format');
  }
}; 

export { binaryTime };