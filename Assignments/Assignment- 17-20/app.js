//1. Declare and initialize an empty multidimensional array.
//(Array of arrays)

// var multiArr = [[]];
//  var multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// document.write(multiArr)
// console.log(multiArr)


//2. Declare and initialize a multidimensional array 
//representing the following matrix:
//0 1 2 3 
//1 0 1 2 
//2 1 0 1

// var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write("<h1>"+matrix[0].join("  ")+"<br>")
// document.write(matrix[1].join("  ")+"<br>")
// document.write(matrix[2].join("  ")+"<br>"+"</h1>")

//3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


//4. Write a program to print multiplication table of any 
//number using for loop. Table number & length should be 
//taken as an input from user.


// var tableNumber = +prompt("Enter the table number: ");
// var tableLength = +prompt("Enter the table length: ");

// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i)+"<br>");
// }


//5. Write a program to print items of the following array 
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, 
//“strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.write("<li>"+fruits[i]+"<br>"+"</li>"+"<p>");
// }

// document.write("Element at index 0 is "+fruits[0]+"<br>")
// document.write("Element at index 1 is "+fruits[1]+"<br>")
// document.write("Element at index 2 is "+fruits[2]+"<br>")
// document.write("Element at index 3 is "+fruits[3]+"<br>")
// document.write("Element at index 4 is "+fruits[4]+"<br>")


// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h3>"+"Counting: "+"</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// document.write("<h3>"+"Reverse counting: "+"</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// document.write("<h3>"+"Even: "+"</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// document.write("<h3>"+"Odd: "+"</h3>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// document.write("<h3>"+"series: "+"</h3>")
// for (var i = 2; i <= 20; i += 2) {
//     document.write( i + "k, ");
// }


//7. You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an 
//array.
//After searching, prompt the user whether the given item is
//found in the list or not. Example
//cookie is available in index 2
//sorry pastrie is not available

// alert("WELCOM! in my bakery")
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search for:");
// var index = -1;

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//         index = i;
//     }
// }

// if (index !== -1) {
//     alert(userInput + " is available ain index "+ (index)+" in our bakery.");
// } else {
//     alert(userInput + " is not available in our bakery.");
// }



//Write a program to identify the largest number in the 
//given array.
//A = [24, 53, 78, 91, 12].



// var A = [24, 53, 78, 91, 12];
// document.write("<h2>"+"Array Items: "+ A +"<h2>")

// var largest = A[3];

// for (var i = 1; i < A.length; i++) {
//     if (A[3] > largest) {
   
//     }
// }

// document.write("The largest number in the array is " + largest);

//Write a program to identify the smallest number in the 
//given array.
//A = [24, 53, 78, 91, 12]


//  var A = [24, 53, 78, 91, 12];
//  document.write("<h2>"+"Array Items: "+ A +"<h2>")

//  var smallest = A[4];

//  document.write("The smallest number in the array is " + smallest);



//Write a program to print multiples of 5 ranging 1 to 
//100.
//5 , 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 55, 60, 65, 70, 75, 80, 95, 100


//var int = [5 , 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 55, 60, 65, 70, 75, 80, 95, 100]

// for (var i =1 ; i<100 ; i++) {
// if (i%5==0)
// document.write(i +", ");			
// }

////document.write(int[0]+", "+int[1]+", "+int[2]+", "+int[3]+", "+int[4]+", "+int[5]+", "+int[6]+", "+int[7]+", "+int[8]+", "+int[9]+", "+int[10]+", "+int[11]+", "+int[12]+", "+int[13]+", "+int[14]+", "+int[15]+", "+int[16]+", "+int[17])

