

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}


function sumFact(x){
   var sumFact = 0;
   for(var i =0;i<x;i++){
      sumFact += fact(x-i);
   }
   return sumFact;
}

function sumFact1(n){
   var s=0,h=1;
    for(var m=1;m<=n;m++)
    {
       console.log("h,m ==>",h,m);
        h=h*m;
        console.log("prev s==>",s);
        s=s+h;
         console.log("h(h*m),s(s+h)==>",h,s);
    }
    return s;
}

//console.log(sumFact(5));
console.log(sumFact1(5));
