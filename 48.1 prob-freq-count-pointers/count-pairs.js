// add whatever parameters you deem necessary
function countPairs(arr, target) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let left = 0;
  let right = arr.length - 1;
  let answer = 0;

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      answer = answer + 1;
      left++;
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return answer;
}

module.exports = countPairs;
