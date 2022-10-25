// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    class TreeNode {
        constructor(val, left, right) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
        }
    }
    // console.log( TreeNode);
    return TreeNode;
}());

function findBottomLeftValue(root) {
    var res = root.val;
    var nodeList = [root];
    while (nodeList.length) {
        var node = nodeList.shift();
        if (node.right) {
            nodeList.push(node.right);
        }
        if (node.left) {
            nodeList.push(node.left);
        }
        res = node.val;
    }
    console.log(res);
    return res;
}

var root = [2, 1, 3];
