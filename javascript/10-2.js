// count the words in a sentence


// string inside variable called sentence
var sentence = "Hello World, My name is Ben";

// .split(" ") splits sentence by each space, resulting in an array ["Hello", "World" ...]
// .length will count the array 
var wordCount = sentence.split(" ").length;

// prints out the value of the variable num
console.log(wordCount);


// reversing numbers using modulo and a loop


// input
var number = 90210;

// output
var reversed = [];

// while loop, while the number is larger than 0
while (number > 0) {
	// push the number into reversed which is an empty array if it leaves a remainder of 10
	reversed.push(number % 10)
	
	// divide the number by 10 and then round the number down
	number = Math.floor(number/10)
}

console.log(reversed)


// reversing numbers using .reverse 


// change number into a string
var numString = number.toString();

// split the string into an array and reverse each array element
var numArray = numString.split("").reverse();

console.log(numArray)



// basic function example, name is the argument it is receiving


function greeting(name){
	// prints our the string and the argument
	console.log("Hello my name is, " + name);
	
}

// call the function
greeting("ben")


// guess the number


function guess(num) {

	// if, else if statement within function 
	if (num > 10) {
		alert("Too high, sorry try again")
	} else if (num < 8) {
		alert("Too low, so close!")
	} else {
		alert("you guessed right!")
	}
}

// guess(9)
// guess(4)
guess(649)


// hashes and datasets


var movie = {
	// think "key": "value"
	"title": "star wars",
	"year": 1977,
	"director": "George Lucas",
	// you can also add arrays!
	"characters": ["chewbacca", "han solo", "darth vader"]
}

movie["title"]

// or

var movie = {};

movie["title"] = "star wars";

console.log(movie)
























