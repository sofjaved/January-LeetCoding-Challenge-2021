/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// Input: nums = [3,2,20,1,1,3], x = 10
// Output: 5
var minOperations = function(nums, x) {
  let sum = nums.reduce((a,b) => a+b);
  let target = sum - x;
  let left = 0;
  let right = 0;
  let min;
  let currentSum = nums[0];

  while(left < nums.length - 1) {
      if(currentSum < target) {
          right++;
          currentSum += nums[right];
      } else if (currentSum > target || right === nums.length) {
         currentSum -= nums[left];
          left++;
      } else {
          let subArrLength = nums.length - (right - left + 1);
          if (!min || subArrLength < min) {
              min = subArrLength;
          }
          if (right === nums.length) {
              break;
          } else {
              right++;
              currentSum += nums[right];
          }
      }
  }

  return min ? min : -1;
};
