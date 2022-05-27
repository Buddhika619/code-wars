//URL--
// https://www.codewars.com/kata/55c0ee3b9951adceaa00005f

//INSTRUCTIONS--

/*Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}

Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.

*/

//SOLUTION--

function valAndUnits(s) {
    //getting the value
    let val = parseFloat(s); 
    //getting the unit
    let units =  (s.slice(val.toString().length)).trim()
    
    return {'val': val,'units': units }
  }
  
 

//TEST_CASES
 
var expect = require("chai").expect

describe('valAndUnits', () => {
  it('should handle integers', () => {
    const {val, units} = valAndUnits('12px');
    expect(val, 'woop').to.equal(12);
    expect(units).to.equal('px');
    Test.pass();
  });

  it('should handle floats', () => {
    const {val, units} = valAndUnits('12.5kg');
    expect(val).to.equal(12.5);
    expect(units).to.equal('kg');
    Test.pass();
  });
  
  it('should handle negative numbers', () => {
    const {val, units} = valAndUnits('-1rem');
    expect(val).to.equal(-1);
    expect(units).to.equal('rem');
    Test.pass();
  });

  it('should handle unitless strings', () => {
    const {val, units} = valAndUnits('13');
    expect(val).to.equal(13);
    expect(units).to.equal('');
    Test.pass();
  });
});
