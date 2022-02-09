const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  } 
  return result; 
};

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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed.`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed.`);
  }
};

const words = ["hello", "world", "lighthouse"];

assertArraysEqual(
  without(words, ['1', 'hello', [8]]), 
  ["world", "lighthouse"]
);
assertArraysEqual(
  without(words, ['lighthouse', 'hello']), 
  ["world"]
);
assertArraysEqual(
  without(words, ['1', '2', 3]), 
  ["hello", "world", "lighthouse"]
);

/// Verify immutability of the oiginal array
const original = ["hello", "world", "lighthouse"];
const modifiedArray = without(original, ['lighthouse', 'hello']);
assertArraysEqual(original, ["hello", "world", "lighthouse"]);
  