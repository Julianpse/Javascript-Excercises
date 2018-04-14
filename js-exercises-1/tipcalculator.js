// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor)
//and returns the dollar amount for the tip. Based on:
//
// good -> 20%
// fair -> 15%
// bad -> 10%


function tipAmount(total, serviceLevel){
  if (serviceLevel == "good") {
    console.log(total * .2);
  } else if (serviceLevel == "fair") {
    console.log(total * .15);
  } else if (serviceLevel == "poor") {
    console.log(total * .1);
  } else {
    console.log("enter proper values")
  }
}

tipCalculator(100, "good")
tipCalculator(100, "fair")
tipCalculator(100, "poor")
