//URL--
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

//INSTRUCTIONS--
/* 

Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

//SOLUTION--

function incrementString (strng) {

   let NumArr = []
  
   if(isNaN(strng.charAt(strng.length-1))){
     return strng+1
   }else{
     for(let i=0; i < strng.length; i++){
       !isNaN(strng.charAt(strng.length-1-i)) && NumArr.unshift(strng.charAt(strng.length-1-i))
       if(isNaN(strng.charAt(strng.length-1-i)))break
     }
   }

  let sString = (Number(NumArr.join(''))+1).toString()
  
  if(sString.length < NumArr.length){
    let diff =NumArr.length - sString.length
    sString = sString.split('')
    for(let i =0; i < diff; i++){
      sString.unshift(0)
    }
    sString = sString.join('')
  }
  
  return strng.slice(0,(strng.length - NumArr.length)) + sString
  
}

//TEST_CASES

describe("Tests suite", () => {

  const { assert } = require('chai');

  function doTest(input, expected) {
    const actual = incrementString(input);
    assert.strictEqual(actual, expected, `for string: "${input}"\n`);
  }

  it("sample tests", () => {
    doTest("foobar000", "foobar001");
    doTest("foobar999", "foobar1000");
    doTest("foobar00999", "foobar01000");
    doTest("foo", "foo1");
    doTest("foobar001", "foobar002");
    doTest("foobar1", "foobar2");
    doTest("1", "2");
    doTest("009", "010");
    doTest("fo99obar99", "fo99obar100");
  });
});