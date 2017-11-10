var isMomHappy = false;
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

var showOff = function(phone) {
  return new Promise(resolve,reject){
    var message = "Hey I Have a "+ phone.brand +" phone and brand name is "+phone.brand
  }
}

function askmom(){
  promise.then(showOff).then(function(fullfilled)){
    console.log(fullfilled);
  });
}

askmom();
