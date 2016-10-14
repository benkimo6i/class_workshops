// example of a javascript object

var nycda = {
	classroom: "prospect",
	instructor: "Daniel",
	class: "wdi"
}





// Workshop #1: Write an Object that represents a rectangle, including a method to calculate its area


var rectangle = {
	width: 5,
	length: 6,
	area: function(){
		return this.width * this.length
	}
}

// calculate area

rectangle.area()

// display width

rectangle.width







// Workshop #2: Rewrite rectangle object to use a constructor

function Rectangle(width, length){
	this.width = width;
	this.length = length;

	this.area = function(){
		return width * length
	}
}

// create new object
var bigRectangle = new Rectangle(50, 50)

// calculate area of new object
bigRectangle.area()

// 2nd example of using an object & constructor together
var smallRectangle = new Rectangle(5, 5)

smallRectangle.area()






// Using prototypes in a constructor


function Rectangle(width, length){
	this.width = width;
	this.length = length;

// prototype
	Rectangle.prototype.area = function() {
		return width * length
	}
}

// create new object
var bigRectangle = new Rectangle(50, 50)

// calculate area of new object
bigRectangle.area()












