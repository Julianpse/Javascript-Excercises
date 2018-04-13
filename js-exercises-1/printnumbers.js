function printNumbers(start, end) {
  for (var count = arguments[0]; count < arguments[1]+1; count++) {
    console.log(count);
  }
}

printNumbers(1,10)
