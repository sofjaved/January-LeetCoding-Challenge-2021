/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */



var merge = function(nums1, m, nums2, n) {
  let index = m + n;
  let num1 = nums1[--m];
  let num2 = nums2[--n];

  while (index) {
      if (n < 0) {
          break;
      };
      if (num1 > num2) {
          nums1[--index] = num1;
          num1 = nums1[--m];
      } else {
          nums1[--index] = num2;
          num2 = nums2[--n];
      };
  };

};

// var merge = function(nums1, m, nums2, n) {
//     if(!nums1.length || !nums2.length) return nums1;

//     for(let i = 0; i < nums2.length; i ++) {
//         nums1[m] = nums2[i];
//         m++
//     }
//     nums1.sort((a,b) => a-b);

// };
