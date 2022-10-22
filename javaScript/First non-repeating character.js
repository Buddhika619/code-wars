//URL--
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

//INSTRUCTIONS--
/* 

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

//SOLUTION--

function firstNonRepeatingLetter(s) {

     retArr = s.split('')
     s = s.toLowerCase().split('')

    for(let i=0; i< s.length; i++){
        
        let tempArr = [...s]
        delete tempArr[i]
        if(!tempArr.includes(s[i]))return retArr[i]
    
    }
    return ''
}

//TEST_CASES

const Test = require('@codewars/test-compat');

describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});
