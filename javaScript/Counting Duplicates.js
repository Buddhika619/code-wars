//URL--
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

//INSTRUCTIONS--
/* 
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

//SOLUTION--
function duplicateCount(text){
  let tArr = text.toLowerCase().split('').sort();
  let fArr = [];
  for(let i=0; i< tArr.length-1; i++){
    if(tArr[i] == tArr[i+1]){
      fArr.push(tArr[i]);
    }
  }

  fArr = fArr.filter((c, index) => {
    return fArr.indexOf(c) === index;
  });

  return fArr.length;
}

//TEST_CASES

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

  });
});

