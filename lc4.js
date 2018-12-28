var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const len = len1 + len2;
    const arr = new Array(len1 + len2);
    let n = 0, m = 0;
    for(let i = 0; i<len; i++) {
        if((!nums1[n] && nums2[m]) || (nums1[n] > nums2[m])) {
            arr[i] = nums2[m];
            m++;
        } else {
            arr[i] = nums1[n];
            n++;
        }
        // console.log(arr[i]);
    }
    if(len % 2 === 0) {
        const index1 = Math.floor(len/2);
        const index2 = index1-1;
        return ((arr[index1] + arr[index2])/2).toFixed(1);
    } else {
        const index1 = Math.floor(len/2);
        return arr[index1];
    }
};
console.log(findMedianSortedArrays([],[2,3]));
