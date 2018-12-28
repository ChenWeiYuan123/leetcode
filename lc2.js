function ListNode(val) {
    this.val = val;
    this.next = null;
}
function getStr(ln) {
    const list = [];
    while(ln){
        list.push(ln.val);
        ln = ln.next;
    }
    return list.reverse().join('');
}
function toLn(str) {
    const len = str.length;
    var ln = new ListNode(str[len -1]);
    const result = ln;
    for(let i = len - 2; i >= 0; i--) {
        ln.next = new ListNode(str[i]);
        ln = ln.next;
    }
    return result;
}
var addTwoNumbers = function(l1, l2) {
    const str1 = getStr(l1);
    const str2 = getStr(l2);
    const str = getSum(str1, str2);
    return toLn(str);
};
function getSum(str1 ,str2) {
    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');
    const result = [];
    const len = str1.length > str2.length ? str1.length : str2.length;
    var foward = 0;
    for(let i = 0; i<len; i++) {
        if((str1[i] && str2[i]) || foward) {
            const num1 = +str1[i] || 0;
            const num2 = +str2[i] || 0;
            const sum = num1 + num2 + foward;
            const p1 = sum>=10 ? sum % 10: sum;
            const p2 = sum>=10 ? parseInt(sum / 10) : 0;
            result.push(p1);
            foward = p2;
        } else {
            const num = str1[i] || str2[i];
            result.push(+num);
        }
    }
    if(foward)
        result.push(foward);
    return result.reverse().join('');
}
// console.log(getSum('998','2'))
function Node(value, left, rigth) {
    this.value = value;
    this.left = left;
    this.rigth = rigth;
}
function BST() {
    this.root = null;
    this.find = function(value) {
        let current = this.root;
        while(current) {
            if(current.value === value)
                break;
            else if(current.value < value)
                current = current.right;
            else if(current.value > value)
                current = current.left;
            else;
        }
        return current;
    }
    this.insert = function() {

    }
}
function isSub(list1, list2) {
    let len1 = list1.length;
    let len2 = list2.length;
    // if(list2[len2-1] > list1[len1-1] || list2[0] < list1[0])
    let bst = new BST();
    bst.root = new Node(list1[0], null, null);
    for( let i=1; i<len1; i++){
        bst.insert(list1[i], null, null);
    }
    for( let i=0; i<len2; i++) {
        if(!bst.find(list2[i])){
            return false;
        }
    }
    return true;
}
