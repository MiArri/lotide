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

module.exports = middle;


