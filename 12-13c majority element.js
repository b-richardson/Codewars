// Given an array of nums, find the majority Element.


var majorityElement = function(nums) {
    const hash = {};
    const target = Math.ceil(nums.length/2)
    console.log(target)

    for(const num of nums){
        hash[num] = hash[num] + 1 || 1;
    }
    console.log(hash)


    for (const key in hash) {
        if(hash[key] >= target ){
        return key;
    }
    }
    
};