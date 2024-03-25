/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * LCR 047. 二叉树剪枝
 * 给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1
 * 请剪除该二叉树中所有节点的值为 0 的子树。
 * 节点 node 的子树为 node 本身，以及所有 node 的后代
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    // 前序遍历二叉树
    var dfs = (node, callback, parent) => {
        if (node === null) return;

        callback(node, parent);
        dfs(node.left, callback, node);
        dfs(node.right, callback, node);
    };

    // 判断节点及其子节点的值是否全为0
    var isAllZero = root => {
        var result = true;
        dfs(root, node => {
            if (node.val === 1) {
                result = false;
            }
        });
        return result;
    };

    dfs(
        root,
        (node, parent) => {
            if (!isAllZero(node)) return;
            // 特判整个二叉树的值全为0的情况
            if (node === parent) return (root = null);

            if (parent.left === node) parent.left = null;
            if (parent.right === node) parent.right = null;
        },
        root
    );

    return root;
};
