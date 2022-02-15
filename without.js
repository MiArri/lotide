const assertArraysEqual = require ('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
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

module.exports = without;