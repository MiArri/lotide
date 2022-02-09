const without = function(sourceArr, itemsToRemoveArr) {
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== itemsToRemoveArr[i]) {
      newArr.push(sourceArr[i]);
    }
  } 
  return newArr; 
};

const eqArrays = function(newArr, sourceArr) {
  if (newArr.length !== sourceArr.length) {
    return false;
  }
  for (let i = 0, len = newArr.length; i < len; i++) {
    if (newArr[i] !== sourceArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(eqArrays) {
  eqArrays === true ? console.log("Assertion passed") :
    console.log("Assertion failed");
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ['1', 'hello', [8]]));

