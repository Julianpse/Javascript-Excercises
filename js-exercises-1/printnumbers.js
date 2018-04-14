// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumbers(start, end) {
  for (var count = arguments[0]; count < arguments[1]+1; count++) {
    console.log(count);
  }
}

printNumbers(1,10)
