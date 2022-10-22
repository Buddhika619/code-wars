//URL--
// https://www.codewars.com/kata/52774a314c2333f0a7000688

//INSTRUCTIONS--
/* 
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100



*/

//SOLUTION--

function validParentheses(parens) {
  let  arr = parens.split('')
  let arr2 = []
  for(let i=0; i < arr.length; i++){
   
    arr2.push(arr[i]);
    
    if(arr2[arr2.length-1] === ')' && arr2[arr2.length-2] === '(' ){
      arr2.pop(arr2[i])
      arr2.pop(arr2[i-1])
    }
   
  }

 return arr2.length < 1 && arr.length%2 === 0 ? true : false; 
  
}

//TEST_CASES

const { assert } = require('chai');

describe("Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses( "(" ), false));
  it(`values: ")"`, () => assert.strictEqual( validParentheses( ")" ), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses( "" ), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses( "()" ), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses( "())" ), false));
});

