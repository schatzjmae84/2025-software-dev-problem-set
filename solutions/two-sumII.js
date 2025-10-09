/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

let numbers = [2,7,11,15];
let target = 9;

const twoSum = (numbers, target) => {

    let l = 0,
        r = numbers.length - 1;

    while (l < r) {

        const newSum = numbers[l] + numbers[r];
        if (newSum > target) {
            r--;
        } else if(newSum < target) {
            l++;
        }else{
            return [l + 1, r + 1];
        }
    }    
    return [];
};

console.log(twoSum(numbers, target));