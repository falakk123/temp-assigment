//1. Write a program that takes two user inputs for first and 
//last name using prompt and merge them in a new variable 
//titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter Your First Name?");
// var lastName = prompt("Enter Your Last Name?");

// alert("HELLO "+firstName+" "+lastName+" !")



//2. Write a program to take a user input about his favorite 
//mobile phone model. Find and display the length of user 
//input in your browser

// var userInput = prompt("Enter your favourit mobile phone model")
// document.write("The length of your favorite mobile phone model is " + userInput.length + ".");


//3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser 

// var word = "Pakistani";
// document.write("String of:  The index of the letter 'n' in the word 'Pakistani' is " + word.indexOf("n") + ".");

//4. Write a program to find the last index of letter “l” in the 
//word “Hello World” and display the result in your browser.


// var word = "Hello World";

// document.write("String of:  The last index of the letter 'l' in the word 'Hello World' is " + word.lastIndexOf("l") + ".");


//5. Write a program to find the character at 3rd index in the 
//word “Pakistani” and display the result in your browser.

// var word = 'Pakistani';
// var find = 3;

// document.write("value of 3 index is :"+word[3])


//6. Repeat Q1 using string concat() method.


// var firstName = "Hello";
// var lastName = "Sir!";
// var  next = "by Sir"; 
// var result = firstName.concat(" "+lastName+" "+next)

// alert(result)

//7. Write a program to replace the “Hyder” to “Islam” in the 
//word “Hyderabad” and display the result in your browser


// var city = "Hyderabad";
// var newCity = city.replace("Hyderabad", "Islamabad");
// document.write("Original city name: " + city + "<br>");
// document.write("New city name: " + newCity);


//8. Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and 
//football together.”;


// var message = "Ali and Sami are best friends. They play cricket and football together.";
//  var newMessage = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br>");
// document.write("New message: " + newMessage);

//9. Write a program that converts a string “472” to a number 
//472. Display the values & types in your browser

// var stringNumber = "472";
// var number =  472;
// document.write(" value: " + stringNumber + "<br>"+"Type:"+"string"+"<br>");
// document.write(" value: " + number + "<br>"+"Type:"+"number");

//10. Write a program that takes user input. Convert and 
//show the input in capital letters

// var userInput = prompt("Enter your favourit thing ");
// document.write("User Input:  "+userInput+"<br>")
// document.write("Upper case: " + userInput.toUpperCase(0))

//11. Write a program that takes user input. Convert and 
//show the input in title case.


//  var userName = prompt("Enter Your Name Please");
//  var ahead = userName.slice(1);
//  var firstLetter = userName.slice(0,1);
//  alert(firstLetter.toUpperCase()+ahead.toLowerCase());
  

//12. Write a program that converts the variable num to 
//string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser

// var num = 35.36;
// var result = num.replace("." , "3")
// document.write(result)

// var num = 35.36;
// var Remove = num.toString().replace(".", "");
// document.write(Remove);


//13. Write a program to take user input and store username 
//in a variable. If the username contains any special symbol 
//among [@ . , !], prompt the user to enter a valid username. 
//For character codes of [@ .
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

// var username = prompt("Enter your username:");
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     alert("Please enter a valid username without any special symbols.");
// } else {
//     alert("Your username is: " + username);
// }


//14. You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an 
//array. After searching, prompt the user whether the given 
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user 
//enters cookie, Cookie, COOKIE or coOkIE, program 
//should inform about its availability. 



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search for:");
// var index = -1;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         index = i;
//     }
// }

// if (index !== -1) {
//     alert(userInput + " is available at index "+ (index)+" in our bakery.");
// } else {
//     alert(userInput + " is not available in our bakery.");
// }



//15. Write a program to take password as an input from 
//user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.

//  var password = prompt("Enter a password that contains alphabets and numbers, is at least 6 characters long and doesn't start with a number:");

//   while (true) {
//     if (password.length < 6) {
//         password = prompt("Password is too short. Please enter a password that is at least 6 characters long:");
//      }
//      else if (/^[0-9]/.test(password)) {
//         password = prompt("Password cannot start with a number. Please enter a password that starts with an alphabet:");
//     }
//      else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//         password = prompt("Password must contain both alphabets and numbers. Please enter a password that contains both alphabets and numbers:");
//     } 

//     else {
//         alert("Password is valid!");

//     }

// }

//16. Write a program to convert the following string to an 
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser


// var university = "Karachi University";

// for(var i=0; i<university.length; i++){
//     var char = university.charAt(i);
//     document.write(char + "<br>");
// }


//17. Write a program to display the last character of a user 
//input.

// var input = prompt("Enter Your Name");
// document.write("<h1>"+"INPUT: "+input+"<br>")
// document.write("The last character of the input is: " + input.charAt((input.length)-1));


//18. You have a string “The quick brown fox jumps over the 
//lazy dog”. Write a program to count number of 
//occurrences of word “the” in given string

// var string = "The quick brown fox jumps over the lazy dog";
// document.write("TEXT: "+string+"<br>")

// var count = 1;

// var words = string.split(" ");

// for(var i=0; i<words.length; i++){
//     if(words[i] == "the"){
//         count++;
//     }
// }

// document.write("The word 'the' occurs " + count + " times in the string.");



