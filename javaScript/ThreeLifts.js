//URL--
//https://www.codewars.com/kata/575135cabdd337cff50009cc

//INSTRUCTIONS--
/* ask

There are three lifts in a building: A, B and C. Lift A only stays on 
the odd floor; Lift B only stays on the even floor(floor1 is an
exception); Lift C stays on each floor. When someone presses the lift 
button, the nearest lift will move to the person's floor.

Now, someone pressed the lift button, please judge which lift will move?

You will coding in function switchLift. parameter 1: object status, 
contains three number values, it means the current floor of the three
 lifts; parameter 2: number n, it means lift button has been pressed 
 at floor n. The return value should be a string, such as "A","B","C".

The following examples will help you to understand how to solve this kata.
Examples

switchLift({A:1,B:1,C:10},3) should return "A"

Because lift A needs move up 2 floor; lift B never stay on floor 3; 
lift C needs move down 7 floor. So the lift A is the best choice.

switchLift({A:1,B:1,C:10},4) should return "B"
switchLift({A:1,B:1,C:10},5) should return "A"
switchLift({A:1,B:1,C:10},6) should return "C"

switchLift({A:1,B:1,C:9},5) should return "AC"

Because lift A and lift C both need move 4 floor. So lift A and lift C 
will move at the same time.

switchLift({A:1,B:2,C:10},6) should return "BC"

switchLift({A:1,B:1,C:9},1) should return ""

Because there are two lifts have been parked there, so any lift does 
not need to move.

switchLift({A:5,B:4,C:6},1) should return "B"

When n=1, because the three lifts are able to reach the floor 1, so 
should return the nearest of three lifts.
*/

//SOLUTION--

function switchLift(status,n){

    let distance = [];
   
  //getting the distance of each lift from the floor
    for (const key in status) {
      distance.push(Math.abs(status[key]-n));
    }
  
    
  //if any lift on the current floor
    if (distance[0] === 0 || distance[1] === 0 || distance[2] === 0) {
      
      return '';
      
    }else{  
      
      if(n % 2  === 0 || n === 1){  //if floor number=1 or floor number is even
         if(distance[1] < distance[2]){
           return "B";
         }else if(distance[1] === distance[2]){
           return "BC";
         }else{
           return "C";
         }
        
      }else if(n % 2 === 1){  //if floor number is odd
        if(distance[0]<distance[2]){
           return "A";
         }else if(distance[0] === distance[2]){
           return "AC";
         }else{
           return "C";
         }
        
      } 
    }
    
  }

//TEST_CASES
 
describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(switchLift({A:1,B:1,C:10},3) , "A");
  Test.assertSimilar(switchLift({A:1,B:1,C:10},4) , "B");
  Test.assertSimilar(switchLift({A:1,B:1,C:10},5) , "A");
  Test.assertSimilar(switchLift({A:1,B:1,C:10},6) , "C");
  Test.assertSimilar(switchLift({A:1,B:1,C:9},5) , "AC");
  Test.assertSimilar(switchLift({A:1,B:2,C:10},6) , "BC");
  Test.assertSimilar(switchLift({A:1,B:1,C:9},1) , "");
  Test.assertSimilar(switchLift({A:5,B:4,C:6},1) , "B");
    });
  });
  