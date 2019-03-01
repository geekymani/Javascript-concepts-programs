// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].


// function ArrMultiplication(arr){
//     let newArr =[];
//     for(let i=0;i<=arr.length-1;i++){
//         let mulSum = 1;
//         for(let j=0;j<=arr.length-1;j++){
//             if(i!==j){
//                 mulSum = arr[j] * mulSum;
//                 console.log("mulSum",mulSum);
//             }
//         }
//          console.log("mulSum final",mulSum);
//         newArr.push(mulSum);
//     }
//     return newArr;
// }
//
// console.log(ArrMultiplication([1, 2, 3, 4, 5]));
// console.log(ArrMultiplication([5,3,4,2,6,8]));
//
function multiply(nums, p, n) {
    return (n === nums.length) ? 1
      : nums[n] * (p = multiply(nums, nums[n] * (nums[n] = p), n + 1)) + 0*(nums[n] *= p);
}

var arr = [1,2,3,4,5];
multiply(arr, 1, 0);
console.log(arr);


// Recursive function to replace each element of the array with product
// of every other element without using division operator
function  findProduct(arr, n, left, i)
{
	// base case: no elements left on right side
	if (i === n)
		return 1;
    console.log("i--->",i);
     console.log("left--->",left);
	// take back-up of current element
	var curr = arr[i];
     console.log("curr--->",curr);
	// calculate product of the right sub-array
	var right = findProduct(arr, n, left * arr[i], i + 1);
	 console.log("right--->",right);

	// replace current element with product of left and right sub-array
	arr[i] = left * right;

	console.log("arr[i]--->",arr[i]);

	// return product of right sub-array including current element
    console.log("curr * right--->",(curr * right));
	return curr * right;
}

var arr = [5, 3, 4, 2, 6, 8 ];
	var n = arr.length;
	findProduct(arr, n, 1, 0);
	console.log(arr);

