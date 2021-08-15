// add whatever parameters you deem necessary
function createFrequencyCounter(str) {
  let frequencies = new Map();
  for (let char of str) {
    let valCount = frequencies.get(char) || 0;
    frequencies.set(char, valCount + 1);
  }
  return frequencies;
}

function constructNote(message, letters) {
  if (message.length === 0) return true;
  if (letters.length === 0) return false;
  //creates the frequency counter objects for both message and letters
  let messageFrequency = createFrequencyCounter(message);
  let letterFrequency = createFrequencyCounter(letters);
  console.log(messageFrequency, letterFrequency);
  for (let letter of messageFrequency.keys()) {
    if (messageFrequency.get(letter) > letterFrequency.get(letter))
      return false;
  }
  return true;
}

module.exports = constructNote;
