// https://www.interviewbit.com/problems/allocate-books/

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  books: function (A, B) {
    if (B > A.length) return -1;

    let totalPages = 0,
      minPages = -1,
      low = 0,
      high;
    for (let pages of A) {
      totalPages += pages;
    }

    high = totalPages;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (this.isValidAllocation(mid, A, B)) {
        minPages = mid;
        high = mid - 1;
      } else low = mid + 1;
    }
    return minPages;
    },
    
  isValidAllocation(maxAllowedPages, A, B) {
    let currAllocation = 0;
    for (let pages of A) {
      if (pages > maxAllowedPages) return false;

      if (currAllocation + pages <= maxAllowedPages) {
        currAllocation += pages;
      } else {
        currAllocation = pages;
        B--;
      }
    }
    if (B > 0) return true;
    return false;
  }
};

const BookAllocation = require("./AllocateBooks.cjs");

(() => { 
    const A = [73, 58, 30, 72, 44, 78, 23, 9], B = 5;
    console.log(BookAllocation.books(A, B));;
})();