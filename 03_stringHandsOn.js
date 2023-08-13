function stringHandsOn() {
  var str = "    Hey you are doing good, keep it up    ";

  console.log(`----------------Step 1--------------------------`);
  console.log(`${str}`);

  console.log(`----------------Step 2--------------------------`);
  var result = str.length
  console.log(`total length of string is : ${result}`);

  console.log(`----------------Step 3--------------------------`);
  var result = str.trim()
  var length = result.length
  console.log(`before trim length is : ${str.length}, and after trim length is : ${length}`);

  console.log(`----------------Step 4--------------------------`);
  var result = str.length - length;
  console.log(`total number of extra spaces : ${result}`);

  console.log(`----------------Step 5--------------------------`);
  var show = str.trim()
  var result = show.charAt(0)
  var result1 = show.charAt(33)
  console.log(`first and last character of string: ${result}, ${result1}`);

  console.log(`----------------Step 6--------------------------`);
  var show = str.trim()
  var strSplit = show.split(' ');
  console.log(`${strSplit}`);
  var words = strSplit.length
  console.log(`total words count is : ${words}`);

  console.log(`----------------Step 7--------------------------`);
  
  var result = str.indexOf('good');
  console.log(`the index of word “good” is : ${result}`);

  console.log(`----------------Step 8--------------------------`);
  var result = str.slice(22)
  console.log(`${result}`);

  console.log(`----------------Step 9--------------------------`);
  var result = str.trim()
  var show = result.includes('up')
  console.log(`Is String ends with "up"? : ${show}`);

  console.log(`----------------Step 10--------------------------`);
  var result = str.trim()
  var show = result.includes('Hey')
  console.log(`Is String start with "Hey"? : ${show}`);

  
  
}
stringHandsOn();