//Save a Webpage
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('URL:', function(answer) {

  var request = require('request');
  var url = 'http://' + answer;
  request.get(url, function (error, response, html) {
    if (error) {
      console.error(error.message);
      return;
    }

    fs.writeFile('test.html', html, function (error) {
      if (error) {
        console.error(error.message);
        return;
      }
      console.log('File Save: ', url);
    });

  });
  rl.close();
});
