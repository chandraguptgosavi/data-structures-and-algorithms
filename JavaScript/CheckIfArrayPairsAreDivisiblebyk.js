// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const freq = Array(k).fill(0);

    for (let num of arr) {
        let mod = num % k;
        if (mod < 0) mod += k;
        freq[mod]++;
    }

    if (freq[0] % 2 === 1) return false;

    for (let i = 1; i <= k / 2; i++) {
        if (freq[i] !== freq[k - i]) return false;
    }
    return true;
};

(() => {
    console.log(canArrange([-4, -7, 5, 2, 9, 1, 10, 4, -8, -3], 3));
})();