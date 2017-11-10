let resultA, resultB, resultC;

function addNumber(a,b){
  return Promise.resolve(a+b);
}

 addNumber(1,2).then(function(success){
   return sucess;
 }).then(function(success){
   addNumber(sucees,3);
 }).then(function(success){
   return sucess;
 }).then(function(success){
   console.log("total"+success);
 })
