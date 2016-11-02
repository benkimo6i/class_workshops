module.exports = {
  checkNumber: function(guess, correct) {
    if (guess == correct) {
      return "You got it!";
    } else if (guess > correct) {
      return "Too high!";
    } else if (guess < correct) {
      return "Too low!";
    } else {
      return "I didn't understand that.";
    }
  },

  //get a random number
  pickNumber: function() {
    var d = new Date();
    return d.getMilliseconds() % 10 + 1;
  }
}
