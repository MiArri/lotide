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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed.`);
  }
};

const middle = function(arr) {
  let middleResult = [];
  let i = Math.round(arr.length / 2) - 1;
  if (arr.length === 1 || arr.length === 2) {
    middleResult = [];
  } else if (arr.length % 2 === 0) {
    middleResult = arr.slice(i, i + 2);
  } else if (arr.length % 2 !== 0) {
    middleResult = arr.slice(i, i + 1);
  }
  return middleResult;
};

//test code


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [0, 2]);