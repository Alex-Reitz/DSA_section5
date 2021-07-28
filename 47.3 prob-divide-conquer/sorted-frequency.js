//Given an array and a number, write a function called sortedFrequency that counts the occurences of the number in the array
//Returns -1 if the number is not in the array

function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
}

expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4);

//Find the first index of the target value in the array, binary search
function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        //
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high);
        } else {
            return findFirst(arr, num, low, mid - 1);
        }
    }
    return -1;
}

//Finds the last value of the target index in the array, binary search
function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        //what
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1);
        } else {
            return findLast(arr, num, mid + 1, high);
        }
    }
    return -1;
}

module.exports = sortedFrequency;