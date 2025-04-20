// Question # 01
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Answer # 01
// var city = prompt("Enter your city name:")
// if(city == "Karachi"){
//     console.log("Welcome to city of lights")
// }

// Question # 02
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// Answer # 02
// var gender = prompt("Enter your Gender:")
// if(gender == "male"){
//     console.log("Good Morning Sir")
// }else if(gender == "female"){
//     console.log("Good Morning ma'am")
// }

// Question # 03
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// Answer # 03
// var trafficLight = prompt("Traffic Light")

// if(trafficLight == "Red"){
//     document.write("Red" , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , "Must Stop")
// }else if(trafficLight == "Blue"){
//     document.write("Blue" , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , "Ready to move")
// }else if(trafficLight == "Green"){
// //     document.write("Green" , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , "Move now")
// }

// Question # 04
// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// Answer # 04
// var remainingFuel = +prompt("Enter remaining Fuel")
// if(remainingFuel < 0.25){
//     console.log("Please refill the fuel in your car")
// }

// Question # 05
//  Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Answer # 04
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true")
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } else {
//     alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } else {
//     alert("condition 1 is false");
// }

// if (c === 13){
// alert("condition 2 is true");
// }else {
//     alert("condition 1 is false");
// }

// if (++c < 14){
// alert("condition 3 is true");
// }else {
//     alert("condition 1 is false");
// }

// if(c === 14){
// alert("condition 4 is true");
// }else {
//     alert("condition 1 is false");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals")
// }

// if (true){
//     alert("True");
//     }
// if (false) {
//     alert("False")
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
    
// Question # 06
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Answer # 06
// var sub1 = +prompt("Enter first subject marks")
// var sub2 = +prompt("Enter second subject marks")
// var sub3 = +prompt("Enter third subject marks")

// var totalMarks = +prompt("Enter total marks")
//     console.log("Total Marks = " , totalMarks)

// var obtainedMarks = sub1 + sub2 + sub3
//     console.log("Marks Obtained = " , obtainedMarks)

// var percentage = obtainedMarks / totalMarks * 100
//     console.log("Percentage = " , percentage , "%")

// if (percentage >= 80) {
//     console.log("Grade = " , "A-one")
//     var remarks = "Excellent"
//     console.log("Remarks = " , remarks)
// } else if (percentage >= 70 && percentage < 80) {
//     console.log("Grade = " , "A")
//     remarks = "Good"
//     console.log("Remarks = " , remarks)
// }else if (percentage >= 60 && percentage < 70) {
//     console.log("Grade = " , "B")
//     remarks = "You need to improve"
//     console.log("Remarks = ", remarks)
// }else{
//     console.log("Grade = " , "Sorry")
//     remarks = "Fail"
//     console.log("Remarks = " , remarks)
// }

// Question # 07
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Answer # 07
// var secretNumber = 5
// var number = +prompt("Guess the secret number")

// if (secretNumber == number) {
//     console.log("Bingo! Correct answer")
// } else if (secretNumber == number + 1 || secretNumber == number - 1) {
//     console.log("Close enough to the correct answer")
// } else {
//     console.log("Better luck next time")
// }

// Question # 08
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// Answer # 08
// var user = +prompt("Enter a number")
// if (user % 3 == 0) {
//     console.log(user)
// }

// Question # 09
// Write a program that checks whether the given input is an
// even number or an odd number.

// Answer # 09
// var user = +prompt("Enter a number")
// if (user % 2 == 0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

// Question # 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Answer # 10
// var temp = +prompt("Today's Temperature")
// if (temp > 40) {
//         console.log("It is too hot outside")
//     }else if (temp > 30 && temp < 40) {
//         console.log("The Weather today is Normal")
//     }else if (temp > 20 && temp < 30) {
//         console.log("Today’s Weather is cool")
//     }else if (temp < 20) {
//         console.log("OMG! Today’s weather is so Cool")
//     }

// Question # 11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// // Compute & show the calculated result to user.

// // Answer # 11
// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// var Operation = prompt("+,_,*,/,%")

// if (Operation == "+") {
//     console.log(num1 + num2)
// }else if (Operation == "-") {
//     console.log(num1 - num2)
// }else if (Operation == "*") {
//     console.log(num1 * num2)
// }else if (Operation == "/") {
//     console.log(num1 / num2)
// }else if (Operation == "%") {
//     console.log(num1 % num2)
// } else {
//     console.log("Not Valid")
// }