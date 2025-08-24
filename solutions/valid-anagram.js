/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "racecar";
let t = "carrace";

const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const characters = new Set();
    
    for (let char of s) {
        characters[char] = (characters[char] || 0) + 1;
    }

    for (let char of t) {
        characters[char] = (characters[char] || 0) - 1;
    }

    for (let key in characters) {
        if(characters[key] !== 0){
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s, t));