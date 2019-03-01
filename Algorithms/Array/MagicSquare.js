// A 3x3 normal magic square is a 3x3 grid where the numbers on each row, each column and both diagonals all add up to the same number, and the square contains the numbers 1 to 9 exactly. For example, the following is a magic square.
// 4     9     2
// 3     5     7
// 8     1     6
// Implement a method which, give a two dimensional 3x3 array of integers returns a boolean that tells us if the given 3x3 grid is magic square or not.
//


function isMagicSquare(dmArr){
  var isMs = true;
  var sum = 0;
  var columnSum = 0;
  var diagonalSum = 0;
  var reverseDiagonalSum = 0;
  var arr = [];
  var magicSum =0;
  for(var i=0; i<dmArr.length; i++){
    magicSum += dmArr[0][i];
  }
  var j=0,k=0;
  for(j=0; j<dmArr.length; j++){
    for(k=0; k<dmArr.length; k++){
      sum+=dmArr[j][k];
      columnSum+=dmArr[k][j];
    }
    if((sum !== magicSum) || (columnSum !== magicSum)){
      isMs =false;
      sum = 0;
    }
  }
   // diaganol
  for(j=0; j<dmArr.length; j++){
     sum+=dmArr[j][j];
  }
  if(sum !== magicSum){
      isMs =false;
      sum = 0;
    }

    for(j=0; j<dmArr.length; j++){
     sum+=dmArr[j][dmArr.length-1-j];
  }
  if(sum !== magicSum){
      isMs =false;
      sum = 0;
    }
  return isMs;
}


console.log(isMagicSquare([[1,2,3],[4,5,6],[7,8,9]]))
