// writing a message

console.log("Hello, JavaScript!")

// basic for loop
for (var i=0; i < 3; i++) {
	console.log("Hello, JavaScript!")
}

// how to make a clock
var now = new Date(); 
// gets hours 
var hours24 = now.getHours();
// gets minutes
var minutes = now.getMinutes();

// if, else if statement that translates the hours of the 24-hour clock hours to the hours of a normal clock
var ampmHours;

if (hours24 === 0) {
	ampmHours = 12;
} else if (hours24 > 12) {
	ampmHours = hours24 - 12;
} else {
	ampmHours = hours24;
}

// if, else statement that gives ampm values of either am or pm depending on the time 
var ampm;

if (hours24 >= 12) {
	ampm = "PM"
} else {
	ampm = "AM"
}

// writes the values above into the standard clock format
console.log(ampmHours + ":" + minutes + ampm)





// workshop: find the time

now = new Date;

var t = now.getTime();

// 1234 seconds from now
var seconds = t + 1234 * 1000; 

// 1234 minutes from now
var minutes = t + 1234 * 60 * 1000;

// 1234 hours from now
var hours = t + 1234 * 60 * 60 * 1000;

var convertsec = new Date(seconds);
var convertmin = new Date(minutes);
var converthr = new Date(hours);

console.log(convertsec)
console.log(convertmin)
console.log(converthr)



// guess the number

var number = Math.random() * 10;
number = Math.floor(number) + 1;

var guess = -1;

while (guess != number){
	guess = prompt("Guess the number!");
	guess = parseInt(guess);
	
	if (guess == number) {
		alert("you got it")
	} else if (guess > number) {
		alert("too high")
	} else if  (guess < number) {
		alert("too low")
	}
}




























