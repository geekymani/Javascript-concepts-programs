function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
        rtnStr +=str[i];
    }
    return rtnStr;
}


//What is the run time complexity?
//O(n)

function reverseUsingArray(str){
    var rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2 ) return str;

    for(var i = str.length-1; i>=0;i--){
        rtnStr.push(str[i]);
    }
    return rtnStr.join('');
}


//I can loop through half of the index and it will save little bit. (this is kind of useless, might not impress interviewer)
function reverseHalfString(str) {
    str = str.split('');
    var len = str.length,
        halfIndex = Math.floor(len / 2) - 1,
        revStr;
    for (var i = 0; i <= halfIndex; i++) {
        revStr = str[len - i - 1];
        str[len - i - 1] = str[i];
        str[i] = revStr;
    }
    return str.join('');
}

function reverseRecursion (str) {
    if (str === "") {
        return "";
    } else {
        console.log("str",str);
        console.log("sbstr",str.substr(1));
        console.log("char",str.charAt(0));
        return reverseRecursion(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse("abcdefghijklmnopqrstuvxyz"));
console.log(reverseUsingArray("abcdefghijklmnopqrstuvxyz"));
console.log(reverseHalfString("abcdefghijklmnopqrstuvxyz"));
console.log(reverseRecursion("abcdefghijklmnopqrstuvxyz"));
