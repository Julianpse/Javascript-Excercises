function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function (other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var sonny = new Person('sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person('jordan', 'jordan@aol.com', '495-586-3456');

console.log(sonny.greet(jordan));
console.log(jordan.greet(sonny));

console.log(sonny);
console.log(jordan);

//Card Constructor
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

function getImageUrl(card) {
  return `images/${card.point}${card.suit}.png`;
}

var myCard = new Card(5, 'd');
console.log(myCard.suit);
getImageUrl(myCard);

//Hand Constructor
function Hand() {
  this.hand = [];
  this.handPoints = 0;
  this.addCard = function (card) {
    this.hand.push(card);
  };

  this.getPoints = function () {
    var totalPoints = 0;
    this.hand.forEach(function (card) {
      totalPoints += card.point;
    });

    this.handPoints = totalPoints;
    return this.handPoints;
  };
}

var myHand = new Hand();
myHand.addCard(new Card(5, 'd'));
myHand.addCard(new Card(13, 's'));
console.log(myHand.getPoints());

//Deck Constructor
function Deck() {
  this.deck = [];
  this.shuffle = function (deck) {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  };

  this.draw = function (deck) {
    var randomCard = deck[Math.floor(Math.random() * deck.length)];
  };

}
