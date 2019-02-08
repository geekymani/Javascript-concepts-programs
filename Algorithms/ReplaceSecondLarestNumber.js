function replaceSecondLargestNum(arr){
    for(var i=0;i<arr.length-1;i++)
    {
        for(var j=i+1;j<arr.length-1;j++){
            if(arr[i]<arr[j]){
                arr[i] = arr[j];
                break;
            }
        }
    }
    return arr;
}

console.log(replaceSecondLargestNum([1,3,2,6,8,4,9,7]));


function findSecondLarestElement(arr){
    var firstElement=0;
    var secondElement=0;
    for(var i=0;i<arr.length;i++){
        if(firstElement<arr[i]){
            secondElement=firstElement;
            firstElement = arr[i];
        }
        else if((firstElement !== arr[i]) && secondElement<arr[i]){
            secondElement = arr[i];
        }
    }

    if(secondElement !==0){
        console.log("second larest number===>",secondElement);
    }else{
        console.log("No second larest number from given array");
    }

}

console.log(findSecondLarestElement([1,3,2,6,8,4,9,7]));
