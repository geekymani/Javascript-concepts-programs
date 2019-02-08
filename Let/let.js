let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 1


//var based examples
var y = 1;

if (y === 1) {
    var y = 2;

    console.log(y);
    // expected output: 2
}

console.log(y);
// expected output: 1


//At the top level of programs and functions, let, unlike var, does not create a property on the global object. For example:

var a = 'global';
let b = 'global';
console.log(this.a); // "global"
console.log(this.b); // undefined

