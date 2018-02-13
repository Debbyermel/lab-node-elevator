class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "";
  }

  start() {
    let myInterval = setInterval(() => this.update(), 1000);
   }
  stop() {
    clearInterval(myInterval);
   }

  update() { 
    this.log();
    if(this.requests.lenght == 0){
      this.stop();
    }else {
      if(this.direction == "up");
     this.floorUp();
     this.waitingList.forEach(el,index) => {
       this._passengersEnter(el,index)
     }
    
    }
  }

  _passengersEnter(person,index) { 
 if(this.floor == person.originFloor){
  this.passengers.push(person);
  console.log(`${person.name} has just entered the elevator`);
  this.waitingList.splice(index,1);
  this.requests.push(person.destinationFloor);
  this.requests.splice(this.requests.indexOf(person.destinationFloor),1);
 }
  }

  _passengersLeave(person, index) { 
    if(this.floor == person.destinationFloor){
      console.log(person.name + "has just left the elevador");
      this.passengers.splice(i,1);
      this.requests.splice(this.requests.indexOf(person.destinationFloor),1);
  }
}


   floorUp() {
     if (this.floor < this.MAXFLOOR) {
        this.floor += 1;
         this.direction = "up";
      } else {
         console.log("you are at the last floor");
     }
      }
    
      floorDown() {
       if (this.floor > 0) {
         this.floor -= 1;
        this.direction = "down";
        } else {
          console.log("you are in the ground floor");
        }
      }


  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    console.log(this.requests.length);
   }
  

  log() { 
    console.log(`Direction: ${this.direction} Floor: ${this.floor}`);
  }


module.exports = Elevator;
