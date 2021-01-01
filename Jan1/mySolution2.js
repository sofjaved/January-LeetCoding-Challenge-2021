/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  for(let i = 0; i < pieces.length; i++) {
      let element = pieces[i];
      if(element.length === 1) {
          if(!arr.includes(element[0])) return false;
      } else if(element.length > 1) {
          if(!evaluateSubArr(arr, element)) {
              return false;
          }
      }
  }
  return true;
  };

function evaluateSubArr(arr1, arr2) {
for(let i = 0; i < arr2.length; i++) {
let subEl = arr2[i];
if(!arr1.includes(subEl)) {
  return false;
} else {
  let arr1Idx = arr1.indexOf(subEl);
    if(arr2[i+1] && arr1[arr1Idx + 1] !== arr2[i+1]) {
      return false;
    }
}
}
return true;
};
