// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array
// containing result of squaring each of the numbers in the given array by two.
// Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var numbers = [1,2,3,4,5,6];

function squareNumbersArray (array) {
  let squared = numbers.map(num => {
    return Math.pow(num,2);
  });
  console.log(squared);
}

squareNumbersArray(numbers);
