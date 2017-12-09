var car = new function() {
    this.wheels = 4;
    this.make = 'Honda';
    this.model = '2017 convertible';
    this.color = "red";
    this.maxspeed = 250;
    this.honk = function() => {
      console.log('Beep beep');
    };
    this.description = function() => {
      console.log('The new ' + this.model + ' ' + car.make + ' has ' + car.wheels + ' wheels! and is ' + car.color + ' in color, with a top speed of ' + car.maxspeed + 'mph!');
    }
    };

}

//Problem 11

Inheritence is the scope. For example, if I declared a variable inside of a function, and tried to use
it outside of the function I wouldn't have access to it. It's kind of like making sure everything is
in the same box you're using to build with. Imagine you have 5 boxes, and they're all inside of each other.

So the first box is obviously the biggest, with a smaller box inside, and in the smaller box there's another box, and so on.

We would put our most important things in the big box, so we can access them in the smaller boxes.

We wouldn't be able to access something in the smaller box when we're working in the bigger box because the small box is not open yet.

That's sort of how inheritence and scope works in object oriented programming.

//problem 12


var Automobile = new function() {
    this.wheels = 4;
    this.make = 'Honda';
    this.model = '2017 convertible';
    this.color = "red";
    this.maxspeed = 250;
    this.honk = function() => {
      console.log('Beep beep');
    };
    this.description = function() => {
      console.log('The new ' + this.model + ' ' + car.make + ' has ' + car.wheels + ' wheels! and is ' + car.color + ' in color, with a top speed of ' + car.maxspeed + 'mph!');
    }
    };

};

var newAutomobile = new function() {
  this.inheritFrom = Automobile;
  this.inheritFrom();

}

var car = new newAutomobile() {

};

var SemiTruck = new newAutomobile() {
  this.wheels = 6;
  this.model = "truck";
}

var motorCycle = new newAutomobile() {
  this.wheels = 2;
  this.model = "bike";
}


//problem 13

var rollDice = function(n) {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
}

rollDice();
console.log(diceRoll);

//problem 14

var commonWords = function('sentence', k) {
  
}
