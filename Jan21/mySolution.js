/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  let result = [nums[0]];
      for(let i = 1; i < nums.length; i++) {
          let remaining = nums.length - i - 1;
          let resultLength = k - remaining;
          while(nums[i] < result[result.length-1] && result.length >= resultLength) {
              result.pop();
          }
          result.push(nums[i]);
      }
  result.length = k
  return result;
}
