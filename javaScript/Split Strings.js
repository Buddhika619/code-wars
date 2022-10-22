//URL--
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

//INSTRUCTIONS--
/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

//SOLUTION--

function solution(str){
  
    let array = [];
    
  //if input is empty
    if(str===''){
        return array;
    }
    
   //spliting string to two pairs
    for (const s of str) {
         if(str.length>0){
            let split = str.slice(0,2);
            array.push(split)
            str = str.slice(2);
        }

    }

  //if last item in the array isnt a pair
    if(array[array.length-1].length === 1){
        array[array.length-1] = array[array.length-1] + '_';
    }
   
   return array;
}


//TEST_CASES

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});
