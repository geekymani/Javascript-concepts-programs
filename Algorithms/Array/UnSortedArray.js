function findElement(arr, searchKey){
    for(var i=0;i<arr.length-1;i++){
        if(arr[i] === searchKey){
            return arr[i];
        }
    }
    return -1;
}

console.log(findElement([1,4,7,2,9,3,8]),8);

