//URL--
// https://www.codewars.com/kata/55908aad6620c066bc00002a

//INSTRUCTIONS--

/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//SOLUTION--

function XO(str) {
  
  const lowStr = str.toLowerCase().split('');
  //filter all X's in the array
  const xArr = lowStr.filter(item => item === "x");
  //filter all O's in the array
  const oArr = lowStr.filter(item => item === "o");
  //check whether number of X's are same as O's 
  return (xArr.length === oArr.length) ? true : false;
  
}

//TEST_CASES


describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO('XO'),true);
Test.assertEquals(XO('xo0'),true);
Test.assertEquals(XO('xxxoo'),false);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO(''),true,'Empty string contains equal amount of x and o');
Test.assertEquals(XO('xxxxxoooxooo'),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("ooom"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO('abcdefghijklmnopqrstuvwxyz'),true,'Alphabet contains equal amount of x and o');
  });
});
