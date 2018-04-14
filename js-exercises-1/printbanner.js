//Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border
// surrounding the text. The border has to stretch to the length of the text.

function printBanner (bannerWords) {
  for (i=0; i < 3; i++) {
    if (i == 0 || i == 2) {
      console.log("*".repeat(bannerWords.length+2));
    } else {
      console.log("*" + bannerWords + "*");
    }
  }
}

printBanner("Welcome to Digital Crafts")
