var twoSum = function(nums, target) {
    prev = {}
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let neededValue = target - current;
        let index2 = prev[neededValue]
        if(index2 != null) {
            return [index2, i]
        } else {
            prev[current] = i
        }
    }
};