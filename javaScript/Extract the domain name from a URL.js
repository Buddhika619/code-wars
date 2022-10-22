//URL--
// https://www.codewars.com/kata/514a024011ea4fb54200004b

//INSTRUCTIONS--
/* 

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

//SOLUTION--
function domainName(url){
  
  
 if(url.charAt(0) === 'h' && url.charAt(1) === 't'){
   url = url.slice(7)
 }

  if(url.charAt(0) === '/' ){
   url = url.slice(1)
 }

 urlArr = url.split('')

 dotArr = []

 let temp = ''
 for(let i=0; i<  urlArr.length; i++) {
   if(urlArr[i] != '.'){
     temp = temp + urlArr[i]
   }
    
   if(urlArr[i] === '.'){
     dotArr.push(temp)
     temp = ''
   }
 }

dotArr = dotArr.filter(item => item != "www") 
 
return dotArr[0]

 
}

//TEST_CASES

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})
