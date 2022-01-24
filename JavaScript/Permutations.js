// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const perms = [], currPerms = [];
  helper(currPerms, nums, perms);
  return perms;
};

function helper(currPerms, nums, perms) {
    if (currPerms.length === nums.length) {
      perms.push([...currPerms]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!currPerms.includes(nums[i])) {
        currPerms.push(nums[i]);
        helper(currPerms, nums, perms);
        currPerms.pop();
      }
    }
}
  
(() => {
  console.log(permute([1, 2, 3]));
})();