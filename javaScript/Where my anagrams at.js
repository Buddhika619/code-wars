//URL--
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

//INSTRUCTIONS--
/* 
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []



*/

//SOLUTION--

function anagrams(word, input) {
 
    word = word.split('').sort().join('')
    let words = [...input]

    for(let i=0; i< words.length; i++){
      let temp = words[i]
      let sort = words[i].split('').sort().join('')
      words[i] = sort
    }

    return input.filter((item,index) => word === words[index])
}

//TEST_CASES

const assert = require("chai").assert;

describe("Anagrams", function() {
  it("should return a list of all anagrams", function() {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
  });
  
  it("should return an empty array for no anagrams", function() {
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
  });
});
