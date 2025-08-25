/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2,1,5,3];
let target = 4;

const twoSum = (nums, target) => {
    const oldMap = new Map();

    for (let i=0; i<nums.length; i++) {
        const difference = target - nums[i];
        if (oldMap.has(difference)) {
            return [oldMap.get(difference), i];
        }

        oldMap.set(nums[i], i);
    }

    return [];
};

console.log(twoSum(nums, target));