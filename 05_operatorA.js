var squareOfWordLength = function(arg){
  var arg1 = arg.split(" ");
  var arg2 = arg1.length;
  console.log(`words length is : ${arg2}`);
  var square = (arg2 * arg2);
  console.log(`words length square is : ${square}`);

}

squareOfWordLength("javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart typing");

var stringArg = function(){
    var greet = "I am Angular Developer";
    var result = greet.length;
    console.log(`the total length of given string is : ${result} `);
    console.log(`-----------------------------------------------------`);
    var wordCount = greet.split(" ");
    var words = wordCount.length;
    var division = result/words;
    console.log(words);
    console.log(`total string length devided by string words is : ${division}`);
    console.log(`-----------------------------------------------------`);
    var multiply = result*words;
    console.log(`total string length multiply by string words is : ${multiply}`);

}
stringArg();