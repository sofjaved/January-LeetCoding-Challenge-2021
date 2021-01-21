/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let open = {
      '(': true,
      '[': true,
      '{': true
  }
  let close = {
      ')': '(',
      ']': '[',
      '}': '{'
  }
  for(let i = 0; i < s.length; i++) {
      let el = s[i];
      if(open[el]) {
          stack.push(el);
      }
      if(close[el]) {
          if(stack.length === 0) return false;
          else if(close[el] === stack[stack.length - 1]) {
              stack.pop();
          } else return false;
      }
  }
  return !stack.length;
};
