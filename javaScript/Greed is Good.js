//URL--
// https://www.codewars.com/kata/5270d0d18625160ada0000e4

//INSTRUCTIONS--
/* 

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.



*/

//SOLUTION--

function score( dice ) {

   let input = dice.sort((a,b) => (a-b))

   let total = 0
  
   let points = {
     '111':1000,
      '666':600,
      '555':500,
      '444':400,
      '333':300,
      '222':200,
   }
  
  
  while(input.length > 0){
    
    if(input[1] === input[0] && input[2] === input[0]){
      
         let score = []
         score[0] = input[0]
         score[1] = input[1]
         score[2] =input[2]
         score = score.join('')
         total = total + points[score]
         input.shift()
         input.shift()
         input.shift()
      
    }else if(input[0] === 1){
      
         total = total + 100
         input.shift()
      
    }else if(input[0] === 5){
      
         total = total + 50
         input.shift()
      
    }else{
      
         total = total + 0
         input.shift()
      
    }
   
  }
  
  return total
}

//TEST_CASES

const Test = require('@codewars/test-compat');

describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    Test.expect( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
  });
  
  it( "should value this triplet correctly", function() {
    Test.expect( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
  });
  
  it( "should value this mixed set correctly", function() {
    Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
  });
});