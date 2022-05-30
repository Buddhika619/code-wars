//URL--
// https://www.codewars.com/kata/5552101f47fc5178b1000050

//INSTRUCTIONS--
/*Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/

//SOLUTION--

function digPow(n, p){
  //split the first argument into sigle digits
  let numArr = n.toString().split('')
  //getting the power of each digit
  let powArr = numArr.map(item => (item ** p++));
  //getting the total of 'powArr' array
  let tot = powArr.reduce((acc,currentVal) => acc + currentVal,0)
  //returning the result
  return (tot%n === 0) ? (tot/n) : -1;

}



//TEST_CASES

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(digPow(89, 1), 1)
Test.assertEquals(digPow(92, 1), -1)
Test.assertEquals(digPow(46288, 3), 51)
Test.assertEquals(digPow(114, 3), 9)
Test.assertEquals(digPow(46288, 5), -1)
Test.assertEquals(digPow(135, 1), 1)
Test.assertEquals(digPow(175, 1), 1)
Test.assertEquals(digPow(518, 1), 1)
Test.assertEquals(digPow(598, 1), 1)
Test.assertEquals(digPow(1306, 1), 1)
Test.assertEquals(digPow(2427, 1), 1)
Test.assertEquals(digPow(2646798, 1), 1)
Test.assertEquals(digPow(3456789, 1), -1)
Test.assertEquals(digPow(3456789, 5), -1)
Test.assertEquals(digPow(198, 1), 3)
Test.assertEquals(digPow(249, 1), 3)
Test.assertEquals(digPow(1377, 1), 2)
Test.assertEquals(digPow(1676, 1), 1)
Test.assertEquals(digPow(695, 2), 2)
Test.assertEquals(digPow(1878, 2), 19)
Test.assertEquals(digPow(7388, 2), 5)
Test.assertEquals(digPow(47016, 2), 1)
Test.assertEquals(digPow(542186, 2), 1)
Test.assertEquals(digPow(261, 3), 5)
Test.assertEquals(digPow(1385, 3), 35)
Test.assertEquals(digPow(2697, 3), 66)
Test.assertEquals(digPow(6376, 3), 10)
Test.assertEquals(digPow(6714, 3), 1)
Test.assertEquals(digPow(63760, 3), 1)
Test.assertEquals(digPow(63761, 3), 1)
Test.assertEquals(digPow(132921, 3), 4)
Test.assertEquals(digPow(10383, 6), 12933)
  });
});