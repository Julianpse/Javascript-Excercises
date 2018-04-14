// Leet Speak Key
// A : 4,
// E : 3,
// G : 6,
// I : 1,
// O : 0,
// S : 5,
// T : 7


function leetspeakTranslator(word) {

    var upperCase = word.toUpperCase()
    var splitArray = upperCase.split('');
    var arrayLength = splitArray.length;

    for (i = 0; i < arrayLength; i++) {

        if (splitArray[i] == "A") {
          splitArray[i] = "4";

        } else if (splitArray[i] == "E") {
          splitArray[i] = "3";

        } else if (splitArray[i] == "G") {
          splitArray[i] = "6";

        } else if (splitArray[i] == "I") {
          splitArray[i] = "1";

        } else if (splitArray[i] == "O"){
          splitArray[i] = "0";

        } else if (splitArray [i] == "S"){
          splitArray[i] = "5";

        } else if (splitArray [i] == "T"){
          splitArray[i] = "7";
        }
  }

  var newWord = splitArray.join("");
  console.log(newWord);
}

  leetspeakTranslator("I eat grass and I moo all day, I'm a cow.");
