/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  
  minDepth() {
    if (!this.root) return 0;
   function findMinDepth(node){
    if (!node.left && !node.right){
      return 1
    }
    if (node.left === null) return findMinDepth(node.left) + 1
    if (node.right === null) return findMinDepth(node.right) +1
    return (
      Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1
    )
   }

   return findMinDepth(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function findMaxDepth(node){
      if (!node.left && !node.right){
        return 1
      }
      if (node.left === null) return findMaxDepth(node.left) + 1
      if (node.right === null) return findMaxDepth(node.right) +1
      return (
        Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1
      )
     }
  
     return findMaxDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      console.log("result: ", result)
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let currLowest = 999;
    function findNextLarger(currNode){
      //extra base case: if currNode.val is not greater than lowerbound, return the next lowest
      //which is stored in a variable in case of the event
      if(currNode.val <= lowerBound){
        console.log(`oops, ${currNode.val} is greater than or equal to ${lowerBound}, using ${currLowest} instead`)
        return currLowest
      } 
      if (!currNode.left && !currNode.right) return currNode.val
      if(!currNode.left){
        currLowest = Math.min(currNode.val, findNextLarger(currNode.right))
        return currLowest
      } 
      if(!currNode.right){
        currLowest =  Math.min(currNode.val, findNextLarger(currNode.left))
        return currLowest
      } 
      else{
        currLowest =  Math.min(currNode.val, findNextLarger(currNode.left), findNextLarger(currNode.right))
        return currLowest
      }
     
    }
    
    let final = findNextLarger(this.root)
    if (final == 999) return null
    else return final
    
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}
emptyTree = new BinaryTree();

  // build small tree;
  let smallLeft = new BinaryTreeNode(5);
  let smallRight = new BinaryTreeNode(5);
  let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  smallTree = new BinaryTree(smallRoot);

  // build large tree
  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

  console.log(largeTree.maxSum())

module.exports = { BinaryTree, BinaryTreeNode };
