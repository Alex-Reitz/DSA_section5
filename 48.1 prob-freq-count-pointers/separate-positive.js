// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] < 0 && arr[right] > 0) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    } else if (arr[left] > 0) {
      left++;
    } else {
      right--;
    }
  }
  return arr;
}

module.exports = separatePositive;
