//URL--
// https://www.codewars.com/kata/513e08acc600c94f01000001

//INSTRUCTIONS--
/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3


*/

//SOLUTION--
function rgb(r, g, b){

  let val = [r, g,b];
  let arg = []

  for(let j=0; j < val.length; j++){
      if(val[j] > 255){
        val[j] = 255;
      }else{
        val[j] = val[j]
      }
  }


  console.log(val)  
  let results = []



  if(val[0] < 1 && val[1] < 1 && val[2] < 1){
    return '000000'
  }else{

    for(let k=0; k< val.length; k++){
    let hexArr = []  

    let reminderArr =[];
    let quotientArr = [];
    let quotient = val[k];

    while((quotient/16) > 0){
      reminderArr.push(quotient%16);
      quotient= parseInt(quotient/16);

      quotientArr.push(quotient);
      reminderArr.reverse();
    }

    for(let i=0; i< reminderArr.length; i++){
      switch(reminderArr[i]){
        case 10:
          hexArr.push('A');
          break;
        case 11:
          hexArr.push('B');
          break;
        case 12:
           hexArr.push('C');
          break;
        case 13:
           hexArr.push('D');
          break;
        case 14:
           hexArr.push('E');
          break;
        case 15:
           hexArr.push('F');
          break;
        default:
          hexArr.push(reminderArr[i]);
        }
     }

    if(hexArr.length === 1){
      hexArr.unshift('0');
    }

   if(hexArr.length === 0){
      hexArr.unshift('00');
    }

    hexArrstr = hexArr.join('')
    results.push(hexArrstr)

    }
  }

  return results = results.join('')
  
}



//TEST_CASES

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300,255,255), 'FFFFFF')
    Test.assertEquals(rgb(173,255,47), 'ADFF2F')
  });


function rgbReference(r, g, b){
  function hex(n){
    n = parseInt(n, 10)
    if (isNaN(n)) return "00"
    n = Math.max(0, Math.min(n, 255))
    var chars = "0123456789ABCDEF"
    return chars.charAt((n - n % 16) / 16) + chars.charAt(n % 16)
  }  
  
  return hex(r) + hex(g) + hex(b)
}

function elevatorReference(left, right, call){
   return (Math.abs(right-call)<=Math.abs(left-call))? 'right' : 'left';
}


function generator() {
  var a = randInt(-5,300)
  var b = randInt(-5,300)
  var c = randInt(-5,300)
  return [a,b,c]
}

function randInt(a, b) { return Math.random() * (b - a + 1) + a | 0 }

function randomAssertSimilar(generator, userSolution, referenceSolution, tests){
  tests = tests || 100;
  var user, reference, values;
  while( tests --> 0){
    values = generator();
    reference = referenceSolution.apply(this, values);
    user      = userSolution.apply(this,      values);
    Test.assertEquals(user, reference, "didn't work on the following argument array: " + values);
  }
}

it("Random Tests", function () {  
  randomAssertSimilar(generator, rgb, rgbReference);
});

});