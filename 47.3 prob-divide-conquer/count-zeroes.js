//given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeros which returns the number of zeroes in the array
function countZeroes(arr) {
    //calles the second function below and finds the first zero
    let firstZero = findFirst(arr);
    if (firstZero === -1) return 0;

    return arr.length - firstZero;
}

//Function to find the index of the first 0 in the array
//sets low pointer to index 0, and high pointer to the last element in the array
function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
        //calculation to find midpoint based on the value of low
        let mid = low + Math.floor((high - low) / 2);
        //first conditional checks for the mid value to be 0 indicating the array is []
        //second two conditionals check to see if the intersection of 1s and 0s has been found, returns that midpoint
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            //if arr[mid]===1 then the intersection of 1s and 0s hasn't been found
            //Calls the findfirst function again, this time with the low parameter set to the midpoint + 1 since the 0s will be further right still
            return findFirst(arr, mid + 1, high);
        }
        //Calls the findfirst function again, this time with the low parameter set to the midpoint - 1 since the 0s will be left of the previous midpoint
        return findFirst(arr, low, mid - 1);
    }
    return -1;
}

module.exports = countZeroes;