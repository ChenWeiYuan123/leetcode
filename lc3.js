var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if(len === 0)
        return 0;
    let start = 0, max = 1;
    let map = {};
    for(let i = 0; i<len; i++) {
        if(map[s[i]] !== undefined && map[s[i]] >= start) {
            const length = i - start;
            start = map[s[i]] + 1;
            max = length > max ? length : max;
            // console.log(i, s[i], map[s[i]], max, start);
        }
        map[s[i]] = i;
    }
    const length = len - start;
    max = length > max ? length : max;
    return max;
};
console.log(lengthOfLongestSubstring('autyuasfsd'));
