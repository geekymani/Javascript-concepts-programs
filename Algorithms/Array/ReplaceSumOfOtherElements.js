function RepelaceSumOfOtherElements(arr){
    for(var i=0;i<arr.length-1;i++){
        var sum = 0;
        for(var j=0;j<arr.length-1;j++){
            if(i !==j){
                sum += arr[j];
            }
        }
    }
}