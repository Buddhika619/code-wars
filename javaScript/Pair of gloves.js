//URL--
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

//INSTRUCTIONS--
/* 


Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
Examples:

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)


*/

//SOLUTION 1--

function numberOfPairs(gloves){
   let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
   let pairs = 0;
   for (let i=1;i<arr.length;i++){
     if (arr[i-1]===arr[i]){
       pairs++
       i++
     }
   }
   return pairs
}


//SOLUTION 2--

function numberOfPairs(gloves)
{

   gloves = gloves.filter(i => i === i).sort();
   
   let arr1 = [];
   let key = 0;
  
  while(key < gloves.length){
    
    if(gloves[key] === gloves[key+1]){
      arr1.push(gloves[key]);
      key +=2;
    }else{
      key++;
    }
    
  }

  return arr1.length;
  
}

//TEST_CASES

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it("Should work for Example tests", function(){
        let tests = [
          [['red','red'],1],
          [['red','green','blue'],0],
          [['gray','black','purple','purple','gray','black'],3]
        ];

        tests.forEach(a=>{
           assert.strictEqual(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
        });
  });
})
