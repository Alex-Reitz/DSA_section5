function bubbleSort(arr) {
  let i, j;
  let len = arr.length;
  let isSwapped = false;

  for (let i = 0; i < len; i++) {
    isSwapped = false;
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  console.log(arr);
  return arr;
}

module.exports = bubbleSort;
