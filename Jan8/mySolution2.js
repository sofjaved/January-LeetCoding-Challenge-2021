/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
  let hasParent = new Set();

 for(let i = 0; i < tree.length; i++) {
     if(tree[i].children) {
         tree[i].children.forEach(child => hasParent.add(child))
     }
 }
  for(let j = 0; j < tree.length; j++) {
      if(!hasParent.has(tree[j])) {
          return tree[j];
      }
  }
};
