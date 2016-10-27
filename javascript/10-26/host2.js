//A slightly more advanced alternative to host.js
//Merges the "Host" and the "House" models
//(need to change party.js to have guests arrive to the Host, not the house)

var EventEmitter = require('events');

//Empty constructor
var Host = function() {};

//A Host is now a kind of EventEmitter
Host.prototype = new EventEmitter();

//answerDoor is the same as before: respond to
//the "doorbell" event with a function
Host.prototype.answerDoor = function(greetFunction) {
  //"this" is the Host as created by the constructor
  //"doorbell" is the event we are listening for
  this.on('doorbell', greetFunction);
}

module.exports = Host;
