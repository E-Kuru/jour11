const fs = require("fs");
function space (){
    console.log('');
    console.log('');
}
// File System 

// fs.readFile('./jour07.txt', function(err,res){
//     console.log(res.toString());
// })

// fs.writeFile("./jour07.txt", 'Coucou toi', function(err,res){})

// fs.unlink('./jour07.txt', function(err,res){
//     if (err) {
//         console.log(err);
//     }

//   else {
//     console.log("\nDeleted file: jour07.txt");
// }
// })

// Map double 
space()

var array = [1,2,3,4,5]

var double = array.map( function(e){
    return e * 2    
})
console.log(double);
space()

// Man Names

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortName = longNames.map( function (e){
    return {name : `${e.firstName} ${e.lastName}`}
})

console.log(shortName);
space()

// Filter Numbers 

var newArray = [1,'toto',34,"javascript",8]

var numbers = newArray.filter(function(e){
    return e >= 0 // return typeof e === 'number'
})
console.log(numbers);
space()

// Filter Even 

var someNumbers = [1,2,3,4,5,6,7,8]

var even = someNumbers.filter( function(e){
    return e % 2 === 0
})

console.log(even);
space()

// Cakes 

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var choco = cakes.filter(function(e){
    return  e.flavor === 'chocolate'
})
// console.log(choco);
space()

var souldOut = choco.map(function(e){
    e.status = 'Sold Out' // Change le tableau de base (pas ouf)
	// return {
	// 	...e,
	// 	status : "Sold Out ! "
	// } Méthode plus coorecte, le tableau de base ne change pas
    return  e
})
console.log(souldOut);
console.log(cakes);
space()

// Bonus 

