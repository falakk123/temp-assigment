//Assignment # 5
//JAVASCRIPT

//1. Write a program that take two numbers & add them in a 
//new variable. Show the result in your browser.

// var number = (3) + (5);
// document.write("sum of 3 and 5 is "+ number)

//2. Repeat task1 for subtraction, multiplication, division &
//modulus.

// var number = (5)-(3);
// document.write("sub of 3 and 5 is "+ number)
// var number = (5)*(3);
// document.write("multipl of 3 and 5 is "+ number)
// var number = (5)/(3);
// document.write("divide of 3 and 5 is "+number)



//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
 //var num;

//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//document.write("Value after variable declaration is "+ num + "<br>");


//c. Initialize the variable with some number.
//var num = 5;

//d. Show the value of variable in your browser like “Initial
//value: 5”.
//document.write("initial value: "+ num + "<br>");

//e. Increment the variable.
//num++;

//f. Show the value of variable in your browser like “Value
//after increment is: 6”.
//document.write("Value after increment is: "+num+ "<br>");

//g. Add 7 to the variable.
//num+=7;

//h. Show the value of variable in your browser like “Value
//after addition is: 13”.
//document.write("Value after addition is: "+num+"<br>");

//i. Decrement the variable.
//num--;

//j. Show the value of variable in your browser like “Value
//after decrement is: 12”.
//document.write("Value after decrement is "+num+"<br>");

//k. Show the remainder after dividing the variable’s value 
//by 3.
//var remainder = num % 3;

//l. Output : “The remainder is : 0”.
//document.write("The remainder is "+ remainder + "<br>");


//4. Cost of one movie ticket is 600 PKR. Write a script to 
//store
//ticket price in a variable & calculate the cost of buying 5 
//tickets
//to a movie. Example output:

// var buy = (600)*(5);
// document.write("Total cost to buy 5 tickets to a movie is "+ buy+"PKR");

//5. Write a script to display multiplication table of any 
//number in your browser. E.g

// var num = +prompt("Enter a number to Display its Multiplication table");
// document.write("Multiplication Table Of" + num + "<h2>");
//     for(var i=1; i<=10; i++){
//         document.write(num + "x" + i + "=" + (num*i)+"<br>");
//     }

//6. The Temperature Converter: It’s hot out! Let’s make a 
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
//Conversion Formulae:

// var Celsius = 25;
// var Fahrenheit = (Celsius*9/5)+32;
// document.write(Celsius + "°C is " + Fahrenheit + "°F" + "<br>");

// var Fahrenheit2=70;
// var Celsius2 = (Fahrenheit2-32)*5/9;
// document.write(Fahrenheit2 + "°F is" + Celsius2 + "°C");



//7. Write a program to implement checkout process of a 
//shopping cart system for an e-commerce website. Store 
//the following in variables
//MATH EXPRESSIONS | JAVASCRIPT
//Page 5 of 9
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.


// document.write("Shopping Card"+"</p>");
// var priceItem1 = 650;
// document.write("price of item 1 is "+priceItem1 + " <br>");
// var priceItem2 = 100;
// document.write("price of item 2 is "+priceItem2+ " <br>");
// var quantity1 = 3;
// document.write("quantity Item 1 is "+quantity1+ " <br>");
// var quamtity2 = 7;
// document.write("quantity Item 2 is "+quamtity2+ " <br>");
// var shippingItem = 100;
// document.write("Shipping Charges "+shippingItem);


//8. Store total marks & marks obtained by a student in 2 
//variables. Compute the percentage & show the result in 
//your browser

// var totalStu = "980";
// document.write("Total Marks: "+ totalStu+"<br>");
// var obtained = "804";
// document.write("Mark Obtained: "+ obtained+"<br>");
// total = obtained*100/980;
// document.write("percentage: "+total+"%");


//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
//script to convert the total currency to Pakistani Rupees. 
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
//and 1 Saudi Riyal = 28 Pakistani Rupee)

//  usDollar10 = (10)*(104.80)+(25*28);
// document.write("Total Currency PKR: "+usDollar10+"<h2>") 


//10. Write a program to initialize a variable with some 
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

// var initial = 10;
// var add = (10)+(5)*(10)/(2);
// document.write(add)

//11. The Age Calculator: Forgot how old someone is? 
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored 
//values.
//Output them to the screen like so: “They are either NN or NN
//years old”.



// var currentYear = 2023;
// document.write("current year:" +currentYear+"<br>");
// var birthYear = 2004;
// document.write("birth year: "+birthYear+"<br>")
// var year = (currentYear)-(birthYear);
// document.write("your age is " +year+"<br>")


//13. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is? 
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: “You will need 
//NNNN to last you until the ripe old age of NN”.


// document.write("<h1>"+"The Lifetime Supply Calculator "+ "</h1>"+"</p>")
// var snake = "Tiger biskuits"
// document.write("<h3>"+"Favourit snake: " +snake+ "</h3>")
// var currentAge = "19";
// document.write("<h3>"+"current age: "+currentAge+"</h3>")
// var maximumAge = "50"
// document.write("<h3>"+"Estimated maximim age: "+maximumAge+" </h3>")
// var amount = "2";
// document.write("<h3>"+"Amount of snake per day: "+amount+ "</h3>")

// document.write("You will need "+("<h3> "+maximumAge-currentAge)*amount+" tiger buiskit to last you until the rip old age of 50 "+"</h3>")






