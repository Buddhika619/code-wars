//URL--
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c


//INSTRUCTIONS--

/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

//SOLUTION--

function sortByLength (array) {
  
//applying bubble sort and sort based on the item length
  for(let k = 0; k < array.length-1; k++ ){

    for(let i = 0; i < array.length-1; i++){
      
      if(array[i].length > array[i+1].length){
        
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        
      }
      
    }
    
  }
  
  return array;
  
};
  

//TEST_CASES

function generateTestArray(){
  let arrayLength = Math.floor(Math.random() * 200 + 1);
  let tempArray = [];
  for (let i = 0; i < arrayLength; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode((Math.floor(Math.random() * 26) + 65))
    }
    tempArray.push(string);
  }
  let testArray = [];
  while (tempArray.length > 0) {
    testArray = testArray.concat(tempArray.splice(Math.floor(Math.random() * tempArray.length), 1));
  }
  return testArray;
};

describe("Basic tests",function(){
  it("Test 1",function(){
    Test.assertDeepEquals(sortByLength(["Dog", "Food", "A", "Of"]),["A", "Of", "Dog", "Food"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Dictionary", "Eloquent", "Bees"]),["", "Bees", "Eloquent", "Dictionary"]);
  });
  it("Test 3",function(){
    Test.assertDeepEquals(sortByLength(["A longer sentence", "The longest sentence", "A short sentence"]),["A short sentence", "A longer sentence", "The longest sentence"]);
  });
});

describe("Random tests",function(){
  for (let i = 1; i <= 100; i++) {
    it("Random test " + i, function(){
      let testArray = generateTestArray();
      Test.assertDeepEquals(sortByLength(testArray.slice()), testArray.slice().sort((a, b) => a.length - b.length));
    });
  };
});