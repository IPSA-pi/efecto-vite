const binaryTime = (time, timeFormat) => {
  const [year, month, day, hour, minutes, seconds, milliseconds] = [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate(),
    time.getHours(), 
    time.getMinutes(), 
    time.getSeconds(), 
    time.getMilliseconds()
  ];

  // format time so that digits under 10 get a 0 at the beginning 
  let formatTime = (timeFormat === 'ms')
    ? time.getTime().toString()
    : [
        year.toString().padStart(2, '0'),
        month.toString().padStart(2, '0'),
        day.toString().padStart(2, '0'),
        hour.toString().padStart(2, '0'), 
        minutes.toString().padStart(2, '0'), 
        seconds.toString().padStart(2, '0')
      ].join('') + (timeFormat === 'hmsm' ? milliseconds.toString().padStart(3, '0') : '');
  switch (timeFormat) {
    case 'full':
      return formatTime;
    case 'ms':
      return formatTime;
    case 'hmsm':
      return formatTime.slice(8);

    case 'hms':  
      return formatTime.slice(8);

    case 'hm':  
      return formatTime.slice(8, -2);

    default:
      throw new Error('Invalid time format');
  }
}; 
const dateTest = new Date();
binaryTime(dateTest, 'hmsm');

export { binaryTime };