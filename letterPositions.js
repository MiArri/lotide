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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    if (!results[letter]) {
      results[letter] = [i];      
    } else {
      results[letter].push(i);
    } 
  }
  return results;
};

const letters = letterPositions("hello")
assertArraysEqual(letters.e, [1]);
assertArraysEqual(letters.h, [0]);
assertArraysEqual(letters.l, [2,3]);
assertArraysEqual(letters.o, [4]);