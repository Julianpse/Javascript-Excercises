//Read and Write a File

var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is the file name?', function(answer) {

  fs.readFile(answer, function (error, buffer) {
    if (error) {
      console.error(error.message);
      return;
    }
    var contents = buffer.toString();
    var upper = contents.toUpperCase('').split().join('');

    fs.writeFile(answer, upper, function (error) {
      if (error) {
        console.error(error.message);
        return;
      }
      console.log('File Save: ', answer);
    });
  });
  rl.close();
});
