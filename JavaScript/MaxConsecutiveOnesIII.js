// https://leetcode.com/problems/max-consecutive-ones-iii/submissions/

var longestOnes = function (nums, k) {
  let cnt = 0,
    zero = 0,
    l = 0,
    r = 0,
    N = nums.length;
  while (r < N) {
    while (zero <= k && r < N) {
      if (nums[r] === 0) zero++;
      if (zero === k) cnt = Math.max(cnt, r - l + 1);
      r++;
    }

    while (zero > k) {
      if (nums[l] === 0) zero--;
      l++;
    }
  }
  if (r === N && l === 0) return N;
  return cnt;
};

(() => {
  const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    k = 3;
  console.log(longestOnes(nums, k));
})();
