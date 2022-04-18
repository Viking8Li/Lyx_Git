var buildArray = function(nums) {
    var sum = new Array(nums.length);
    for(let i = 0; i < nums.length; i++){
        sum[i] = nums[nums[i]];
    }
    return sum;
};

let nums = [0,2,1,5,3,4];
let res = buildArray(nums);
console.log(res);
console.log(nums);