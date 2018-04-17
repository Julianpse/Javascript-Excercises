//Letter Histogram
//Write a function letterHistogram which takes a string as argument.
//It will tally(histogram) the number of times each character appears in the string,
//and return the tally as an object.
function letterHistogram (string) {
  array = string.split("").sort();
  console.log(array);
  objectCount = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      objectCount.push({
        key:array[i]
        value : (i++)
      });
    }
  }
  console.log(objectCount);
}

letterHistogram("bananas")
