
function multiply(num1, num2) {
    return num1 * num2;
 }
 
 function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
 }
 
 // This function returns a string padded with leading zeros
 function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  } 
 
 function power(base, exponent) { 
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 } 
 
 function greet(who) {
     console.log("Hello " + who);
 }
 