var _ = require('lodash');

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function shuffle (input) {
  var shuffled = _.shuffle(input);
  return shuffled;
}

console.log(shuffle(numbers));
