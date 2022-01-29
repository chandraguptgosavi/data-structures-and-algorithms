// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const N = nums.length;
    let left = 0, right = N-1;
    while(left < right){
        const mid = left + Math.floor((right-left)/2);
        if(nums[mid] > nums[right]){
            left = mid+1;
        }else right = mid;
    } 

    if(target <= nums[N-1] && target >= nums[left]){
        return binarySearch(left, N-1, target, nums);
    }else {
        return binarySearch(0, left-1, target, nums);
    }
};

function binarySearch(left, right, target, nums){
    while(left <= right){
        const mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target){
            left = mid + 1;
        }else right = mid - 1;
    }
    return -1;
}

(() => { 
    console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
})();