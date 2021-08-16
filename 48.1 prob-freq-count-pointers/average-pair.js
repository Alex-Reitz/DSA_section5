// add whatever parameters you deem necessary
function averagePair(arr1, target) {
  let left = 0;
  let right = arr1.length - 1;
  while (left < right) {
    let average = (arr1[left] + arr1[right]) / 2;
    if (average == target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

module.exports = averagePair;
