// LeetCode Move Zeros

var moveZeroes = function(nums) {
    let numOfZeroes = 0
     
     // nums.sort((a,b) => a - b)
     
     for (let i = 0; i < nums.length; i++ ){
         console.log('cycle')
         let isZero = nums[i] === 0
         if(isZero){
             numOfZeroes++
             console.log('found a zero')
             nums.splice(i,1)
             i--
             console.log('spliced')
            } 
     }
     console.log(numOfZeroes)
     for (let i = 0; i < numOfZeroes; i++){
         console.log('push')
         nums.push(0)
     }
     console.log(nums)
     return (nums)
 };