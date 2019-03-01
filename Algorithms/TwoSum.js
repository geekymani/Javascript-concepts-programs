// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var num0;
    var num1;
    for(var i=0;i<nums.length-1;i++){
        num0 = i;
        console.log("i=>",i);
        for(var j=i+1;j<nums.length-1;j++){
            num1 = j;
             console.log("j=>",j);
             console.log("nums[i] + nums[j]",(nums[i] + nums[j]));
            if((nums[i] + nums[j]) === target){
                console.log("sdsdsds")
                break;
            }
        }
    }
    return [num0, num1];

};

console.log(twoSum([1,4,5,7,3,9], 10));