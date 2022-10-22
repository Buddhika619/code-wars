//URL--
// https://www.codewars.com/kata/559a28007caad2ac4e000083

//INSTRUCTIONS--
/* 

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text
Hint:

See Fibonacci sequence
Ref:

http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216



*/

//SOLUTION--

function perimeter(n) {
  let fibval = 0
  fibArr = []
   for(let i = 0; i < n+1; i++) {
     if(i === 0 || i === 1) {
       fibArr.push(1)
       fibval = 1;
     }else{
       fibval = fibArr[fibArr.length-2] + fibArr[fibArr.length-1]
       fibArr.push(fibval)
     }
   }
  return fibArr.reduce((acc,cv) => acc +cv ,0)*4
}

//TEST_CASES

const chai = require('chai');
const assert = chai.assert;

describe("Basic tests",function() {
it("Small numbers",function() {
    assert.strictEqual(perimeter(0), 4)
    assert.strictEqual(perimeter(5), 80)
    assert.strictEqual(perimeter(7), 216)
    assert.strictEqual(perimeter(20), 114624)
    assert.strictEqual(perimeter(30), 14098308)
})})