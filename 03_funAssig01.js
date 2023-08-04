function show() {
    var a=15; 
    var b=98;
    var c; 
    c=a+b;

    console.log("addition of a+b is ->",c);
    console.log("----------------------------------------");
}
show();

function watch() {
    console.log("I love JS");
    console.log("----------------------------------------");
    
}
watch();

function personalDetails(firstName, lastName, collegeName) {
    console.log(firstName, lastName, collegeName);
    console.log("---------------------------------------------");

}
var a = "Abhishek";
var b = "More";
var c = "College of Engineering of Pune";

personalDetails(a,b,c);

function swapValues(arg1, arg2, temp) {
    console.log("before swap value is -> ",arg1, arg2);
    temp = arg1;
arg1 = arg2;
arg2 =  temp;  
console.log("after swap value is ->",arg1,arg2);
console.log("________________________________");
}
var p = "Virat"
var q = "Anushka"
swapValues(p,q);

num1=1000;
num2 = 2000;
swapValues(num1, num2);

function addThreeValues(add1, add2, add3){
   var add4 = add1 + add2 + add3;
   console.log("Addition of values :- ", add4); 
   console.log("--------------------------------------");

}

a=10.23;
b=600;
c=40;
addThreeValues(a,b,c);

e="Hello "
f="Good "
g="Morning"
addThreeValues(e,f,g);
