// https://leetcode.com/problems/xor-queries-of-a-subarray/

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const N = arr.length, prefXOR = Array(N+1).fill(0), xorQueries = [];
    for(let i = 1; i <= N; i++){
        prefXOR[i] = prefXOR[i-1] ^ arr[i-1]; 
    }
    
    for(let query of queries){
        xorQueries.push(prefXOR[query[1]+1]^prefXOR[query[0]]);
    }
    
    return xorQueries;
};

(() => { 
    const arr = [1, 3, 4, 8],
      queries = [
        [0, 1],
        [1, 2],
        [0, 3],
        [3, 3],
        ];
    
    console.log(xorQueries(arr, queries));
})();