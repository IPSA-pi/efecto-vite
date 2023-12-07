const binaryTime = (time, timeFormat) => {
  let hour, minutes, seconds, milliseconds;
  let hilo, hiloB;
  let timeArray, formatTime;

  [hour, minutes, seconds, milliseconds] = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
  timeArray = [hour,minutes,seconds];
  formatTime = timeArray.map(num => num.toString().padStart(2, '0')).join('').toString();


  switch (timeFormat) {
    case 'ms':
      hilo = time.getTime().toString();
      hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).slice(2));
      // console.log(hilo);
      return hiloB;

    case 'hmsm':      
      hilo = formatTime + (milliseconds.toString().padStart(3, '0'));
      hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).slice(2));
      console.log(hilo);
      return hiloB;

    case 'hms':  
      return formatTime.split('').map(char => char.charCodeAt().toString(2).slice(2));

    default:
      throw new Error('specify time format');
  }
}; 

export { binaryTime };