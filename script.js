//Assignment 

//Question 1 - Finding Minimum of Two numbers
function min(a, b) {
	if (a - b < 0) {return a;}
	else if (a - b == 0) {return a;}
	else {return b;}
}
document.write(min(8, 10) + "<br><br>");

//Question 2 - Recursion
var N = prompt("Please enter a positive whole number e.g. 1", "5");  
function isEven(N){
	if (N < 0){return isEven(-N)}
	else if (N == 0){return true;}
	else if (N == 1){return false;}
	else {return isEven(N-2);}
}
document.write(isEven(N) + "<br><br>");

//Question 3 - Bean Counting
countChar = function(string, char){ 
	let count = 0;

	for (let letter of string){
		switch (letter){
			case char:
				count += 1;
			default: 
				count += 0;   
		}
	}
	return count;
}
//Test Cases
document.write(countChar('Hippopotamus', 'p') + "<br>");  
document.write(countChar('BBC', 'B') + "<br><br>");

//Question 4 - The Sum of a Range

//Question 4(i) - Range of numbers
range = (start, end, step = start < end ? 1 : -1) => {
	let array = [];

	if (step > 0){
		for (i = start; i <= end; i += step){array.push(i);}
	}
	else {
		for (i = start; i >= end; i += step){array.push(i);}
	}
	return array;
}

//Question 4(ii) - Sum of an array
sum = (array) => {
	let total = 0;

	for (let number of array){
		total += number;
	}
	return total;
}
//Test Cases
document.write(range(1, 10) + "<br>");
document.write(range(1, 10, 2) + "<br>");
document.write(range(10, 5) + "<br>");
document.write(range(10, 3, -2) +"<br>");
document.write(sum(range(1, 10)) + "<br>");
document.write(sum(range(1, 10, 2)) + "<br>");
document.write(sum(range(10, 5)) + "<br>");
document.write(sum(range(10, 3, -2)) + "<br><br>");

//Question 5 - Reversing an Array
reverseArray = (array) => {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
	    let old = array[i];
	    array[i] = array[array.length - 1 - i];
	    array[array.length - 1 - i] = old;
	}
	return array;
}
//Test Cases
document.write(reverseArray([1, 2, 3, 4, 5]) + "<br>");
document.write(reverseArray(["Ademola Babatunde", "Akintunde Akinpelumi", "Anita Igboh", "Gerald Inyiama", 
	"Ogechi Chiama", "Ogunsola Folakemi", "Olisemeka Shedrack", "Tejiri Amami"]) + "<br><br>");

//Question 6 - Switch Case
var weather = prompt("What is the weather like?");
switch (weather) {
	case "rainy":
		alert("Remember to bring an umbrella.");
		break;
	case "sunny":
		alert("Dress lightly.");
		break;
	case "cloudy":
		alert("Go outside.");
		break;
	default:
		alert("Unknown weather type!");
		break;
}

//Question 7 - Flattening an Array of Arrays
var arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newArray = arrays.reduce(array = (flat,current) => flat.concat(current));
document.write((newArray) + "<br><br>");

//Question 8 - Everything
function every(array, function1){
	let result = true;
	for (let element of array){
		if (function1(element) == true) {result = result && true;}
		else {result = result && false;}
	}
	return result;
}
//Test Cases
document.write(every([2, 5, 7, 7], n => n < 10) + "<br>")
document.write(every([2, 5, 7, 16], n => n < 10) + "<br><br>")

//Question 9 - Palindrome Checker
function palindrome(str) {
	str = str.toUpperCase().replace(/[\W_]/g, '');
  	for (let i = 0; i < Math.round(str.length/2); i++){
    	if (str[i] != str[str.length - 1 - i]){return false;}
  	}
  	return true;
}
//Test Cases
document.write(palindrome("eye") + "<br>");
document.write(palindrome("not a palindrome") + "<br>");
document.write(palindrome("race car") + "<br>");
document.write(palindrome("1 eye for of 1 eye.") + "<br>");
document.write(palindrome("_eye") + "<br>");
document.write(palindrome("five|\_/|four") + "<br>");
document.write(palindrome("A man, a plan, a canal. Panama") + "<br><br>");

//Question 10 - Roman Numeral Conversion
function convertToRoman(num) {
	let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

	let romanized = '';

  	for (let index = 0; index < decimalValue.length; index++) {
    	while (decimalValue[index] <= num) {
      		romanized += romanNumeral[index];
      		num -= decimalValue[index];
    	}
  	}
  	return romanized;
}
//Test Cases
document.write(convertToRoman(8) + "<br>");
document.write(convertToRoman(36) + "<br>");
document.write(convertToRoman(78) + "<br>");
document.write(convertToRoman(124) + "<br>");
document.write(convertToRoman(753) + "<br>");
document.write(convertToRoman(2456) + "<br>");