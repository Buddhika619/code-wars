//URL--
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

//INSTRUCTIONS--
/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));


*/

//SOLUTION--

function zero(val) {
  if(!val){
   return 0;
  }else{
   const x = 0 + val
   return parseInt(eval(x))
  }
}
function one(val) {
  if(!val){
   return 1;
  }else{
   const x = 1 + val
   return parseInt(eval(x))
  }
}
function two(val) {
  if(!val){
   return 2;
  }else{
   const x = 2 + val
   return parseInt(eval(x))
  }
}
function three(val) {
  if(!val){
   return 3;
  }else{
   const x = 3 + val
   return parseInt(eval(x))
  }
}
function four(val) {
  if(!val){
   return 4;
  }else{
   const x = 4 + val
   return parseInt(eval(x))
  }
}
function five(val) {
 if(!val){
   return 5;
  }else{
   const x = 5 + val
  return parseInt(eval(x))
  }
}
function six(val) {
 if(!val){
   return 6;
  }else{
   const x = 6 + val
   return parseInt(eval(x))
  }
}
function seven(val) {
  if(!val){
   return 7;
  }else{
   const x = 7 + val
   return parseInt(eval(x))
  }
}
function eight(val) {
  if(!val){
   return 8;
  }else{
   const x = 8 + val
   return parseInt(eval(x))
  }
}
function nine(val) {
  if(!val){
   return 9;
  }else{
   const x = 9 + val
   return parseInt(eval(x))
  }
}

function plus(val) {
 return "+" + val;
}
function minus(val) {
 return "-" + val;
}
function times(val) {
  return "*" + val;
}
function dividedBy(val) {
 return "/" + val;
}

//TEST_CASES

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35);
    assert.strictEqual(four (plus     (nine ())), 13);
    assert.strictEqual(eight(minus    (three())),  5);
    assert.strictEqual(six  (dividedBy(two  ())),  3);
  });
});

