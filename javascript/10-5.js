// How do we capitalize the "h" in hello

var s = "hello"

// The easy way using the slice function


s[0].toUpperCase() + s.slice(1);


// The long way using a loop


for (var i=0; i < s.length; i++){
	if (i == 0) {
		console.log(s[i].toUpperCase());
	} else {
		console.log(s[i]);
	}
}


// Global variable
var global = "everywhere!";


// triangle number solution
function triangle(num) {
	
	// local variables
	var sum = 0;
	
	oops = "Oops, forgot var!!!!";
	
	for (var i = 1; i <= num; i++) {
		sum += i;
	}
	
	return sum;
}

console.log(triangle(3));


// sum is a local variable and does not have any value outside of the function
console.log("sum = " + sum);


// Histogram problem
var text = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."

var histogram = {};

// running a for loop through the text variable
for (var i=0; i < text.length; i++){
	
	// targeting each letter in the string
	var letter = text[i];
	
	// setting up a condition, for every new letter start with 0
	if (histogram[letter] == undefined) {
		histogram[letter] = 0;
	}
	
	// add 1 to the 0 each time the letter appears in the string
	histogram[letter]++
}

// write the hash
console.log(histogram)






// Alternate histogram answer courtesy Fizal
var para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function histogramMaker(words){
	var histogram = {}
	words = words.toLowerCase().split('')
	words.forEach(function(char){
		if(!histogram[char]){
			histogram[char] = 1
		}else{
			histogram[char] += 1
		}
		
	})
	return histogram
}

console.log(histogramMaker(para))




















