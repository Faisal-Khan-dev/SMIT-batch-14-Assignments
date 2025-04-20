// Question # 01
// . Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Answer # 01
// var num1 = 3
// var num2 = 5
// var add = num1 + num2
// document.write("Sum of 3 and 5 is " , add)

// Question # 02
// Repeat task1 for subtraction, multiplication, division &
// modulus.

// Answer # 02

// Subtraction:
// var num1 = 3
// var num2 = 5
// var sub = num2 - num1
// document.write("Sub of 3 and 5 is " , sub)

// Multiplication:
// var num1 = 3
// var num2 = 5
// var mul = num1 * num2
// document.write("Mul of 3 and 5 is " , mul)

// Division
// var num1 = 50
// var num2 = 10
// var div = num1 / num2
// document.write("Div of 50 and 10 is " , div)

// Question # 03
// Do the following using JS Mathematic Expressions

// Answer # 03
// a. Declare a variable.
// var num = 10

//b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// document.write("Value after variable declaration is: " , num)

//c. Initialize the variable with some number.
// num = 5

// d. Show the value of variable in your browser like “Initial
// value: 5”.
// document.write("Initial value: " , num)

//e. Increment the variable.
// num++

// f. Show the value of variable in your browser like “Value
// // after increment is: 6”.
// document.write("Value after increment is: " , num)

// d. Add 7 to the variable.
// num = num + 7

// h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: " , num)

//i. Increment the variable.
// num--

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”
// document.write("Value after decrement is: " , num)

// k. Show the remainder after dividing the variable’s value
// by 3. 
// document.write("The remainder is : " , num % 3)

// Question # 04
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets

// Answer # 04
// var ticketPrice = 600
// var totalTicketcost = ticketPrice * 5
// document.write("Total cost to buy 5 tickets to a movie is " , totalTicketcost , "PKR")

// Question # 05
// Write a script to display multiplication table of any
// number in your browser. E.g

// // Answer # 05
// // Table of 5
// document.write("5 x 1 = 5" , "<br />")
// document.write("5 x 2 = 10" , "<br />")
// document.write("5 x 3 = 15" , "<br />")
// document.write("5 x 4 = 20" , "<br />")
// document.write("5 x 5 = 25" , "<br />")
// document.write("5 x 6 = 30" , "<br />")
// document.write("5 x 7 = 35" , "<br />")
// document.write("5 x 8 = 40" , "<br />")
// document.write("5 x 9 = 45" , "<br />")
// document.write("5 x 10 = 50" , "<br />")

// Question # 06
// // The Temperature Converter: It’s hot out! Let’s make a
// // converter based on the steps here.

// // // Answer # 06
// // a. Store a Celsius temperature into a variable.
// // c. Now store a Fahrenheit temperature into a variable.
// var celsius = 25
// var Fahrenheit = 70

// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// celsiusTofarenheit = (celsius * 9/5) + 32
// document.write(celsius , "<sup>o</sup>" , "C" , " is " , celsiusTofarenheit , "<sup>o</sup>" , "F" , "<br />")

// // d. Convert it to Celsius & output “NNoF is NNoC”.
// farenheitTocelsius = (Fahrenheit - 32) * 5/9
// document.write(Fahrenheit , "<sup>o</sup>" , "F" , " is " , farenheitTocelsius , "<sup>o</sup>" , "C")

// Question # 07
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Answer # 07
// var priceitem1 = 650
// var quantityitem1 = 3
// var priceitem2 = 100
// var quantityitem2 = 7
// var shipping = 100

// var totalcost = priceitem1 * quantityitem1 + priceitem2 * quantityitem2 + shipping

// document.write("price of item 1 is " , priceitem1 , "<br />")
// document.write("quantity of item 1 is " , quantityitem1 , "<br />")
// document.write("price of item 2 is " , priceitem2 , "<br />")
// document.write("quantity of item 2 is " , quantityitem2 , "<br />")
// document.write("Total cost of your order is " , totalcost)

// Question # 08
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Answer # 08
// var obtainedMarks = 804
// var totalMarks = 980
// var persentage = obtainedMarks / totalMarks * 100
// document.write("Total Marks: " , totalMarks , "<br />")
// document.write("Obtained Marks: " , obtainedMarks , "<br />")
// document.write("persentage: " , persentage , "%" , "<br />")

// Question # 09
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Answer # 09
// var usdollars = 104.80
// var totaldollars = 10
// var saudiriyal = 28
// var totalriyal = 25

// var totalcurrency = usdollars * totaldollars + saudiriyal * totalriyal
// document.write("Total currency in PKR is: " , totalcurrency)

// Question # 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Answer # 10
// var a = 10
// document.write((a + 5) * 10 / 2)

// Question # 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// Answer # 11
// var currentYear = 2025
// var birthYear = 2000
// var age = currentYear - birthYear

// document.write("Current Year is: " , currentYear , "<br />")
// document.write("Birth Year is: " , birthYear , "<br />")
// document.write("Your age is: " , age , "<br />")

// Question # 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Answer # 12
// var r = 20
// var π = 3.142
// var circumferenceOfcircle = 2 * π * r
// var areaOfcircle = π * r ** 2

// document.write("The Radius is: " , r , "<br />")
// document.write("The Circumference is: " , circumferenceOfcircle , "<br />")
// document.write( "The area is: " , areaOfcircle)

// Question # 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Answer # 13
// var fvtSnack = "Burger"
// var age = 20
// var maxAge = 70
// var amountOfsnacks = 3
// var total = (maxAge - age) * 3

// document.write("Favourite Snack: " , fvtSnack , "<br />")
// document.write("Current AGe: " , age , "<br />")
// document.write("Estimate Maximum AGe: " , maxAge , "<br />")
// document.write("Amount of Snacks per day: " , amountOfsnacks , "<br />")
// document.write("You will need " , total , " Burgers to the last you until the ripe old age of " , maxAge , "<br />")