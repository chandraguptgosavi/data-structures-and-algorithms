// https://practice.geeksforgeeks.org/problems/element-appearing-once2552/1/

/**
 * @param {number[]} a
 * @param {number} N
 * @returns {number}
*/

class Solution {
    
    search(a,N)
    {
        //your code here
        let left = 0, right = N-1;
        while(left < right){
            const mid = left + Math.floor((right-left)/2);
            if((mid%2 === 0 && a[mid] === a[mid+1]) || (mid%2 === 1 && a[mid] === a[mid-1])){
                left = mid + 1;
            }else right = mid;
        }
        return a[left];
    }
}

(() => {
    const nums = [2, 2, 5, 5, 20, 30, 30];
    console.log((new Solution()).search(nums, nums.length));
 })();