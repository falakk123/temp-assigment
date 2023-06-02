//1. Write a program to take “city” name as input from user. If 
//user enters “Karachi”, welcome the user like this: 
 //“Welcome to city of lights”


// var city = prompt("Enter a city name");                                                                                                                                    
// if (city === "Karachi" || city === "karachi")  {
//     alert("Welcome to the city of light")
    
// }
// else{
//     alert("ok")
// }

//2. Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma’am.

// var gender =prompt("Enter your gender plz!")

// if (gender == "female" || gender == "Female") {
//       alert("Good Morning Maam!")
// }

// else if (gender == "male" || gender == "Male") {
//     alert("Good Morning Sir!")
// }



//3. Write a program to take input color of road traffic signal 
//from the user & show the message according to this table:
//Signal color Message
//Red Must Stop
//Yellow Ready to move
//Green Move now


// var signalColor = prompt("Enter color of road traffic signal:");

// document.write("<center><table>")
// document.write("<h1><th><tr></tr>SIGNAL COLOR<tr></tr><tr><tr></tr>MESSAGE</tr></th></h1>")

// document.write("<center><u><h3><th><tr></tr>RED<tr></tr><tr>................................................</tr><tr>Must Stop</tr></th></h3></u></center></center>")
// document.write("<center><u><h3><th><tr></tr>YELLOW<tr></tr><tr>................................................<tr></tr>Ready To Move</tr></th></h3></u></center>")
// document.write("<center><u><h3><th><tr></tr>GREEN<tr></tr><tr>.................................................<tr></tr>move on</tr></th></h3></u></center>")
// document.write("</table></center>")

// if (signalColor === "Red" || signalColor === "red") {
//     document.write("<h1>"+"RED"+"*****"+" Must Stop");
// } else if (signalColor === "Yellow" || signalColor === "yellow") {
//     document.write("<h1>"+"YELLOW"+"***** "+"Ready to move");
// } else if (signalColor === "Green" || signalColor === "green") {
//     document.write("<h1>"+"GREEN"+"*****"+"Move now");
// } else {
//     alert("Invalid signal color");
// }


//4. Write a program to take input remaining fuel in car (in 
//litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car”

// var remaining = prompt("Enter remaing fuel in car (in litres)");
// if(remaining < 0.25) {
//     alert("Please refuill the fuel in your car");
//   }
// else{
//     alert("refuil full")
// }


//5. Run this script, & check whether alert message would be
//displayed or not. Record the outputs.

// var a = 4;
 ////var a = prompt("kxh b")
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
//     alert("False");
// }

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



//6. Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute 
//grade as per following table:
//Show the total marks, marks obtained, percentage, grade &
//remarks like

// var subject1 = prompt("Enter marks obtained in Physics ");
// var subject2 = prompt("Enter marks obtained in bBology");
// var subject3 = prompt("Enter marks obtained in Islamiate");
// var totalMarks = prompt("Enter total marks");

// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");

// if (percentage >= 80) {
//     document.write("Grade: A-one" + "<br>");
//     document.write("Remarks: Excellent" + "<br>");
// }
// else if (percentage >= 70) {
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good" + "<br>");
// }
// else if (percentage >= 60) {
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: You need to improve" + "<br>");
// }
// else {
//     document.write("Grade: Fail" + "<br>");
//     document.write("Remarks: Sorry" + "<br>");
// }



//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct
//answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

// var secretNumber = 5;
// var number = prompt("Guess a secret number (ranging from 1 to 10)")

// if  (number == secretNumber)
//     alert("Bingo! Correct answer")
// else if (number == secretNumber + 1)
//     alert("Close enough to the correct answer")

// else{
//     alert("Sorry, that's not the right answer. The secret number was "+ secretNumber)
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// var number = +prompt("Enter a number: ");

// if (number % 3 === 0)
//     alert("The number is divisible by 3")
// else{
//     alert("The number is not divisible by 3")
// }

// . Write a program that checks whether the given input is an
// even number or an odd number.

// var number = +prompt("Enter a number: ");

// if (number % 2 == 0)
//     alert("The number is even")
// else{
//     alert("The number is odd")
// }


//10. Write a program that takes temperature as input and 
//shows a message based on following criteria
//. T > 40 then “It is too hot outside.”
//. T > 30 then “The Weather today is Normal.”
//. T > 20 then “Today’s Weather is cool.”
//. T > 10 then “OMG! Today’s weather is so Cool.”


// var temperature = +prompt("Enter the temperature: ")

// if (temperature > 40){
//     alert("It is too hot outside.")}
// else if (temperature > 30)
//     alert("The weather today is normal.")
// else if (temperature > 20)
//     alert("Today's weather is cool.")
// else if (temperature > 10)
//      alert("OMG! Today's weather is so cool.")


//11. Write a program to create a calculator for +,-,*, / & % 
//using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

// var firstNumber = +prompt("Enter the first number: ")
// var secondNumber= +prompt("Enter the second number: ")
// var operation = prompt("Enter the operation (+, -, *, /, %): ")

// if (operation == "+"){
//     result = firstNumber + secondNumber
//     alert("The result is: "+ result)
// }
// else if (operation == "-"){
//     result = firstNumber - secondNumber
//     alert("The result is: "+ result)
// }
// else if (operation == "*"){
//     result = firstNumber * secondNumber
//     alert("The result is: "+ result)
// }
// else if (operation == "/"){
//     result = firstNumber / secondNumber
//     alert("The result is: "+ result)
// }
// else if (operation == "%"){
//     result = firstNumber % secondNumber
//     alert("The result is: "+ result)
// }
// else{
//     alert("Invalid operation.")
// }






