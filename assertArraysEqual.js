const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(eqArrays) {
  eqArrays === true ? console.log("Assertion passed") : 
  console.log("Assertion failed");
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertArraysEqual(eqArrays([1, 2, [3],], [1, 2]));