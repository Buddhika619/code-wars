//URL--
// https://www.codewars.com/kata/54e6533c92449cc251001667

//INSTRUCTIONS--
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

//SOLUTION--

function uniqueInOrder (iterable){
    //if argument is a string
    if(typeof iterable === 'string' ){
          let array = iterable.split('');
          let newArr = [];
      
          for(let i=0; i<array.length; i++){
            if(array[i] !== array[i+1]){
            newArr.push(array[i]);
            }
          }
      
         return newArr;
    //if argument is a array 
    }else{
          let array = iterable;
          let newArr = [];
      
          for(let i=0; i<array.length; i++){
            if(array[i] !== array[i+1]){
            newArr.push(array[i]);
            }
          }
      
          return newArr;
    }
    
    
}

//TEST_CASES

describe("lets test it", function(){
  it("should work with empty array", function(){
    Test.assertSimilar(uniqueInOrder(''),[]);
  });
  it("should work with one element", function(){
    Test.assertSimilar(uniqueInOrder('A'),['A']);
  });
  it("should reduce duplicates", function(){
    Test.assertSimilar(uniqueInOrder('AA'),['A']);
    Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'),['A', 'B', 'C', 'D', 'A', 'B']);
    Test.assertSimilar(uniqueInOrder('AADD'),['A','D']);
    Test.assertSimilar(uniqueInOrder('AAD'),['A','D']);
    Test.assertSimilar(uniqueInOrder('ADD'),['A','D']);
  });
  it("and treat lowercase as different from uppercase", function(){
    Test.assertSimilar(uniqueInOrder('ABBCcAD'),['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it("and work with int arrays", function(){
    Test.assertSimilar(uniqueInOrder([1,2,3,3]),[1,2,3]);
  });
  it("and work with char arrays", function(){
    Test.assertSimilar(uniqueInOrder(['a','b','b']),['a','b']);
  });
});