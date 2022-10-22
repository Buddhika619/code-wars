//URL--
// https://www.codewars.com/kata/52685f7382004e774f0001f7

//INSTRUCTIONS--
/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

//SOLUTION--

function humanReadable (input) {
   let hours;
   let mins;
   let seconds;

   if(input< 60){
      hours = "00"
      mins = "00"
      seconds = input
   } 
  
   if(input>=60 && input < 3600){
     mins = parseInt(input/60);
     seconds = input%60;
     hours = "00"
   }

   if(input>=3600){
     hours = parseInt(input/3600);
     let rem = input% 3600;
     if(rem >= 60){
       mins = parseInt(rem/60)
       seconds = rem%60
     }else{
       mins = "00"
       seconds = rem;
     }
   }

  hours = hours.toString()
  if(hours.length<2){
    hours = "0" +hours
  }
  mins = mins.toString()
    if(mins.length<2){
    mins = "0" + mins 
  }
  seconds = seconds.toString()
    if(seconds.length<2){
    seconds = "0" + seconds
  }
  
  
  return `${hours}:${mins}:${seconds}`
}

//TEST_CASES
const strictEqual = require("chai").assert.strictEqual;

describe('tests', function() {
  it('should format correctly', function() {
    strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
    strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
    strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
    strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
    strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
    strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
    strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
    strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});
