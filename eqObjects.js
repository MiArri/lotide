const assertEqual = require ('./assertEqual');
const eqArrays = require ('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysFirst = Object.keys(object1);
  const keysSecond = Object.keys(object2);
  if (keysFirst.length !== keysSecond.length) {
    return false;
  }
  for (const key of keysFirst) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;