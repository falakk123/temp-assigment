
//1. Write a function that displays current date & time in your 
//browser
// function date()
//  {
//     document.write(new Date());
// }
//  date();


//first name and then //2. Write a function that takes first & lait 
//greets the user using his full name


//   function greeting(first,last)
//   {
//        document.write(first.concat(" ",last));
//   }
//   greeting("falak","arif");
  


//3. Write a function that adds two numbers (input by user) 
//and returns the sum of two numbers.


// function addNumbers() {
//     var num1 = +prompt("Enter the first number:");
//     var num2 = +prompt("Enter the second number:");
//     var sum = num1 + num2;
//     return sum;
//   }
//   var result = addNumbers();
// console.log(result);


//4. Calculator:
//Write a function that takes three arguments num1, num2 
//& operator & compute the desired operation. Return and 
//show the desired result in your browser



//  function calculator(num1, num2, operator) {
//     var result;

//     if (operator === "+") {
//       result = num1 + num2;
//     } 
//     else if (operator === "-") {
//       result = num1 - num2;
//     }
//     else if (operator === "*") {
//       result = num1 * num2;
// }
//      else if (operator === "/") {
//       result = num1 / num2;
//     }

//     else {
    
//   result = "Invalid operator";
//     }
    
//     return result;
//   }
//   var result = calculator(9, 9, "*");
//       document.write(result);


//5. Write a function that squares its argument.


// function square(x) {
//     return x * x;
//   }
//   console.log(square(2)); 
// console.log(square(4));


//6. Write a function that computes factorial of a number.

// function factorial(integer) {
//     if (integer === 0) {
//       return 1;
//     } 
//     else {
//       return integer * factorial(integer - 1);
//     }
//   }
//   console.log(factorial(2));
// console.log(factorial(9));


//7. Write a function that take start and end number as inputs 
//& display counting in your browser.
  
//   function count(start , end) {
//     let result = '';
//     for (var i = start; i <= end; i++) {
//       result += i + ' ';
//     }

//     document.write(result);
//   }
//   count(1, 10)

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// function | JAVASCRIPT
// Page 2 of 4
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse() {
//     function calculateSquare(x) {
//       return x * x;
//     }
    
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
//   }
  
//   var base = 4;
//   var perpendicular = 6;
//   var hypotenuse = calculateHypotenuse(base, perpendicular);
  

//   console.log("The hypotenuse of a right triangle with base " +base+ " and perpendicular " +perpendicular+ " is " +hypotenuse);



//9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables

// function calculateTheArea(width, height) {
//   var area = width * height;
//   return area;
// }

// document.write("<h3>"+"Using arguments as value"+"</h3>"+"<br>")
// var a = calculateTheArea(7,12);
// document.write("The area of a rectangle with width 7 and height 12 is " +a+"<br>");
 
// document.write("<h3>"+"Using arguments as variables"+"</h3>"+"<br>")
// var width = 7;
// var height = 12;
// var a2 = calculateTheArea(width, height);
// document.write("The area of a rectangle with width "+ width+ "and height " + "is "+a2);



// 10. Write a JavaScript function that checks whether a passed 
//string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as 
//forward, e.g., madam.


// function isPalindrome(word) {
//   var reversedWord = word.split(' ').reverse().join('');
//   return word === reversedWord;
// }

// var word = 'madam';

// if (isPalindrome(word)) {
//   console.log(word+ " is a palindrome");
// } else {
//   console.log("not a palindrome");
// }


//11. Write a JavaScript function that accepts a string as a 
//parameter and converts the first letter of each word of the 
//string in upper case. 
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'


// function capitalizeWords(string){

//   var words = string.split(' ');
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     words[i] = word.charAt(0).toUpperCase() + word.slice(1) ;
//   }
//   return words.join(' ');
// }
 
// document.write(capitalizeWords('the quick brown fox'));

//12. Write a JavaScript function that accepts a string as a 
//parameter and find the longest word within the string. 
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development


// function findLongest(string) {
//   var words = string.split(' ');
//   var longestWord = '';
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// document.write(findLongest('Web Development Tutorial'));


//13. Write a JavaScript function that accepts two arguments, a 
//string and a letter and the function will count the number of 
//occurrences of the specified letter within the string. 
//Sample arguments : 'JSResourceS.com', 'o'

// function countLetter(str , letter) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// document.write(countLetter('hello sir' , 'l')); 



//14. The Geometrizer
//Create 2 functions that calculate properties of a circle, using 
//the definitions here.
//Create a function called calcCircumference:
//• Pass the radius to the function.
//• Calculate the circumference based on the radius, and output 
//"The circumference is NN".
//Create a function called calcArea:
//• Pass the radius to the function.
//• Calculate the area based on the radius, and output "The area 
//is NN".
//Circumference of circle = 2πr
//Area of circle = πr2


// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//    return circumference;
// }

// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//  return area;
// }


// document.write("circumference of circle "+calcCircumference(5)+"<br>"); 
// document.write("area of circle "+calcArea(5)+"<br>"); 




