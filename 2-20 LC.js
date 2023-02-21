// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let ans = new Set()

    for(let i = 0; i < nums.length; i++){
        if(!ans.has(nums[i])){
            ans.add(nums[i])
        }else{
            // let bye = (nums[i])
            // console.log(bye)
            ans.delete(nums[i])
            console.log(nums[i])
        }
    }
    return (Array.from(ans))
};