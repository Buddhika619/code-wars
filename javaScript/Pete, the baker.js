//URL--
// https://www.codewars.com/kata/525c65e51bf619685c000059

//INSTRUCTIONS--
/* 
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


*/

//SOLUTION--

function cakes(recipe, available) {

 recipe = Object.entries(recipe).sort();
 recipe = Object.fromEntries(recipe)
 available = Object.entries(available).sort();
 available = Object.fromEntries(available)
 
 
 const avLnames = Object.keys(available);

 let addIngrid = {}
 
 for(let i=0; i< avLnames.length; i++ ){
   
  recipe[avLnames[i]] && (addIngrid[avLnames[i]] = available[avLnames[i]])
   
 }

 const reCvalues = Object.values(recipe);
 
 const avLvalues = Object.values(addIngrid);
 
 return (reCvalues.length===avLvalues.length) ? parseInt(reCvalues.map((item, index) =>avLvalues[index]/item).sort((a,b)=> (a-b))[0]) : 0;


}

//TEST_CASES

const {assert} = require('chai');

describe('description example', function() {
  it('pass example tests', function() {
    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    assert.equal(cakes(recipe, available), 2);
    
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 500, flour: 2000, milk: 2000};
    assert.equal(cakes(recipe, available), 0);
  });
});