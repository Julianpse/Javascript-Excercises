function Mom (firstName, lastName, eyeColor, hairColor) {
  this.firstName = 'Alice';
  this.lastName = 'Wong';
  this.eyeColor = 'brown';
  this.hairColor ='black';
}

function Daughter (firstName, lastName, eyeColor, hairColor) {
  Mom.call(this, eyeColor, hairColor);
  this.firstName = 'Ilene';
  this.hairColor = 'brown';
}


class Person {
  constructor(name, friends) {
    this.name = name;
    this.friends = [];
  }
}
