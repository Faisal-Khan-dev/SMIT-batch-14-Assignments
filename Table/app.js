var value = +prompt("Enter your value")
var startingPoint = +prompt("Enter your starting value")
var endingingPoint = +prompt("Enter your endinging value")

if( value >= 0 , startingPoint >= 0){
    for( var i = startingPoint ; i <= endingingPoint ; i++){
        document.write( value + "x" + i + "=" + value * i + "<br />")
}
}else{
        console.log("Not Allowed")
}