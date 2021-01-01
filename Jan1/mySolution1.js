/**
 * @param {string} s
 * @return {boolean}
 */

var canPermutePalindrome = function(s) {
  let chars = {};
  for(let i = 0; i < s.length; i++) {
      let char = s[i];
      if(chars[char] === undefined) {
          chars[char] = 1;
      } else {
          chars[char]++;
      }
  }
  let oddCounts = 0;
  for(let char in chars) {
      if (chars[char] % 2 === 1) {
          oddCounts++;
      }
  }
  if(oddCounts > 1) {
      return false;
  } else {
      return true;
  }
};
