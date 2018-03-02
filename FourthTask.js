// Given an array of one's and zero's convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

const binaryArrayToNumber = arr => {
   return (arr[0] * 8) +
         (arr[1] * 4) +
         (arr[2] * 2) +
         (arr[3] * 1);
};
