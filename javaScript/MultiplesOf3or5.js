//URL--
// https://www.codewars.com/kata/54e6533c92449cc251001667

//INSTRUCTIONS--
/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

//SOLUTION--

unction solution(number){
  //check whether the argument is positive
  if(number < 0){
     return 0;
  }else{
    let mulArr = [];
  //inserting multiples of 3 or 5 into mulArr
    for(let i = 0; i < number; i++ ){
       if((i%3===0) || (i%5===0)){
       mulArr.push(i);
      }
    } 
  //returning the total 
  return mulArr.reduce((acc, currentVal) => acc + currentVal ,0) 

   }
}


//TEST_CASES

const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
  test(20,78)
  test(200,9168)
})

describe("smallest cases", function() {
  test(-1,0)
  test(0,0)
  test(1,0)
  test(2,0)
  test(3,0)
  test(4,3)
  test(5,3)
  test(6,8)
})

describe("random cases", function() {
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function _solution(number){
    let sum = 0;
    
    for(let i = 1; i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }
  
  for(let i = 0; i < 100; i++) {
    let rand = randint(0, 10**randint(1, 5)) - 100
    test(rand, _solution(rand));
  }
})