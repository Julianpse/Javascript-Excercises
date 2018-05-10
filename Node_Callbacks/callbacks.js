function add(x, y, callback) {
  setTimeout(function(){
    var result = x + y;
    callback(result);
  }, 1000);
}

add(65,2, function(result) {
  console.log(result);
});



function subtract(x, y, callback) {
  setTimeout(function(){
    var result = x - y;
    callback(result);
  }, 1000);
}

subtract(5, 2, function(result){
  console.log(result);
});





function greeting(person, callback) {
  setTimeout(function(){
    var greet =  'Hola, ' + person + '!';
    callback(greet);
  }, 1000);
}

greeting("Johnny", function(greet) {
  console.log(greet);
});




function product(numbers, callback) {
  setTimeout(function(){
    var mult =  numbers.reduce(function(a, b) {
      return a * b;
    }, 1);
    callback(mult);
  }, 1000);
}

product([1,2,3,4], function(mult){
  console.log(mult);
});
