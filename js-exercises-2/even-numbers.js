// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array
// containing only the even numbers in the given array.

var evenNumbers = [];

function checkIfEven (number) {
  if (number % 2 == 0 && number != 0){
    evenNumbers.push(number);
  }
  return evenNumbers;
}

function onlyEvenArray (array) {
  array.every(checkIfEven);
  console.log(evenNumbers);
}

onlyEvenArray([2,3,4,5,6,7,8,9,0,12]);
