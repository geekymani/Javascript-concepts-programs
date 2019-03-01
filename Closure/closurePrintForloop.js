function printFruits(fruits){
  for (var i = 0; i<fruits.length; i++) {
    setTimeout( function(){
      console.log( fruits[i] );
    }, i * 1000 );
  }
}

printFruits(["Lemon", "Orange", "Mango", "Banana"]);

function printFruits1(fruits){
  for (var i = 0; i<fruits.length; i++) {
    (function(){
      var current = i;                    // define new variable that will hold the current value of "i"
      setTimeout( function(){
        console.log( fruits[current] );   // this time the value of "current" will be different for each iteration
      }, current * 1000 );
    })();
  }
}

printFruits1(["Lemon", "Orange", "Mango", "Banana"]);


function printFruits2(fruits){
  for (var i = 0; i<fruits.length; i++) {
    (function(current){
      setTimeout( function(){
        console.log( fruits[current] );
      }, current * 1000 );
    })( i );
  }
}

printFruits2(["Lemon", "Orange", "Mango", "Banana"]);