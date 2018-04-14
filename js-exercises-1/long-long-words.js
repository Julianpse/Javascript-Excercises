// Long-long Vowels
// Write a function, which is given a string,
// return the result of extending any long vowels to the length of 5.

function longVowels (word) {
  var vowels = "aeiou".split("");
  var splitArray = word.split("");
  var result = [];

  for (i = 0; i < splitArray.length; i++) {
    if (vowels.indexOf(splitArray[i]) > -1 && splitArray[i] === splitArray[i+1]) {
      result.push(splitArray[i] + splitArray[i] + splitArray[i]);
    } else {
      result.push(splitArray[i]);
    }
  }
  console.log(result.join(""));
}

longVowels("good")
longVowels("bad")
