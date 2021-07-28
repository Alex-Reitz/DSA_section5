/** product: calculate the product of an array of numbers. */

function product(nums) {
    function helper(nums, idx) {
        if (idx === nums.length) return 1;
        return nums[idx] * helper(nums, idx + 1);
    }
    return helper(nums, 0);
}

/* helper([3, 4], 0);
3 * helper([3, 4], 0 + 1);
3 * 4 * helper([3, 4], 2);
3 * 4 * 1; */
/** longest: return the length of the longest word in an array of words. */
//["hello", "hi", "hola"];

function longest(words, idx = 0, maxValue = 0) {
    if (idx === words.length) return maxValue;
    else {
        maxValue = Math.max(words[idx].length, maxValue);
        return longest(words, idx + 1, maxValue);
    }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, builtStr = "") {
    if (idx >= str.length) return builtStr;
    builtStr += str[idx];
    return everyOther(str, idx + 2, builtStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
    let leftIdx = idx;
    let rightIdx = str.length - idx - 1;
    if (leftIdx >= rightIdx) return true;
    if (str[leftIdx] !== str[rightIdx]) return false;
    return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
    if (idx === arr.length) return -1;
    if (arr[idx] === val) return idx;
    return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reversedString = "") {
    if (idx === str.length) return reversedString;
    let rightIdx = str.length - idx - 1;
    reversedString += str[rightIdx];
    return revString(str, idx + 1, reversedString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let answer = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") answer.push(obj[key]);
        if (typeof obj[key] === "object") answer.push(...gatherStrings(obj[key]));
    }
    return answer;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    while (high >= low) {
        let midpoint = Math.floor((high + low) / 2);
        if (arr[midpoint] === val) {
            return midpoint;
        } else if (arr[midpoint > val]) {
            return binarySearch(arr, val, (low = 0), (high = midpoint - 1));
        } else {
            return binarySearch(arr, val, (low = midpoint + 1), high);
        }
    }
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};