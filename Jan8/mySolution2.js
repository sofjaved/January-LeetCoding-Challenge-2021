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
  for(let i = 0; i < tree.length; i++) {
      if(!hasParent.has(tree[i])) {
          return tree[i];
      }
  }
};
