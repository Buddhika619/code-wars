//URL--
// https://www.codewars.com/kata/515bb423de843ea99400000a

//INSTRUCTIONS--
/* 

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1


*/

//SOLUTION--

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.pages = Math.ceil(collection.length/itemsPerPage)
    this.items = collection.length
    this.itemsPerPage = itemsPerPage
  }

  pageCount() {
    return this.pages
  }

   itemCount() {
    return this.items
  }

  
  pageItemCount(n) {
    if(n >= this.pages || n < 0) {
      return -1;
    }
    if(n === this.pages-1){
      return (this.items % this.itemsPerPage)
    }else{
      return this.itemsPerPage
    }
  }

   pageIndex(n) {
    if (n >= 0 && n < this.items) {
      return Math.max(Math.ceil(n / this.itemsPerPage) - 1, 0)
    } else {
      return -1
    }
  }
}


//TEST_CASES

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
