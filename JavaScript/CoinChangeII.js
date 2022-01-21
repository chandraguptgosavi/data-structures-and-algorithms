// https://leetcode.com/problems/coin-change-2/submissions/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = [];
    for(let _ of coins){
        dp.push(Array(amount+1).fill(-1));
    }
    return getCombinations(0, amount, coins, dp);
};

function getCombinations(index, amount, coins, dp){
    if(amount === 0) return 1;
    if(index === coins.length) return 0;
    if(dp[index][amount] !== -1) return dp[index][amount];
    
    let combCnt = 0;
    if(amount >= coins[index]){
        combCnt = getCombinations(index, amount-coins[index], coins, dp);
    }
    
    return dp[index][amount] = combCnt + getCombinations(index+1, amount, coins, dp);
}

(function () {
    const coins = [1, 2, 5], amount = 5;
    console.log(change(amount, coins));
 })();