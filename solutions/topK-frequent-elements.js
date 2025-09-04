/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let nums = [1,2,2,3,3,3];
let k = 2;

const topKFrequent = (nums, k) => {
    count = {};
    frequency = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    for (const n in count) {
        frequency[count[n]].push(parseInt(n));
    }

    result = [];
    for (let i=frequency.length - 1; i>0; i--) {
        for (const n of frequency[i]){
            result.push(n);
            if (result.length === k)
                return result;
        }        
    }
};

console.log(topKFrequent(nums, k));