var fn7 = (a, b, ...theRest) => {
    console.log(a);
    console.log(b);
    console.log(theRest);
}
fn7('A', 'B', 'C', 'D', 'E');

//Destructuring assignment
let testArr = ['l', 'm', 'n', 'o', 'p'];
fn7(...testArr);
