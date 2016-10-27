//We will be creating a new EventEmitter here
var EventEmitter = require('events');

//The Host greets Guests (but the code doesn't need to know about Guests per se)

//Constructor, so we can have multiple Hosts, each with its own greeting
var Host = function() {
  //The Host has a "house" which has a "doorbell"
  //(which is the event we are listening for)
  //The "house" will be how Guests and Hosts interact
  this.house = new EventEmitter();
};

//Call a function as a response to when a guest rings the doorbell
Host.prototype.answerDoor = function(greetFunction) {
  //"this" is the Host as created by the constructor
  //"doorbell" is the event we are listening for
  this.house.on('doorbell', greetFunction);
}

module.exports = Host;
