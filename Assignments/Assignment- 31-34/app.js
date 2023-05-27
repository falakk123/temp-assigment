//1. Write a program that displays current date and time in 
//your browser.


// var date = new Date();

// document.write(date)

///2. Write a program that alerts the current month in words. 
//For example December.

//  var d = new Date();
//  var currentMonth = d.getMonth();

// alert(currentMonth)


// var now = new Date();

// var monthNumber = now.getMonth();


// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// var monthName = monthNames[monthNumber];


// alert("The current month is " + monthName + ".");


//3. Write a program that alerts the first 3 letters of the current
//day, for example if today is Sunday then alert will show 
//Sun



// var now = new Date();


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


// var dayNumber = now.getDay();


// var dayName = dayNames[dayNumber];


// var shortName = dayName.slice(0, 3);

// alert("The first three letters of the current day are " + shortName + ".");




//4. Write a program that displays a message “It’s Fun day” if 
//its Saturday or Sunday today



// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// var dayNumber = now.getDay();


// var dayName = dayNames[dayNumber];


// if (dayName === "Saturday" || dayName === "Sunday") {
//   alert("It's Fun day");

// } 
// else {
//   alert("It's not Fun day");
// }


//5. Write a program that shows the message “First fifteen 
//days of the month” if the date is less than 16th of the month 
//else shows “Last days of the month”.


// var now = new Date();

// var dayOfMonth = now.getDate();


// if (dayOfMonth < 16) {
  
//   alert("First fifteen days of the month");
// } else {

//   alert("Last days of the month");
// }


//6. Write a program that determines the minutes since 
//midnight, Jan. 1, 1970 and assigns it to a variable that 
//hasn't been declared beforehand. Use any variable you like 
//to represent the Date object.



// var januaryFirst1970 = new Date(0);

// var millisecondsSince1970 = new Date().getTime();

// document.write("current date: "+januaryFirst1970+"<br>")


// var minutesSince1970 = (millisecondsSince1970 - januaryFirst1970.getTime()) / (1000 * 60);

// document.write("Ellapsed milli seconds since january 1, 1970: "+millisecondsSince1970+ "<br>")


// document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);


//7. Write a program that tests whether it's before noon and 
//alert “Its AM” else “its PM


// var hour = new Date().getHours();

// if (hour < 12) {
 
//   alert("It's AM");
// } 
// else{
//   alert("It's PM");
// }


//8. Write a program that creates a Date object for the last day 
//of the last month of 2020 and assigns it to variable named 
//laterDate

// laterDate = new Date(2020, 11, 31);
// document.write(laterDate)

//9. Create a date object of the starting date of this Ramadan 
//and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015

// var startDate = new Date(2015, 5, 18);
// var today = new Date();
// var timeDiff = today.getTime() - startDate.getTime();
// var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// alert("Number of days past since 1st Ramadan: " + daysDiff);


//10. Write a program that displays in your browser the 
//seconds that elapsed between the reference date and the 
//beginning of 2015.


// var referenceDate = new Date(); 

// var beginning2015 = new Date(2015, 11, 5);

// document.write("On reference Date " +beginning2015+ " <br>") 

// var elapsed = (beginning2015 - referenceDate) / 1000; 


// document.write(elapsed + " Seconds had passed since beginning of 2015: ");


//11. Create a Date object for the current date and time. 
//Extract the hours, reset the date object an hour ahead and 
//finally display the date object in your browser.

// var currentDate = new Date(); 

// var currentHours = currentDate.getHours(); 

// document.write("current date: " +currentDate+" <br>");

// currentDate.setHours(currentHours + 1);

// document.write("one hour ago, it was " + currentDate); 


//12. Write a program that creates a date object and show the 
//date in an alert box that is reset to 100 years back?

// var currentDate = new Date(); 

// alert(currentDate)

// currentDate.setFullYear(currentDate.getFullYear() - 100); 

// alert("Date 100 years back It was sun: " + currentDate);


//13. Write a program to ask the user about his age. Calculate 
//and show his birth year in your browser.


// var age = prompt("What is your age?"); 
// document.write("your current age is "+age+"<br>")

// var currentDate = new Date(); 

// var birthYear = currentDate.getFullYear() - age; 

// document.write("Your birth year is: " + birthYear);



//14. Write a program to generate your K-Electric bill in your
//browser. All the amounts should be rounded off to 2 
//decimal places. Display the following fields:
//a. Customer Name
//b. Current Month
//DATE METHODS | JAVASCRIPT
//Page 5 of 5
//c. Number of units
//d. Charges per unit
//e. Net Amount Payable (within Due Date)
//f. Late Payment Surcharge
//g. Gross Amount Payable (after Due Date)
//Where,
//Net Amount Payable (within Due Date) = Number of units * Charges per unit
//& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customerName = prompt("Enter your name:");

// var currentMonth = new Date().toLocaleString('default', { month: 'long' });
// //document.write(currentMonth)

// var numberOfUnits = prompt("Enter the number of units:"); 

// var chargesPerUnit = 15;

// var netAmountPayable = numberOfUnits * chargesPerUnit; 

// var latePaymentSurcharge = 250;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>Number of units: " + numberOfUnits + "</p>");
// document.write("<p>Charges per unit: " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
// document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");




