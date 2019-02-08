function removeDuplicate(arr){
    var exists ={},
        outArr = [],
        elm;

    for(var i =0; i<arr.length; i++){
        console.log("count",i);
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}

function removeDuplicateOpt(arr){
    var exists ={},
        elm;

    for(var i =0; i<arr.length; i++){
        console.log("count",i);
        elm = arr[i];
        if(!exists[elm]){
            exists[elm] = true;
        }else {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(removeDuplicate([1,2,3,4,4,2,6,7,8,1,2]));
console.log(removeDuplicateOpt([1,2,3,4,4,2,6,7,8,1,2]));
