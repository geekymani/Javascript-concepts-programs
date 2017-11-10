
//Basic
var iterationCount = 0;
function getFibonacci (num) {
iterationCount=iterationCount+1;
console.log("iterationCount",iterationCount); //177
  if (num < 2) {
      return num;
  }
  return getFibonacci(num - 1) + getFibonacci(num - 2);
}
alert(getFibonacci(10));

// Optimized code
var iterationCount = 0;
function getFibonacci (num) {
    var cache = [];
    var fib = function(value) {
    iterationCount=iterationCount+1;
    console.log("iterationCount",iterationCount);
        if(value < 2 ) return value;
        if( cache[value] ) return cache[value];

        cache[value] = (fib(value -1)) + (fib(value-2));
        return cache[value];
    };
    return fib(num);
}
alert(getFibonacci(10));
