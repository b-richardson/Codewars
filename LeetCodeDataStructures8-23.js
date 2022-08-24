// Merge Sorted Array

var merge = function(nums1, m, nums2, n) {

    nums1.splice(m , (nums1.length - m))
    console.log(nums1)
    console.log(nums2)

for(let i = 0; i < n; i++){
nums1.push(nums2[i])
}
nums1.sort((a,b) => a-b)





};