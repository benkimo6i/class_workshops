var Host = require("./host");
var Guest = require("./guest");

//The Party class is where you define how the Host interacts with Guests
//Hosts don't know about Guests, and Guests don't know about Hosts (just houses & doorbells)
//The Party knows about both, and brings them together

var Party = function() {
  //the party creates its own Host
  this.host = new Host();
  this.house = this.host.house;

  //define a function for the host to answer the door
  this.host.answerDoor(function(guest) {
    console.log("Welcome, " + guest.name);
  });

  //another, independent function to run when someone rings
  this.host.answerDoor(function(guest) {
    console.log("Have a gift bag!");
  });
}

//Start the party!
Party.prototype.addGuest = function(guestName) {
  var guest = new Guest(guestName);
  guest.arrive(this.house);
}

//Allow other files to create their own parties
module.exports = Party;
