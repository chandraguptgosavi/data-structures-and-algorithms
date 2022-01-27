// https://leetcode.com/problems/permutation-sequence/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
     const nums = [], fact = Array(n);
        for(let i = 1; i <= n; i++)
            nums.push(i);

        fact[0] = 1;
        for(let i = 1; i < n; i++){
            fact[i] = fact[i-1]*i;
        }

        let perm = ""; k--;
        for(let i = 1; i <= n; i++){
            const index = Math.floor(k/fact[n-i]);
            perm += nums.splice(index, 1);
            k -= index*fact[n-i];
        }
        return perm;
};

(() => {
    console.log(getPermutation(4,23));
})();