//URL--
// https://www.codewars.com/kata/50654ddff44f800200000004

//INSTRUCTIONS--
/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

//SOLUTION--

let solution = (str, ending) => {

    if(ending === ''){//if second argument is a empty string 
      
      return true;
      
    }else{
      
      let endChar = str.slice(-ending.length);
      console.log(endChar)
      return (endChar === ending) ? true : false;
      
    }
  
  }
  
  //TEST_CASES
  
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(solution('abcde', 'cde'), true)
  Test.assertEquals(solution('abcde', 'abc'), false)
  });
  });
  