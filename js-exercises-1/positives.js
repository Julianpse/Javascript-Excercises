// Just the positives
// Write a function positiveNumbers which is given an array of numbers
// and returns a new array containing only the positive numbers within the given array.

function positiveNumbers(array) {
  var newArray = []

   for(i=0; i < array.length ; i++) {
     if (array.indexOf(i) > 0) {
       newArray.push(array[i]);
     }
    }
     console.log(newArray);
}

positiveNumbers([-1,-2,-12,3,4,5,6]);
