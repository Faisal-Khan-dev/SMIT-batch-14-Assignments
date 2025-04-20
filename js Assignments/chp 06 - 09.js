// Question 01
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// // browser:

// // Answer 01
// var a = 10
// document.write("Result:" , "<br />")
// document.write("The Value of a is: " , a , "<br />")
// document.write("..................................." , "<br />" , "<br />")

// ++a
// document.write("The Value of ++a is: " , a , "<br />")
// document.write("Now the Value of a is: " , a , "<br />" , "<br />")

// a++
// document.write("The Value of a++ is: " , "11" , "<br />")
// document.write("Now the Value of a is: " , a , "<br />" , "<br />")

// --a
// document.write("The Value of a-- is: " , a , "<br />")
// document.write("Now the Value of a is: " , a , "<br />" , "<br />")

// a--
// document.write("The Value of a-- is: " , "11" , "<br />")
// document.write("Now the Value of a is: " , a , "<br />" , "<br />")

// Question 02
// What will be the output in variables a, b & result after
// execution of the following script:

// // Answer 02
// var a = 2
// var b = 1
// document.write("a is: " , a , "<br />")
// document.write("b is: " , b , "<br />")

// var result = --a - --b + ++b + b--;

// document.write("Result: " , result , "<br />")

// Question 03
// Write a program that takes input a name from user &
// greet the user.

// // Answer 03
// var name = prompt("Enter your name:")
//     alert("Welcome to our page!")

// Question 04,05
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

// // Answer 04,05
// var num = +prompt("Enter a number")
// var startingNum = +prompt("Enter a starting number")
// var endingNum = +prompt("Enter an ending number")

// if(num >= 0 && startingNum >= 0){
//     for(i = startingNum ; i <= endingNum ; i++){
//         document.write(num + " x " + i + " = " + num * i , "<br />")
//     }
// }else{
//     console.log("Not Valid")
// }

// Question 06
// Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// // Answer 06
// var subject1 = prompt("Enter your first subject name")
// var subject2 = prompt("Enter your second subject name")
// var subject3 = prompt("Enter your third subject name")
// var totalMarks = 100

// var obtainedMarks1 = +prompt("Enter your first subject Number")
// var obtainedMarks2 = +prompt("Enter your second subject Number")
// var obtainedMarks3 = +prompt("Enter your third subject Number")

// document.write(subject1 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , totalMarks , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks1 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks1 / totalMarks * 100 , "%" , "<br />" , "<br />" , "<br />")
// document.write(subject2 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , totalMarks , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks2 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks2 / totalMarks * 100 , "%" , "<br />" , "<br />" , "<br />")
// document.write(subject3 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , totalMarks , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks3 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks3 / totalMarks * 100 , "%" , "<br />" , "<br />")
// document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , totalMarks * 3 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks1 + obtainedMarks2 + obtainedMarks3 , "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , obtainedMarks1 / totalMarks * 100 + obtainedMarks2 / totalMarks * 100 + obtainedMarks3 / totalMarks * 100 , "%")