//Print a box
//Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(width,length){

  for(count = 0; count < length; count++){

    if (count == 0 || count == length-1) {
      console.log("*".repeat(width))

    }  else if (count % 2 != 0 ) {
      console.log("*"+ " ".repeat(width-2)+"*")

    }
  }
}

printBox(5,5)
