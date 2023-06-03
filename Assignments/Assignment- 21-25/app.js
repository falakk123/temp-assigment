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
// document.write("String : 'Pakistani' "+"<br>")
// document.write("index of" +" 'n' "+" :" + word.indexOf("n"));

//4. Write a program to find the last index of letter “l” in the 
//word “Hello World” and display the result in your browser.


// var word = "Hello World";

// document.write("String: "+word+"<br>")
// document.write("last index of "+" 'l': " + word.lastIndexOf("l"));


//5. Write a program to find the character at 3rd index in the 
//word “Pakistani” and display the result in your browser.

// var word = 'Pakistani';
// var find = 3;

// document.write("string: pakistani "+"<br>"+"character at index 3: "+word[3])


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
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);


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
//  var title = userName.slice(1);
//  var firstLetter = userName.slice(0,1);
//  alert(firstLetter.toUpperCase()+title.toLowerCase());
  

//12. Write a program that converts the variable num to 
//string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser

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
//     alert(userInput + " is available at index "+ index+" in our bakery.");
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


// var password = prompt("Please enter your password");
// var number = false;
// var letter = false;
// var startsWithLetter = false;
// var isLong = false;

// for (var i = 0; i < password.length; i++) {
//   var charCode = password.charCodeAt(i);
//   if (charCode >= 48 && charCode <= 57) { 
//     number = true;
//   }
//   else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) { 
//     letter = true;
//     if (i === 0) { // Check if the first character is a letter
//       startsWithLetter = true;
//     }
//   }
// }

// for (var i = 0; i < password.length; i++) {
//   if (password.length >= 6) { 
//     isLong = true;
//   }
// }

// if (!number || !letter || !startsWithLetter || !isLong) {
//   alert("Please enter a valid password that contains at least one letter, one number, does not start with a number, and is at least 6 characters long");
// }
// else {
//   alert("Your password is valid");
// }



// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

//var university = "University of Karachi";
//var arr = university.split("");
///document.write(arr); 

//for(var i=0; i<arr.length; i++)
//{
 //   document.write(arr[i] + "<br>");
//}


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



