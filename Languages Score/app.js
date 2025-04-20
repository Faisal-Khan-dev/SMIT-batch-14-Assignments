var arr = ["HTML" , "CSS" , "Javascript"]

var languages = []

var htmlScore = +prompt("Enter your html Score")
var cssScore = +prompt("Enter your Css Score")
var jsScore = +prompt("Enter your Javascript Score")

languages.push(htmlScore , cssScore , jsScore)

for(var i = 0 ; i < languages.length ; i++){
        document.write(arr[i] + "-" + languages[i] , "<br />")
}