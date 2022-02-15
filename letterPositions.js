const assertArraysEqual = require ('./assertArraysEqual');

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

module.exports = letterPositions;