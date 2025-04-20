// // Question # 01
// . Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// Answer # 01
// var character = +prompt()
//     if (character >= 48 && character <= 57) {
//             console.log("The input is a number.")
//         }else if (character >= 65 && character <= 90) {
//             console.log("The input is an uppercase letter.")
//         }else if (character >= 97 && character <= 122) {
//             console.log("The input is an lowercase letter.")
//         }else{
//             console.log("The input is an neither a number nor a letter.")
//         }

// // Question # 02
// . Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// Answer # 02
// var num1 = +prompt()
// var num2 = +prompt()

// if (num1 > num2) {
//         console.log("Larger is " , num1)
//     }else if (num2 > num1) {
//         console.log("Larger is " , num2)
// } else {
//     console.log("Both are equal")
//     }


// // Question # 03
// . Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// Answer # 03
// var number = +prompt()
// if (number > 0) {
//         console.log("Number is positive")
//     }else if (number < 0) {
//         console.log("Number is negative")
//     }else{
//         console.log("Number is zero")
//     }

// // Question # 04
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
    
// Answer # 04
// var character = prompt("choose a character")
// if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//     console.log("True")
// }else if (character == "A" || character == "E" || character == "I" || character == "O" || character == "U") {
//     console.log("True")
// }else {
//     console.log("False")
// }

// // Question # 05
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// Answer # 05
// var js = "Faisal khan"
// var pass = prompt("Enter your password")
// if (pass === js) {
//     console.log("“Correct! The password you entered matches the original password")
// } else if (pass === "") {
//     console.log("Please enter your password")
// } else {
//     console.log("Incorrect password")
// }

// // Question # 06
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening"
// };

// Answer # 06
// var greeting;
// var hour = prompt()
// if (hour < 18) {
//     greeting = "Good day"
// } else {
//     greeting = "Good evening"
// }
// console.log(greeting)

// // Question # 07
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// // Answer # 07
// var time = prompt("enter hour e.g('1900')")
// if (time == 100) {
//     console.log("1Am")
// }else if (time == 200) {
//     console.log("2Am")
// }else if (time == 300) {
//     console.log("3Am")
// }else if (time == 400) {
//     console.log("4Am")
// }else if (time == 500) {
//     console.log("5Am")
// }else if (time == 600) {
//     console.log("6Am")
// }else if (time == 700) {
//     console.log("7Am")
// }else if (time == 800) {
//     console.log("8Am")
// }else if (time == 900) {
//     console.log("9Am")
// }else if (time == 1000) {
//     console.log("10Am")
// }else if (time == 1100) {
//     console.log("11Am")
// }else if (time == 1200) {
//     console.log("12pm")
// }else if (time == 1300) {
//     console.log("1pm")
// }else if (time == 1400) {
//     console.log("2pm")
// }else if (time == 1500) {
//     console.log("3pm")
// }else if (time == 1600) {
//     console.log("4pm")
// }else if (time == 1700) {
//     console.log("5pm")
// }else if (time == 1800) {
//     console.log("6pm")
// }else if (time == 1900) {
//     console.log("7pm")
// }else if (time == 1900) {
//     console.log("7pm")
// }else if (time == 2000) {
//     console.log("8pm")
// }else if (time == 2100) {
//     console.log("9pm")
// }else if (time == 2200) {
//     console.log("10pm")
// }else if (time == 2300) {
//     console.log("11pm")
// } else {
//     console.log("12pm")
// }