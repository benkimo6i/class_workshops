// create a vending machine that: 
// accepts coins
// keeps track of how much $ we received
// keep track of how much things cost
// vend item IF we put in enough $
// return extra change if necessary


// created an object called vendingMachine
var vendingMachine = {
	// properties of the object, vending machine
	"price": 0.75,
	"total": 0,
	

	
	"addMoney": function(amount){
		console.log("")
		this.total += amount;
		
		// "this" refers to the object, vendingMachine
		// use console.log(this) to troubleshoot
		// can also be written as
		// vendingMachine.total += amount;
	},
	
	"vendItem": function(){
		console.log("Coming right up!");
	},
	
	"makeSelection": function(){
		if (this.total < this.price){
			console.log("Need more $$$ add:" + (this.price - this.total) );
		} else {
			this.vendItem();
			if (this.total > this.price){
				var change = this.total - this.price;
				console.log("Returning: " + change);
			}
		}	
	},
}


console.log(vendingMachine.price)
vendingMachine.addMoney(0.10)
vendingMachine.makeSelection()
vendingMachine.addMoney(0.10)
vendingMachine.makeSelection()
vendingMachine.addMoney(0.55)
vendingMachine.makeSelection()









