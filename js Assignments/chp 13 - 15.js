// Question # 01
// Declare an empty array using JS literal notation to store
// student names in future.

// Answer # 01
// var arrayNames = []

// Question # 02
// Declare an empty array using JS object notation to store
// student names in future.

// Answer # 02
// var arrayName = new Array()

// Question # 03
// Declare and initialize a strings array.

// Answer # 03
// var stringNames = ["Ali", "Sara" , "Faizan"]

// Question # 04
// Declare and initialize a numbers array.

// Answer # 04
// var numberArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// Question # 05
// Declare and initialize a boolean array.

// Answer # 05
// var booleanArray = [true , false , true , false]

// Question # 06
// Declare and initialize a mixed array.

// Answer # 06
// var booleanArray = [true , false , 10 , 15 , "Farhan" , "Karachi"]

// Question # 07
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// Answer # 07
// var array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
//     document.write("1) " , array[0] , "</br>")
//     document.write("2) " , array[1] , "</br>")
//     document.write("3) " , array[2] , "</br>")
//     document.write("4) " , array[2] , "</br>")
//     document.write("5) " , array[4] , "</br>")
//     document.write("6) " , array[5] , "</br>")
//     document.write("7) " , array[6] , "</br>")
//     document.write("8) " , array[7] , "</br>")
    
// Question # 08
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// Answer # 08
// var studentNames = ["Ali", "Ayan", "Azlan"]
// var studentMarks = [320, 230, 480]
// var totalMarks = 500

// var aliPercentage = studentMarks[0] / totalMarks * 100
// var AyanPercentage = studentMarks[1] / totalMarks * 100
// var AzlanPercentage = studentMarks[2] / totalMarks * 100

// document.write("Marks of Ali is " , studentMarks[0] , ". Percentage " , aliPercentage , "%" , "</br>")
// document.write("Marks of Ayan is " , studentMarks[1] , ". Percentage " , AyanPercentage , "%" , "</br>")
// document.write("Marks of Azlan is " , studentMarks[2] , ". Percentage " , AzlanPercentage , "%" , "</br>")

// Question # 09
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // Arrays | JAVASCRIPT
// // Page 3 of 6
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your browser

// // Answer # 09
// var color = []

// var addColor = prompt("Add color in the begining")
// color.unshift(addColor)
// console.log(color)

// var endColor = prompt("Add color in the end")
// color.push(endColor)
// console.log(color)

// var addColor1 = prompt("Add color in the begining")
// var addColor2 = prompt("Add color in the begining")
// color.unshift(addColor1 , addColor2)
// console.log(color)

// color.shift()
// console.log(color)

// color.pop()
// console.log(color)

// var addcolor3 = prompt("Add color")
// var addIndex = +prompt("Enter the index number where u want to add")
// color.splice(addIndex, 0, addcolor3)
// console.log(color)

// var removeIndex = +prompt("Enter the index number where u want to remove")
// var delCount = +prompt("How many colors do u want to remove?")
// color.splice(removeIndex, delCount)
// console.log(color)

// Question # 10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//Answer # 10
// var numbers = [320, 230, 480, 120]
// numbers.sort()
// console.log(numbers)

// Question # 11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Answer # 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// console.log("Cities list: \n" , cities)
//  var citiesArray = cities.slice(2, 4)
// console.log("Selected cities list: \n" , citiesArray)

// Question # 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Answer # 12
// var arr = ["This ", " is ", " my ", " cat"]
// console.log(arr)
// var array = arr.join("")
// console.log(array)

// Question # 13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Answer # 13
// var devices = ["Keyboard", "Mouse", "Moniter", "Printer"]
// console.log("Devices: \n", devices)

// console.log("Out: \n", devices[0])
// console.log("Out: \n", devices[1])
// console.log("Out: \n", devices[2])
// console.log("Out: \n", devices[3])



// Question # 14
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (Last In First Out)

// Answer # 13
// var devices = ["Keyboard", "Mouse", "Moniter", "Printer"]
// console.log("Devices: \n", devices)

// console.log("Out: \n", devices[3])
// console.log("Out: \n", devices[2])
// console.log("Out: \n", devices[1])
// console.log("Out: \n", devices[0])

// Question # 15
// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// // Answer # 15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]
// document.write(phone[0] , "</br>")
// document.write(phone[1] , "</br>")
// document.write(phone[2] , "</br>")
// document.write(phone[3] , "</br>")
// document.write(phone[4] , "</br>")