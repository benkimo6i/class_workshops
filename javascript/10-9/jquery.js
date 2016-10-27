var number = pickNumber();

var guessForm = $("#guessForm");
var guessTextBox = $("#guess");
var button = $("#button");
var messagesList = $("#messages");

guessForm.on("submit", function(event) {
  event.preventDefault();

  var guess = parseInt(guessTextBox.val());

  console.log(guess)

  var messageItem = $("<li></li>")

  var messageText;

  if (guess == number) {
    messageText = "You got it!";
  } else if (guess > number) {
    messageText = guess + ": too high!";
  } else {
    messageText = guess + ": too low!";
  }

  messageItem.append(messageText);
  messagesList.append(messageItem);
});

function pickNumber() {
  var d = new Date();
  return d.getMilliseconds() % 10 + 1;
}