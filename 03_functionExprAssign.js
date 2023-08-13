var square = function(num1) {
var result = num1*num1;
  console.log(`Square of the number ${num1} is : ${result}`);
}
square(5);
square(6); 
square(25);
square(100);
square(67.89);
square(59);
console.log(`type of variable is : ${typeof square}`);

console.log(`----------------- step 2 -----------------------------------`);

var arearect = function(){
 var length = 499;
 var width = 917;
 var area = length*width;
 console.log(`area of rectangle is : ${area}`);   
}
arearect();
console.log(`----------------- step 3 -----------------------------------`);

var swapValues = function(num1, num2) {
var num1,num2,num3;
console.log(`before swap value 1 is ${num1} and value 2 is ${num2}`);
num3=num1;
num1=num2;
num2=num3;
console.log(`after swap value 1 is ${num1} and value 2 is ${num2}`);
console.log(`--------------------------------------------------------`);
}
var n1 = "mahi"
var n2 = "Raina"

var n3 = 55
var n4 = 77
swapValues(n1,n2);
swapValues(n3,n4);

console.log(`-------------------------- Step4 --------------------------------`);

var message = function(){
    var greet = "JS is the most popular language of the internet"
    console.log(`total character of the string is :${greet.length}`);
    console.log(`character of 6 is :${greet.charAt(6)}`);
    console.log(`character of 11 is :${greet.charAt(11)}`);
    console.log(`last charcter at number is :${greet.length-1}`);
    console.log(`last character is :${greet.charAt(46)}`);
    console.log(`first character is :${greet.charAt(0)}`);
    console.log(`third last charcter at number is :${greet.length-3}`);
    console.log(`third last character is :${greet.charAt(44)}`)
    var result = greet.split(" ");
    var wordCount = result.length
    console.log(`The total number of word of given string is : ${wordCount}`);
    var square = wordCount*wordCount;
    console.log(`square of words of string is: ${square}`);
    
}

message();