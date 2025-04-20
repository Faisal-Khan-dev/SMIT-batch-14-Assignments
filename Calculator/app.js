// var a = "saylani"
// console.log("a=>" , a)

// var num1 = "20a"
// var num2 = 10

// console.log(num1 - num2)

// var a = 10
 
// console.log(++a + a++  + a + a-- - --a)

// var num1 = 20
// var num2 = 10

var num1 = +prompt("Add number" , "numbers")
var num2 = +prompt("Add number" , "numbers")
let operation = prompt("add operation" , "+ - * /")

if ( operation == "+") {
    console.log(num1 + num2)
}
else if ( operation == "-") {
    console.log(num1 - num2)
}
else if ( operation == "*") {
    console.log(num1 * num2)
}
else if ( operation == "/") {
    console.log(num1 / num2)
}
else(console.log("invalid value"))

