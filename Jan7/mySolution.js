/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
   let left = 0;
   let right = 0;
   let set = new Set();

   while (right < s.length) {
       if(!set.has(s[right])) {
           set.add(s[right]);
           maxLength = Math.max(maxLength, set.size)
           right++
       } else {
           set.delete(s[left]);
           left++
       }
   }
   return maxLength;
};
