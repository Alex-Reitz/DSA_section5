// add whatever parameters you deem necessary
function createFrequencyObject(num) {
  let splitNum = num.toString().split("");
  let frequencies = new Map();
  for (let digit of splitNum) {
    let valCount = frequencies.get(digit) || 0;
    frequencies.set(digit, valCount + 1);
  }
  return frequencies;
}
function sameFrequency(num1, num2) {
  let num1Object = createFrequencyObject(num1);
  let num2Object = createFrequencyObject(num2);
  if (num1Object.size !== num2Object.size) return false;
  console.log(num1Object, num2Object);

  for (let [key, val] of num1Object) {
    testVal = num2Object.get(key);
    if (
      JSON.stringify(testVal) !== JSON.stringify(val) ||
      (testVal === undefined && !num2Object.has(key))
    ) {
      return false;
    }
  }
  return true;
}

module.exports = sameFrequency;
