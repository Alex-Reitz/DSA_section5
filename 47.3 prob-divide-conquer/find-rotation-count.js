//Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order
//The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

//use the minimum element index to determine the number of rotations
function findRotationCount(arr, low = 0, high = arr.length - 1) {
    //case for if the rotation count is 0
    if (high < low) return 0;
    //case for if the array is all the same numbers
    if (high === low) return low;
    //sets midpoint
    let mid = Math.floor((low + high) / 2);
    //
    if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid;
    }

    //if the the value at arr[high] is greater than the value at the midpoint, set the high pointer to one left of the midpoint
    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid - 1);
    }
    //the value at the array[high] is lower than the midpoint, set the low pointer to the current midpoint + 1
    return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount;