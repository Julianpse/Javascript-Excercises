const leetspeakDict = {
A : 4,
E : 3,
G : 6,
I : 1,
O : 0,
S : 5,
T : 7
};

function leetspeakTranslator (word) {
      upperCase = word.toUpperCase()
      splitArray= upperCase.split('');
      arrayLength = splitArray.length(); //doesnt work on this version
      console.log(arrayLength)
      for (var i = 0; i ) {
        if (letter == "A"){
          letter.replace("A", "4");
        } else if (letter == "E") {
            letter.replace("E", "4");
        } else if (letter == "G") {
            letter.replace("G", "6");
        } else if (letter == "I") {
            letter.replace("I", "1");
        } else if (letter == "O") {
            letter.replace("O", "0");
        } else if (letter == "S") {
            letter.replace("S", "5");
        } else if (letter == "T") {
            leeter.replace("T", "7");
        }
      }
      console.log(splitArray.join())
    }


leetspeakTranslator("leet")
