/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let prev1;
  let current1;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === 1) {
          if(prev1 === undefined) {
              prev1 = i;
          } else {
              current1 = i;
              if(current1 - prev1 - 1 < k) {
                  return false;
              } else {
                  prev1 = current1;
              }
          }
      }
  }
  return true;
};
