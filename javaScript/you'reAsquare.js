//URL--
// https://www.codewars.com/kata/50654ddff44f800200000004

//INSTRUCTIONS--
/* Given an integral number, determine if it's a square number:
Examples:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

//SOLUTION--

var isSquare = function(n){
  //check whether argument is positve number 
 if(n<0){
   return false;
 }

//check whether argument is a square number 
 else if((Math.sqrt(n)%parseInt(Math.sqrt(n)))===0){ 
    return true;
 
 //if argument is equal to 0
 }else if(n===0){ 
    return true;

 }else{
   return false;
 }
}

//TEST_CASES

describe("isSquare", function(){
it("should work for some examples", function(){
 Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
 Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
 Test.assertEquals(isSquare( 3), false, "3 is not a square number");
 Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
 Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
 Test.assertEquals(isSquare(26), false, "26 is not a square number");
});
});