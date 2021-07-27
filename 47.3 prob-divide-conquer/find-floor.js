//Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array
//The floor of x in an array is the largest element in the array which is smaller than or equal to x
//If the floor does not exist return -1

//function declaration with parameters, array to search, number to find, low pointer set to 0, and high pointer set to the last element in the array
function findFloor(arr, num, low = 0, high = arr.length - 1) {
    //case for if the num is not found in arr
    if (low > high) return -1;
    //case for if the number is greater than all other elements in the arr, returns the highest available number in arr
    if (num >= arr[high]) return arr[high];
    //sets the midpoint
    let mid = Math.floor((low + high) / 2);
    //returns the value at the midpoint if it's equal to x
    if (arr[mid] === num) return arr[mid];
    //array isn't blank, value to the left of midpoint is less than or equal to num
    //and num is less than the value at the midpoint - meaning there wouldn't be a better option available
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    }
    //If the number is less than the value at the midpoint call the function again but
    //set the new high pointer to the position one left of the last midpoint
    //If we want 1 less than the num or the next closest option and num is currently less than the value at midpoint
    //We have to look to the left of that midpoint in the next step
    if (num < arr[mid]) {
        return findFloor(arr, num, low, mid - 1);
    }
    //Looks for the correct answer to the right of the last midpoint in the next step since num > arr[mid] in the current step
    return findFloor(arr, num, mid + 1, high);
}

module.exports = findFloor;