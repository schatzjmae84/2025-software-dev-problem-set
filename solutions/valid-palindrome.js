/**
 * @param {string} s
 * @return {boolean}
 */

s = "A man, a plan, a canal: Panama";

isPalindrome = (s) => {
    let l = 0,
        r = s.length - 1;

        while (l < r) {
            while (l < r && !alphaNum(s[l])) {
                l++;
            }
            while (r > l && !alphaNum(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }


alphaNum = (char) => {
    return (
            (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
    );
};

console.log(isPalindrome(s));