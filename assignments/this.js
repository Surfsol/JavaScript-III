/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding Functions in Global scope, functions not enclosed.  So this will point to the window
* 2. Implicit binding When function is called and preceded by a dot. the object before the dot is the this, only applies to f() with methods
* 3. Explicit tell js to New Binding when a constructor function is used, this refers to the specific
 instance of the object that is created and returned by the constructor function. .bind creates a new, that can be used later
* 4. Use .call or .apply to override nd invoke a f(). .call passes in arguements one by one
 .apply passed in argueemnt as an array

Is the function called by new
Is the function called by call(), apply(), or bind()?
Is the function called as a method, ie: obj.func()?
Is the function called in the global scope?

If strict mode is enabled, return undefined.
Otherwise, return the global object, ie: window



* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

/*function orderFood(food){
	console.log('I want ' + food );
	console.log(this);
}
orderFood('BBQ Ribs')*/

// Principle 2

// code example for Implicit Binding


const myOrder = {
	indicate: 'I would like',
	food: function(food) {
		console.log(`${this.indicate} to order ${food}`)
		console.log(this)
	}
}

myOrder.food('hot wings')

// Principle 3
// constructor f() create objects 
// receive an object and produce a new object
// start with capital letter
// behave like normal f() until we use new keyword
// code example for New Binding
function IamFrom(attrs){
	this.name = attrs.name;
	this.introduce = 'I am ';
	this.city = attrs.city;
	this.speak = function() {
		console.log(this.introduce + this.name + ' from ' + this.city);
		console.log(this);
	}
}

IamFrom.prototype.live = function () {
	return `I live in ${this.city}.`;
}

function Play(attrs) {
	this.sport = attrs.sport;
	this.sportlike = function (){
		console.log(`I like to play ${this.sport}`)
	}
}

IamFrom.prototype.eat = function() {
	return `I like to eat ${this.food}.`;
};

Play.prototype = Object.create(IamFrom.prototype);

const yu = new Play({
	name: 'Yu',
	city: 'Shenzhen',
	sport: 'table tennis',
	food: 'hot pot'})



const yao = new IamFrom({
	name: 'Yao', city: 'Beijing', food:'KFC'});

const shaq = new IamFrom({name: 'Shaq', city: 'Down South'})
const elBoludo = new IamFrom({name: 'El Boludo', city: 'Buenos Aires'})

/*console.log(elBoludo)// created an object, because used new 

yao.speak();
shaq.speak();
elBoludo.live();

console.log(yu)
yu.sportlike();
yu.eat();



//yu.speak();
// Principle 4

// code example for Explicit Binding
//yao.speak.call(shaq)
//shaq.speak.apply(elBoludo)


*/
function Pet(attributes){
  this.newName = attributes.name,
  this.newSpecies = attributes.species, 
  this.newPronoun = attributes.pronoun,
  this.newFavFood = attributes.favFood,
  this.newSound = attributes.sound  
  //console.log(this);
}

Pet.prototype.eat = function(){
   return `${this.newName} is a ${this.newSpecies} and ${this.newPronoun} likes to eat ${this.newFavFood}`;
}
Pet.prototype.speak = function(){
  return `${this.newName} says ${this.newSound}`;
}

const petOne = new Pet({
  name: 'Ada',
  species: 'dog',
  pronoun: 'she',
  favFood: 'Salmon',
  sound: 'woof woof'
  
});

petOne.eat();