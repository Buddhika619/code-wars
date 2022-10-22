//URL--
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

//INSTRUCTIONS--
/* 
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

Note:

    You can see examples for your language in "Sample Tests".


*/

//SOLUTION--

function productFib(input){


 let fibArr  = [0,1]
 let returnArr = []
 
 let product = 0
 let counter  = 2
 
 while(product < input){
  fibArr[counter] = fibArr[fibArr.length-1] +  fibArr[fibArr.length-2]
  counter++
  product = fibArr[fibArr.length-1] *  fibArr[fibArr.length-2]
 }


 if(input  === (fibArr[fibArr.length-1] *  fibArr[fibArr.length-2])){
   returnArr.push(fibArr[fibArr.length-2] );
   returnArr.push(fibArr[fibArr.length-1]);
   returnArr.push(true);
 
   return returnArr;
  
 }else{
    returnArr.push(fibArr[fibArr.length-2] );
   returnArr.push(fibArr[fibArr.length-1]);
   returnArr.push(false);
  
   return returnArr;
 }

}

//TEST_CASES

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(productFib(4895), [55, 89, true])
Test.assertSimilar(productFib(5895), [89, 144, false])
Test.assertSimilar(productFib(74049690), [6765, 10946, true])
Test.assertSimilar(productFib(84049690), [10946, 17711, false])
Test.assertSimilar(productFib(193864606), [10946, 17711, true])
Test.assertSimilar(productFib(447577), [610, 987, false])
Test.assertSimilar(productFib(602070), [610, 987, true])

  });
});
