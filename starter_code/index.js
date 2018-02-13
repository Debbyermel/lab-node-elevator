const Elevator = require('./elevator.js');
const Person = require('./person.js');
let person = new Person("name","originFloor","destinationFloor");
let myElevator = new Elevator();
 myElevator.update();
 myElevator.start();
 myElevator.floorUp();
 myElevator.floorDown();
 myElevator.call(person);


