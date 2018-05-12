//Read a File

var fs = require('fs');

fs.readFile('file2.txt', function(error, buffer){
  if (error){
    console.error("Error: No such file or directory");
    return;
  }
  console.log('File Data: ', buffer.toString());
});
