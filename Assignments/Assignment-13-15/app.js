//1. Declare an empty array using JS literal notation to store
//student names in future.

// var studentsNames = [];

// studentsNames.push('hila');
// studentsNames.push('fasiha');
// studentsNames.push('huma');

// console.log(studentsNames)


//2.Declare an empty array using JS object notation to store
//student names in future.


// var studentNames = new Array();

// studentNames.push('fasiha');
// studentNames.push('hila');
// studentNames.push('huma');

// var newStudentNames = new Array('John', 'Jane', 'Bob');

// console.log(studentNames+newStudentNames)


//3. Declare and initialize a strings array.

// var fruits = ['apple'];
// console.log(fruits)

//4. Declare and initialize a numbers array.

// var number = [1];
// console.log(number)


//5. Declare and initialize a boolean array.

//var booleanArray = [false];
//console.log(booleanArray)

//6. Declare and initialize a mixed array.

//var mixedArray = [1, "two", false];
//console.log(mixedArray)


//7. Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//BS, BCOM, MS, M. Phil., PhD). Show the listed
//qualifications in your browser like
//Qualifications
//1)SSC
//2)HSC
//3)BCS
//4)BS
//5)BCOM
//6)MS
//7)M.  PHIL.
//8)PHD

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Qualifications:</h1><br>");

// document.write("<h3>"+'1) '+qualifications[0]+'<br>')
// document.write('2) '+qualifications[1]+'<br>')
// document.write('3) '+qualifications[3]+'<br>')
// document.write('4) '+qualifications[4]+'<br>')
// document.write('5) '+qualifications[5]+'<br>')
// document.write('6) '+qualifications[6]+'<br>')
// document.write('7) '+qualifications[7]+'<br>')

//8. Write a program to store 3 student names in an array.Take
//another array to store score of these three students.
//Assume that total marks are 500 for each student, display
//the scores & percentages of students like:
//SCORE OF HUMA IS 320. PERCENTAGE IS: 64%
//SCORE OF HILA IS 320. PERCENTAGE IS: 94%
//SCORE OF FASIHA IS 320. PERCENTAGE IS: 46%


// var names = ["Huma", "Hila", "Fasiha"];
// var scores = [320, 470, 230];
// document.write("<h4>"+"SCORE OF HUMA IS "+scores[0]+ "."  +  "  PERCENTAGE IS: "  +320*100/500+" %"+"<br>")
// document.write("<h4>"+"SCORE OF HUMA IS "+scores[1]+ "."  +  "  PERCENTAGE IS: "  +470*100/500+" %"+"<br>")
// document.write("<h4>"+"SCORE OF HUMA IS "+scores[2]+ "."  +  "  PERCENTAGE IS: "  +230*100/500+" %"+"<br>")

//9. Initialize an array with color names. Display the array
//elements in your browser.
//a. Ask the user what color he/she wants to add to the
//beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end
//& add that color to the end of the array. Display the
//updated array in your browser.
//c. Add two more color to the beginning of the array.
//Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated
//array in your browser.
//e. Delete the last color in the array. Display the updated
//array in your browser.
//f. Ask the user at which index he/she wants to add a color
//& color name. Then add the color to desired
//position/index. . Display the updated array in your
//browser.
//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then
//Arrays | JAVASCRIPT
//Page 3 of 6
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.


// var colors = ["red", "green", "blue"];
// document.write("Original array: " + colors + "<br><br>");


// var colorToAddToBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddToBeginning);
// document.write("After adding color to the beginning: " + colors + "<br><br>");

// var colorToAddToEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddToEnd);
// document.write("After adding color to the end: " + colors + "<br><br>");

// colors.unshift("orange", "purple");
// document.write("After adding two colors to the beginning: " + colors + "<br><br>");

// colors.shift();
// document.write("After deleting the first color: " + colors + "<br><br>");

// colors.pop();
// document.write("After deleting the last color: " + colors + "<br><br>");

// var indexToAddColor = prompt("Enter the index where you want to add the color:");
// var colorToAdd = prompt("Enter the color you want to add:");
// document.write(indexToAddColor)
// document.write(colorToAdd)
// colors.splice(indexToAddColor, 0, colorToAdd);
// document.write("After adding color to index " + indexToAddColor + ": " + colors + "<br><br>");


// var indexToDeleteColor = prompt("Enter the index where you want to delete the color(s)$ how many color you want to remove:");
// document.write(indexToDeleteColor)
// var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
// document.write(numberOfColorsToDelete)
// colors.splice(indexToDeleteColor, numberOfColorsToDelete);
// document.write("After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDeleteColor +"<br>")



//Write a program to store student scores in an array & 
//sort the array in ascending order using Array’s sort 
//method.
//SCORES OF STUDENTS : 320 , 230 , 480 , 120
//ORDERED SCORE OF STUDENTS :120 , 230, 320 , 480

// var scores = [320, 230, 480, 120];
// scores.sort();
// scores.reverse();
// console.log("SCORES OF STUDENTS: " + scores);
// console.log("ORDERED SCORE OF STUDENTS: " + scores.sort()+ ", ");


//Write a program to initialize an array with city names. 
//Copy 3 array elements from cities array to selectedCities 
//array.
//Cities List: 
//karachi,queta,lahore,islamabad,peshawar
//selected cities list:
//islamabad,queta

// var cities = ["karachi","lahore", "queta", "islamabad", "peshawar"];
// var selectedCities = [];
// selectedCities = cities.slice(2 , 4);
// console.log("Selected cities list: " + selectedCities+ ", ");

//Write a program to create a single string from the 
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)


// var arr = ["This "," is "," my ","cat"];
// console.log("ARRAY:"+arr)
// console.log(arr.join(" "))

//13. Create a new array. Store values one by one in such a way
//that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)
//devices:
//keyboard,mouse,moniter,printer
//out:
//keyboard
//out:
//mouse:
//out:
//moniter
//out:
//printer

// var devices = ["keyboard", "mouse", "moniter", "printer"];
// console.log("Out: " + devices.shift());
// console.log("Out: " + devices.shift());
// console.log("Out: " + devices.shift());
// console.log("Out: " + devices.shift());


//15. Write a program to store phone manufacturers (Apple,
//Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your 
//browser using document.write() method:

//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//  document.write("<select>");

//  document.write("<option>"+manufacturers[0] +"</option>");
//  document.write("<option>"+manufacturers[1] +"</option>");
//  document.write("<option>"+manufacturers[2] +"</option>");
//  document.write("<option>"+manufacturers[3] +"</option>");
//  document.write("<option>"+manufacturers[4] +"</option>");
//  document.write("<option>"+manufacturers[5] +"</option>");

// document.write("</select>");





