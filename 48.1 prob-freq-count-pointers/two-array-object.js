// add whatever parameters you deem necessary

function twoArrayObject(keys, values) {
  let answer = {};
  for (let i = 0; i < keys.length; i++) {
    answer[keys[i]] = values[i] || null;
  }
  return answer;
}

module.exports = twoArrayObject;
