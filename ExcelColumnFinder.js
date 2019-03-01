// c=3

// z - 26

//26 , 52

// input - a ,aa
// output - 1 , 27



function findColumnnumber(input){
   // input --- AB
    // first letter - A - initalize i
    // second letter - B - init j
    let startIndex =1;
    let endIndex = 26;
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result =0;
    let i =0;
    let j=0;
    for(i=0; i<input.length;i++){
        for(let j=input.length-1;j>input.length;j--){
            math.pow(letters.length,j) * letters.indexOf(input[i]);
            result += letters.indexOf(input[i]);
        }
    }
    return result;

}

console.log(findColumnnumber('AB'));



 function obj(name){
    this.name = name;
}

obj.prototype.getName()






var c = obj("yogamani");
console.log()


