function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function getValue(tree) {
    if(!tree)
        return 0;
    const ll = tree.left ? tree.left.left : null;
    const lr = tree.left ? tree.left.right : null;
    const rl = tree.right ? tree.right.left : null;
    const rr = tree.right ? tree.right.right : null;

    const lv = tree.left ? getValue(tree.left) : 0;
    const rv = tree.right ? getValue(tree.right) : 0;
    const lcValue = getValue(ll) + getValue(lr);
    const rcValue = getValue(rl) + getValue(rr);

    const value1 = lv + rv;
    const value2 = tree.val + lcValue + rcValue;
    const value3 = lv + rcValue;
    const value4 = rv + lcValue;
    const value5 = tree.val + rcValue;
    const value6 = tree.val + lcValue;
    return Math.max(value1,value2,value3,value4,value5,value6);
}
var rob = function(root) {
    console.log(getValue(root))
    return getValue(root);
};
let t1 = new TreeNode(1)
t1.right = new TreeNode(4)
t1.right.left = new TreeNode(3)
t1.right.left.right = new TreeNode(2)
rob(t1)
