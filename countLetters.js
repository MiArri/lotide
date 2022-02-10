const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const results = {};
const countLetters = function(str) {
  for (const letter of str) {
    if (results[letter] !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


const counts = countLetters("hello world");
assertEqual(counts.h, 1);
assertEqual(counts.e, 1);
assertEqual(counts.l, 3);
assertEqual(counts.o, 2);
assertEqual(counts.w, 1);
assertEqual(counts.r, 1);
assertEqual(counts.d, 1);
