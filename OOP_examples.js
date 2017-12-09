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
