function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function inOrder(tree) {
    if(!tree)
        return 'null';
    else {
        return tree.val + inOrder(tree.left) + inOrder(tree.right);
    }
}
var isSameTree = function(p, q) {
    let r1 = inOrder(p);
    let r2 = inOrder(q);
    console.log(r1, r2, r1 === r2);
    return inOrder(p) === inOrder(q);
};
let t1 = new TreeNode(1)
t1.left = new TreeNode(2)
t1.right = new TreeNode(1)

let t2 = new TreeNode(1)
t2.left = new TreeNode(1)
t2.right = new TreeNode(2)

isSameTree(t1,t2)
