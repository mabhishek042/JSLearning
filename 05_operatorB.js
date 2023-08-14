var greaterNumber = function(arg1, arg2){

var result = arg1>arg2?arg1:arg2;
console.log(`number ${arg1} and number ${arg2} between greater number is: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`------------------------ Step 2 ----------------------------`);
var isEvenOrOddNum = function(arg1) {
    var result = arg1%2==0 ? console.log(`Given number is even`): console.log(`Given number is odd`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);

console.log(`------------------------ Step 3 ----------------------------`);
var wordLength = function(arg1){
    var result = arg1.length
    var show = result%2==0? console.log(`The Word length is "Even"`):console.log(`The Word length is "odd"`);
    
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");
console.log(`-------------------------------------------------------------`);
var OddEven = function(value) {
    var result = value.length%2==0?`Even`:`Odd`;
    return result;
    }
    var result = OddEven("Value is good");
    console.log(result);