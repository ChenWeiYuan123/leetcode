var twoSum = function(nums, target) {
    for(let i = nums.length - 1; i > 0; i--) {
        if(nums[i] <= target) {
            for(let j = i - 1; j >= 0; j--) {
                if(nums[i] + nums[j] === target) {
                    return [j, i];
                }
            }
        }
	}
};
var nums = [0,4,3,0];
var target = 7;
console.log(twoSum(nums, target));
