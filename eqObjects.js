// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
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

const eqObjects = function(object1, object2) {
  const keysFirst = Object.keys(object1);
  const keysSecond = Object.keys(object2);
  if (!eqArrays(keysFirst, keysSecond)) {
    return false;
  }
  for (const key of keysFirst) {
    if (object1[key] !== object2[key]) {
      return false;
    } 
  }
  return true;
};
  
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); 

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));


