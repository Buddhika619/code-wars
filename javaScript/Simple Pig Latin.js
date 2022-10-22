//URL--
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

//INSTRUCTIONS--
/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


*/

//SOLUTION--

function pigIt(str){
 var specials = /[^A-Za-z 0-9]/g;
 let split = str.split(' ')
 let newArr = []
  for(let i=0; i< split.length; i++){
    let sub = split[i].split('');
    if(sub.length<3){
      sub.reverse()
    }else{
      let hold = sub[0];
      sub.shift(hold);
      sub.push(hold)
    }

    let merge = sub.join('')
    if(!specials.test(merge)){
      newArr.push(merge + 'ay')
    }else{
      newArr.push(merge)
    }

    
  }

  return newArr.join(' ')
  
}

//TEST_CASES
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});

