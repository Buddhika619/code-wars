//URL--
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

//INSTRUCTIONS--
/* Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]



*/

//SOLUTION--

function towerBuilder(nFloors) {
  var result = [];
  var starNumber = 1;
  for (i=1; i<=nFloors; i++) {
    result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
    starNumber += 2;
  }
  return result;
}

//TEST_CASES
  
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});
