// Question # 01
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// Answer # 01
// var firstName = prompt("First Name!")
// var lastName =  prompt("Last Name!")
// var fullName = firstName + " " + lastName
// console.log ("Welcome" , fullName)

// Question # 02
// . Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// Answer # 02
// var user = prompt("Enter your favourite mobile phone model")
// var length = user.length
// console.log("My Favourite phone is:" , user , "Lenth of string: " , length)

// Question # 03
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// Answer # 03
// var country = "Pakistan"
// console.log(country.indexOf("n"))

// Question # 04
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// // Answer # 04
// var greet = "Hello World"
// console.log("String:" , greet)
// console.log("Last index of 'l':" , greet.lastIndexOf("l"))

// // Question # 05
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// // Answer # 05
// var country = "Pakistan"
// console.log("String:" , country)
// console.log("Character at index '3':" , country.charAt(3))

// Question # 06
// Repeat Q1 using string concat() method.

// // Answer # 06
// var firstName = prompt("First Name!")
// var lastName =  prompt("Last Name!")
// console.log ("Welcome:" , firstName +" " + lastName)

// Question # 07
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

//Answer # 07
// var str = "Hyderabad";
// var replaceStr = str.replace("Hyder", "Islam");
// console.log("City:", str);
// console.log("After Replacement:", replaceStr);

// Question # 08
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// //Answer # 08
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replaceText = message.replaceAll("and", "&")
// console.log("Paragraph:", message);
// console.log("After Replacement:", replaceText);

// // Question # 09
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser

//Answer # 09
// var string = "472"
// console.log("Value:" , string)
// console.log("Type:", typeof string)

// var number =parseInt("472")
// console.log("Value:" , number)
// console.log("Type:" , typeof +number)
// // var number = "472"
// // console.log("Value:" , number)
// // console.log("Type:" , typeof +number)

// Question # 10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// Answer # 10
// var word = prompt("Write something u want!")
// console.log("User input:", word);
// console.log("Upper case:", word.toUpperCase());

// Question # 11
// Write a program that takes user input. Convert and
// show the input in Lower case.

//Answer # 10
// var word = prompt("Write something u want!")
// console.log("User input:", word);
// console.log("Lower case:", word.toLowerCase());

// Question # 12
// . Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

//Answer # 12
// var num = 35.36
// console.log("Number :", num);
// num = String(35.36)
// console.log("Result :", num.replace("." , ""));

// Question # 13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

//Answer # 13
// var user = prompt()
// if (prompt == "@") {
//     console.log("sjks")
// }

// Question # 14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

//Answer # 14
// var A = ["Cake", "Aple pie", "Cookies", "Chips", "Patties"]
// var user = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am/?")
// if (user === A[0]) {
//     console.log(A[0] + "is available at index 2 in our bakery")
// }else if(user === A[1]) {
//     console.log(A[1] + "is available at index 2 in our bakery")
// }else if(user === A[2]) {
//     console.log(A[2] + "is available at index 2 in our bakery")
// }else if(user === A[3]) {
//     console.log(A[3] + "is available at index 2 in our bakery")
// }else if(user === A[4]) {
//     console.log(A[4] + "is available at index 2 in our bakery")
// } else {
//     console.log("We are sorry." + user + " is not available in our bakery")
// }

// Question # 15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

//Answer # 15
// var pass = prompt("Enter your password!")
// if (pass.length >= 6 && (pass[0]) != !NaN ) {
//     console.log("Password==>" , pass)
// } else {
//     console.log("Enter Valid Password")
// }

// Question # 16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

//Answer # 16
// var element = "University of Karachi"
// for (var i = 0; i < element.length; i++){
//     console.log(element[i])
// }

// Question # 17
// Write a program to display the last character of a user
// input.

// //Answer # 17
// var userInput = prompt("Write your input!")
//     console.log("User Input:" , userInput)
//     console.log("Last character of input:" , userInput.charAt(userInput.length - 1))

// Question # 18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// Answer # 18
// var text = "“The quick brown fox jumps over the lazy dog"
// text = text.toLowerCase()
// var words = text.split("")

// var count = 0
// for (var word of words){
//     if (word == "the") {
//         count++
//     }
// }

// console.log("number of occurrences of word 'the':" , count)
