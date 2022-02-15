# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @elena_chernikova/lotide`

**Require it:**

`const _ = require('@elena_chernikova/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(head)`: the function returns the first item in the array;
- `function2(tail)`: the function returns the "tail" of an array: everything except for the first item (head) of the provided array;
- `function3(assertEqual)`: the function compares two values it takes in and print out a message telling us if they match or not;
- `function4(eqArrays)`: the function compares two arrays;
- `function5(assertArraysEqual)`: the function for asserting that two arrays are equal;
- `function6(assertObjectsEqual)`: the function for asserting that two objects are equal;
- `function7(countOnly)`: the function takes in a collection of items and returns counts for a specific subset of those items;
- `function8(countLetters)`: the function takes in a sentence (as a string) and then return a count of each of the letters in that sentence;
- `function9(letterPositions)`: the function returns all the indices (zero-based positions) in the string where each character is found;
- `function10(findKeyByValue)`: the function takes in an object and a value. It should scan the object and return the first key which contains the given value;
- `function11(eqObjects)`: the function takes in two objects and returns true or false, based on a perfect match;
- `function12(findKey)`: the function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value;
- `function13(map)`: the function takes in two arguments: an array to map, a callback function. The map function will return a new array based on the results of the callback function;
- `function14(takeUntil)`: the function takes in two arguments: an array and a callback function. The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value;
- `function15(without)`: the function takes in a source array and a itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.
- `function16(middle)`: the function The middle function returns an array with only the middle element(s) of the provided array;
