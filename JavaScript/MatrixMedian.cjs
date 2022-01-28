// https://www.interviewbit.com/problems/matrix-median/

module.exports = {
  //param A : array of array of integers
  //return an integer
  findMedian: function (A) {
    const R = A.length,
      C = A[0].length;
    let low = 1,
      high = 1e9;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      let cnt = 0;
      for (let r = 0; r < R; r++) {
        cnt += this.lessThanMid(mid, r, A);
      }
      if (cnt <= Math.floor(R * C) / 2) low = mid + 1;
      else high = mid - 1;
    }
    return low;
  },
  lessThanMid(mid, row, A) {
    let l = 0,
      r = A[row].length;
    while (l <= r) {
      const m = l + Math.floor((r - l) / 2);
      if (mid >= A[row][m]) {
        l = m + 1;
      } else r = m - 1;
    }
    return l;
  },
};


const MatrixMedian = require("./MatrixMedian.cjs");

(() => {
    const matrix = [
      [1, 3, 5],
      [2, 6, 9],
      [3, 6, 9],
    ];

    console.log(MatrixMedian.findMedian(matrix));
 })();