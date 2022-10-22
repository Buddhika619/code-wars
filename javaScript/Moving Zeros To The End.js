//URL--
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

//INSTRUCTIONS--
/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


*/

//SOLUTION--

function moveZeros(params) {

  let zeroArr = params.filter(el => el === 0)

  params = params.filter(el => el !== 0)
 
  zeroArr.forEach(el => params.push(el))
 
  return params

}

//TEST_CASES

const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});
