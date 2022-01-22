// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const combs = Array();
    helper(0, target, [], candidates, combs);
    return combs;
};

function helper(i, target, curr, candidates, combs) {
  if (target === 0) {
    combs.push(curr);
    return;
  }
  if (target < 0 || i >= candidates.length) return;

  for (let j = i; j < candidates.length; j++) {
    if (j !== i && candidates[j] === candidates[j - 1]) continue;
    helper(
      j + 1,
      target - candidates[j],
      [...curr, candidates[j]],
      candidates,
      combs
    );
  }
}

(function () {
    const candidates = [8, 10, 6, 11, 1, 16, 8], target = 28;
  console.log(combinationSum2(candidates, target));
})();
