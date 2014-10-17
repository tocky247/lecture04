var randomSFCPyramid = function(n){
  var message = "";
  var counter = 0;

  while(counter < n){
  message = message + "SFC ";
  counter = counter + 1;
  } 
  return message;
};

var output;
var counter = 1;
var n = Math.random() * 100;
Math.floor(n);

while(counter <= n){
  output = randomSFCPyramid(counter);
  console.log(output);
  counter = counter + 1;
}