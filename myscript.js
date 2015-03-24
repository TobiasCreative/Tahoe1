// These are comments to help
//console.log ("Hello From myscript.js");
//console.log("Hello Again!");

// var name = prompt("What is your name?");
// alert("Hello " + name);

// name = "nivola";
// console.log("The User's Name is " + name); 

// console.log("Before");

// var name = prompt("What Is Your Name?")

// if (name) {
// 	console.log("If block");
// } else {
// 	console.log("Else block");
// }

// console.log("After");

// console.log("Before");

// var counter = 10

// while (counter) {
// 	console.log("Learning This Stuff Is Hard!");
// 	console.log("WOW");
// 	counter = counter - 1; 
// }

// while (prompt("What is your name?")) {
// 	console.log ("Got your name");
// }

// for (var counter=10; counter; counter = counter - 1) {
// 	console.log("hello world", counter);

// }

// console.log("After");

// var friends = ["Nick", "Michael", "Amit", "Allison Grace", "Jon", "Jenny"];
// console.log(friends);
// console.log(friends.length);

// var friendNumber = 3;
// console.log(friends[friendNumber]);

// for (var i=0; i<friends.length; i+=1) {
// 	console.log(friends[i]);
// }

// var cars = ["Maserati","Porsche","Ferrari","Maybach","Tesla"];
// console.log(cars);
// console.log(cars.length);

// var CarNumber = 3;
// console.log(cars[CarNumber]);

// for (var y=0; y<cars.length; y+=1) {
// 	console.log(cars[y]);
// }



// var me = {
// 	first_name:"Tobias", 
// 	Last_name: "Bothma",
// 	"Employee Number" : 1,
// 	Favorite_song: " Favorite Song - Elastic Heart by Sia",
// 	Profession : "Profession - Graphic Designer",
// 	Age: "Age - 21",
// 	Height: "Height - 6 Feet",
// }

// console.log(me["first_name"]);
// console.log(me["Last_name"]);
// console.log(me["Employee Number"]);
// console.log(me["Favorite_song"]);
// console.log(me.Profession);
// console.log(me.Age);
// console.log(me.Height);

// var key = "first_name"
// console.log(me[key])


// var sayHello = function () {
// 	var message = "Hello";
// 	message = message + " World!!!";	
// 	console.log(message);
// }

// var debug = function (message) {
// 	console.log("Debug", message);
// }

// var doubleNumber = function (num) {
// 	return num * 2;
// }

// debug(doubleNumber(7));

// sayHello();

// var x = 1;

// debug("x has been set");
// sayHello();

// x += 10;
// var y = 100;
// debug("x has been increased. y has been set");

// sayHello();

// var color = "red";

// this is the same as below (easier*****)
// var mydiv = document.getElementById('mydiv');      
// mydiv.style.background = "red";
// mydiv.style.color = "white";


// same as above
// document.getElementById('mydiv').style.background = "red";
// document.getElementById('mydiv').style.color = "white";



// function sayHello () {
// 	var hello = "Hello ";
// 	var world = "World!";
// 	console.log(hello + world);
// }

// sayHello();

// var myColor = "blue";
// console.log("myColor before myFunc()", myColor);

// function myFunc () {
// 	var myColor = "yellow";
// 	console.log("myColor inside myFunc()", myColor);
// }

// myFunc(); 

// var name = "Tobias";
// console.log(name);

// var name2 = 'Tobias'
// console.log(name2);

// var statement = "This is Tobias' String";
// console.log(statement);

// var statement2 = 'He said, "Leave me alone!"';
// console.log(statement2);

// var statement3 = 'This is "Tobias\'" String';
// console.log(statement3);

// var path = "C:\\folder\\myfile.txt";
// console.log(path);

// var multiline ="This is line 1\n" + 
// 	" This is line 2\n" + 
// 	" This is line 3";
// console.log(multiline);


// var part1 = "Hello ";
// var part2 = "World!";
// var whole = part1 + part2;
// console.log(whole);


// var length = whole.length;
// console.log(whole, length);


// var index = whole.indexOf("World");
// console.log(index);

// if (whole.indexOf("World") !== -1){
// 	console.log("World Exists in String")
// } else {
// 	console.log("World Does Not Exist");
// }


// console.log(whole.charAt(1));


// "Hello World!"
// var world = whole.substr(6, 5);
// console.log(world);

// console.log(whole.toLowerCase());
// console.log(whole.toUpperCase());
// console.log(whole);
// var first = "Hello"
 //var second = "hello"

// if (first.toLowerCase() === second.toLowerCase()) {
 //	console.log("The strings are equal");
 //} else {
 //	console.log("The strings are different");
// }

//var stringToShout = prompt("What should I shout?");
//var shout = stringToShout.toUpperCase();
//shout += "!!!";
//alert(shout);

//There once was a (adjective) programmer who tried to use Code to (Verb)
//the (noun).

//STORY MODE


// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';
// var verb = prompt("Please type a verb" + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questions left]';
// var adjective = prompt("Please type an adjective" + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questions left]';
// var noun = prompt("Please type a noun" + questionsLeft);
// var sentence = "<h2>There once was a " + adjective;
// sentence += " programmer who tried to use Code to " + verb;
// sentence += " the " + noun + ".</h2>";
// alert("All done. Ready for the message?");
// document.write(sentence);



// SECONDSALIVE 

// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYears = 52;
// var yearsAlive = 29
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// var secondsAlive = secondsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYears * yearsAlive;
// document.write('<h2>There are ' + secondsPerDay + ' seconds in a day.</h2>');
// document.write('<h3>I have been alive for more than ' + secondsAlive + ' seconds.</h3>');

// var HTMLBadges = prompt('How many HTML badges do you have?');
// var CSSBadges = prompt('How many CSS badges do you have?');
// var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges); 
// alert('WOW! You have ' + totalBadges + ' badges!');

//DICE ROLL

// var dieRoll = Math.floor( Math.random() * 6 ) + 1;
// alert('You rolled a ' + dieRoll + '!!!');

//GAME
// var yourNumber2 = prompt("Please type a starting number")
// var bottomNumber = parseInt(yourNumber2);
// var yourNumber = prompt('Please type an ending number');
// var topNumber = parseInt(yourNumber);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// alert("Joybells, are you ready to see your random number? Here we go!!")
// var message = "<h2>" + randomNumber + " is a random number between 1 and " + topNumber + ".</p>";
// document.write(message);

// CONDITIONAL STATEMENTS

// var answer = prompt('What programming language is the name of a gem?');
// if (answer.toUpperCase() === 'RUBY' ) {
// 	document.write('<h2>That\'s RIGHT!</h2>');
// } else {
// 	document.write('<h2>Sorry, that\'s incorrect</h2>');	
// }


// //CONDITIONAL NUMBER GUESS

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
// if (parseInt(guess)=== randomNumber) {
// 	document.write("<h2>You guessed the number!</h2>");
// } else { 
// 	document.write('<h2>Sorry. The number was ' + randomNumber + '.</h2>');
// }

// BOOLEAN VALUES

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

// if (parseInt(guess)=== randomNumber) {
// 	correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
// 	var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess); 
//   if (parseInt(guessMore) === randomNumber) {
//   		correctGuess = true;
//   }

// } else if (parseInt(guess) > randomNumber ) {
// 	var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
// 	if (parseInt(guessLess) === randomNumber) {
// 		correctGuess = true;
// 	}
// }
// if (correctGuess) {
// 	document.write('<h2>You guessed it!!!</h2>');
// } else {
// 	document.write('<h2>Sorry. The number was ' + randomNumber + '.</h2>');
// }

//QUESTIONAIRE
//no answers correct, quiz beginning
// var correct = 0;
// //ask questions
// var questOne = prompt('What color is the sky?');
// if (questOne.toUpperCase() === 'BLUE') {
// 	correct += 1;
// }
// var questTwo = prompt('What color is the grass?');	
// if (questTwo.toUpperCase() === 'GREEN') {
// 	correct += 1;
// }
// var questThree = prompt('Is gravity real?');
// if (questThree.toUpperCase() === 'YES') {
// 	correct += 1;
// }
// var questFour = prompt('Does crime pay?');
// if (questFour.toUpperCase() === 'NO') {
// 	correct += 1;
// }
// var questFive = prompt('What does 2+2 equal?');
// if (questFive === '4') {
// 	correct += 1;
// }

// //Output Results
// document.write('<h2>You got ' + correct + ' out of 5 questions correct.</h2>');

// //Output rank
// if (correct === 5) {
// 	document.write('<h2><strong>You earned a GOLD crown!</strong></h2>');
// } else if (correct >= 3) {
// 	document.write('<h2><strong>You earned a SILVER crown!</strong></h2>');
// } else if (correct >= 1) {
// 	document.write('<h2><strong>You earned NO crown!</strong></h2>');
// }

//FUNCTIONS>>>

// function alertRandom() {
// 	var randomNumber = Math.floor(Math.random() * 6) + 1;
// 	alert(randomNumber);
// }

// alertRandom();

//FUNCTION EXPRESSION

// var alertRandom = function() {
// 	var randomNumber = Math.floor(Math.random() * 6) + 1;
// 	alert(randomNumber);
// };

// alertRandom();

//RETURNING A VALUE

// function getrandomNumber() {
// 	var randomNumber = Math.floor(Math.random() * 6) + 1;
// 	return randomNumber;
// }
// alert(getrandomNumber());
// console.log(getrandomNumber());
// var dieRoll = getrandomNumber();

//SETTING PARAMETER TO FUNCTIONS


// function getrandomNumber(upper) {
// 	var randomNumber = Math.floor(Math.random() * upper) + 1;
// 	return randomNumber;
// }

// console.log(getrandomNumber(6));
// console.log(getrandomNumber(100));
// console.log(getrandomNumber(1000));
// console.log(getrandomNumber(20000));

// //MULTIPLE PARAMETERS


// function gotoCoffeeShop(drink, pastry) {
// 	return( drink + ' and ' + pastry + ' is on the way!');
// }

// console.log( gotoCoffeeShop("Coke", "Fudge"));


// another example

// function getArea(width, length, units) {
// 	var area = width * length;
// 	return area + ' ' + units;
// }

// console.log(getArea(20, 20, 'sq ft'));



//more examples


// function max(number1, number2) {
//   if (number1 < number2) {
//    return number2;
//   } else {
//     return number1;
//   }
// }
// console.log(max(56, 30));

//random numbers between 2 values...
//testing for incorrect entries...with error message!

function getRandomNumber (lower, upper) {
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error('You SCREWED UP!!! Both arguments must be numbers!!');
} else {
	console.log("GOOD JOB!!!");
}
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
	
} 


console.log(getRandomNumber(8, 10));






















































































