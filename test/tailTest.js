const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require("../tail");

const words = ["Hello", "Lighthouse", "Labs"];

assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(words.length, 3); // original array should still have 3 elements!