// JSDoc

/** 
 * Returns an array of binary numbers where each item is the binary representation of a character in the provided string. Each binary number is padded to ensure it has 8 digits.
 * 
 * @param {string} hilo - The string to be converted
 * @param {number} slice - The amount of characters to remove at the beginning of the binary string
 * @returns {string[]} An array of binary strings, each representing a character from the input string.
 */

        // My solution
// const string2b = (hilo) => {
//   return hilo.split('')
//     .map(char => char
//       .charCodeAt()
//       .toString(2)
//       .padStart(8,0))
// }

      // ChatGPT
function stringToBinaryArray(hilo, slice) {
  const binaryArray = [];
  for (let i = 0; i < hilo.length; i++) {
    binaryArray.push(hilo.charCodeAt(i).toString(2).padStart(8, '0').slice(slice));
  }
  return binaryArray;
}

export { stringToBinaryArray };