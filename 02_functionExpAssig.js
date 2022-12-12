function square(num){
    console.log("square of ",num," = ",num *num);
}

square(5);
square(6);
square(25);
square(100);
console.log("==============================================");
console.log("Type of square :");
console.log(typeof square);
console.log("==============================================");

console.log(" Calculating The Area of Rectangle");
var areaOfRectangle = function(num1,num2){
    console.log("area of rectangle is 499 * 917=",num1 * num2 );
}
areaOfRectangle(499 ,917);

console.log("==============================================");
var swapValues = function( val1,val2){
    console.log("Before swap :",val1,val2 );
   var temp = val1;
   
   val1 = val2;
   val2 = temp ;
   console.log("After swap :" ,val1,val2);
}
swapValues( "Virat", "Anushka");
swapValues(1000,2000);

console.log("==============================================");
console.log("Calculating Character of string is : ");
var statement = " Js is the most popular language" ;
console.log("given string is a : ",statement);
console.log("the total character of string : " ,statement.length);
console.log(" character at index 6 :",statement.charAt(6));
console.log("character at index  11 : ",statement.charAt(11));

var lengthTotal = statement.length
console.log("the last character at string is : ",statement.charAt(lengthTotal-1));
console.log("the first character as string is :",statement.charAt(1));
var length = function(val){
console.log("the square of string length is : ",val * val );
}
length(32)