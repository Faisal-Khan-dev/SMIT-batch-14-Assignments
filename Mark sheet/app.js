var math = +prompt("Enter your marks");
console.log("math =>" , math)

var Urdu = +prompt("Enter your marks");
console.log("Urdu =>" , Urdu)

var Physics = +prompt("Enter your marks");
console.log("Physics =>" , Physics)

var English = +prompt("Enter your marks")
console.log("English =>" , English)

var Chemistry = +prompt("Enter your marks")
console.log("Chemistry =>" , Chemistry)

var total = math + Urdu + Physics + English + Chemistry
console.log("Total=>" , total)

var per = (total/500) * 100
console.log("percentage=>" , per , "%")

if(per >= 80 && per <= 100){
    console.log("Grade=>" , 'A+')
}else if(per >= 70 && per < 80){
    console.log("Grade=>" , 'A')
}else if(per >= 60 && per < 70){
    console.log("Grade=>" , 'B')
}else if(per >= 50 && per < 60){
    console.log("Grade=>" , 'C')
}else if(per >= 40 && per < 50){
    console.log("Grade=>" , 'D')
}else if(per >= 30 && per < 0){
    console.log("Grade=>" , 'FAILED')
}else{
    console.log("INVALID PERCENTAGE")
};