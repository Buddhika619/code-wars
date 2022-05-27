//URL--
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

//INSTRUCTIONS--
/* Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


*/

//SOLUTION--

function repeatStr (n, s) {

    let string ="";
    for(let i=0; i< n; i++ ){
        string = string + s;  
    }

    return string;
}
  

//TEST_CASES
  
describe("Tests", function() {
    it ("Basic tests", function() {
      Test.assertSimilar(repeatStr(3, "*"), "***");
      Test.assertSimilar(repeatStr(5, "#"), "#####");
      Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
    });
  });