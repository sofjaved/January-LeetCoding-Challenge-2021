/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let missing = []
  let num = 1
  let set = new Set(arr)
  while(missing.length < k){
      if(!set.has(num)) missing.push(num)
      num++
  }
  return missing[k-1];
};
