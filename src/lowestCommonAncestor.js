/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：
 *    对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
 *    满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var travelTree = function (node, p, q) {
        if (node === null || node === p || node === q) return node;

        var left = travelTree(node.left, p, q);
        var right = travelTree(node.right, p, q);

        if (left && right) return node;
        if (left && right === null) return left;
        if (left === null && right) return right;

        return null;
    };

    return travelTree(root, p, q);
};
