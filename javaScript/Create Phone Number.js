//URL--
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

//INSTRUCTIONS--
/* 

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/

//SOLUTION--
function createPhoneNumber(numbers){

   let numberStr = numbers.join('')
   
   let returnArr = []
   if(numberStr.length === 10){
      returnArr[0] = '('
      returnArr[1] = numbers[0]
      returnArr[2] = numbers[1]
      returnArr[3] = numbers[2]
      returnArr[4] = ')'
      returnArr[5] = ' '
      returnArr[6] = numbers[3]
      returnArr[7] = numbers[4]
      returnArr[8] = numbers[5]
      returnArr[9] = '-'
      returnArr[10] = numbers[6]
      returnArr[11] = numbers[7]
      returnArr[12] = numbers[8]
      returnArr[13] = numbers[9] 
   }

   return returnArr.join('')
}
//TEST_CASES

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});
