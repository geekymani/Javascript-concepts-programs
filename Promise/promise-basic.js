var isMomHappy=false;
var promise = new Promise(function(resolve,reject){
  if(isMomHappy){
    var mobile = {
      name: "samsung galaxy s4",
      brand: "samsung"
    }
    resolve(mobile);
  }
  else {
    reject(new Error("mom is not happy"));
  }
});
function askmom(){
  promise.then(function(fullfilled)){
    console.log(fullfilled);
  }).catch(function(e){
    console.log(e.mesage);
  });
}

askmom();
