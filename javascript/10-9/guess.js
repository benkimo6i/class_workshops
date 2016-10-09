var number = pickNumber();

var guessForm = document.getElementById("guessForm");
var guessTextBox = document.getElementById("guess");
var button = guessForm.getElementsByTagName("button");
var messagesList = document.getElementById("messages");

guessForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var guess = parseInt(guessTextBox.value);

  var messageItem = document.createElement("li");

  var messageText;

  if (guess == number) {
    messageText = "You got it!";
  } else if (guess > number) {
    messageText = guess + ": too high!";
  } else {
    messageText = guess + ": too low!";
  }

  messageItem.innerHTML = messageText;
  messagesList.appendChild(messageItem);
});

function pickNumber() {
  var d = new Date();
  return d.getMilliseconds() % 10 + 1;
}