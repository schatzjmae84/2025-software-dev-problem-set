/** 
 * @param {number[]} nums
 * @return {boolean}
 */

let nums = [1, 2, 3, 4];
let numbers = [1, 1, 2, 4, 4, 5, 6];

const containsDuplicate = (nums) => {    
    for(i=0; i< nums.length; i++) {
        for(j=i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate(nums)); // returns false

const hashDuplicate = (numbers) => { 
    const numSet = new Set();
    for (const number of numbers) {
        if (numSet.has(number)) {
            return true;
        }
        numSet.add(number); 
    }
    return false;
};

console.log(hashDuplicate(numbers)); // returns true