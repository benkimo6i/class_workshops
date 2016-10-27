//This file is how you actually run the code
//We don't really need to incude the Guest or Host classes at this point

var Party = require("./party");

//Don't need to require Guest or Host

var party = new Party();
var guestList = ["Daniel", "Ben", "Fizal"];

//loop through list of names, and have each guest show up
for (var i=0; i < guestList.length; i++) {
  var guestName = guestList[i];
  party.addGuest(guestName);
}
