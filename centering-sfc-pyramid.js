var centeringSfcPyramid = function(n){
  var message = "";
  var counter = 0;
  var z = 1;
  var m = 5; 
  var kuhaku = "  ";
  

  while(counter < n){
    var apple = m - z;
    var banana = kuhaku.repeat(apple); 
    message =  message + "SFC ";
    counter = counter + 1;
    z = z + 1;
  }
  return banana + message;
}

var output;
var counter = 1;

while(counter <= m){
  output= centeringSfcPyramid(counter);
  console.log(output);
  counter = counter + 1;
};