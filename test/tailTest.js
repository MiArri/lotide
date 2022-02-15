const assert = require('chai').assert;
const head   = require('../tail');

const words = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("doesn't mutate the original  array", () => {
    assert.equal(words.length, 3);
  });
});