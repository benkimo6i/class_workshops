//Guests have a name
var Guest = function(name) {
  this.name = name;
}

//Guests arrive to the party and ring the doorbell (that's it!)
Guest.prototype.arrive = function(house) {
  //Ring the bell by having the house emit a "doorbell" message
  //include "this" (the Guest object) as part of the event message
  //We don't need to require EventEmitter for this,
  //since it's included in the "house" object
  house.emit("doorbell", this);
}

//allow other files to have access to the Guest
//constructor when they require() this one
module.exports = Guest;
