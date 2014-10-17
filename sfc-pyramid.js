var sfcPyramid = function(n){
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
var n = 5;

while(counter <= n){
  output = sfcPyramid(counter);
  console.log(output);
  counter = counter + 1;
}