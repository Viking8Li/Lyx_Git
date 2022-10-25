
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
}


function findBottomLeftValue(root: TreeNode | null): number {
    let res = root.val;
    const nodeList:Array<TreeNode> = [root];
    while(nodeList.length){
        const node = nodeList.shift();
        if(node.right){
            nodeList.push(node.right)
        }
        if(node.left){
            nodeList.push(node.left)
        }
        res = node.val;
    }
    return res;
}
