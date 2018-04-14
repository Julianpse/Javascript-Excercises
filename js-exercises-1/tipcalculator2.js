// Write a function totalAmount that takes the same arguments as tipAmount
//except it returns the total as the tip amount plus the bill amount.
//This function may make use of tipAmount as a sub-task.



function tipAmount(total, serviceLevel){
  if (serviceLevel == "good") {
    return (total * .2);
  } else if (serviceLevel == "fair") {
    return (total * .15);
  } else if (serviceLevel == "poor") {
    return (total * .1);
  } else {
    return ("enter proper values")
  }
}

function totalAmount(total, serviceLevel) {
  tipAmount = tipAmount(arguments[0], arguments[1]);
  totalBill = tipAmount + total;
  console.log(`The subtotal is: ${total}. The total bill is: ${totalBill},
    The tip is ${tipAmount}`);
}

totalAmount(100, "good");
