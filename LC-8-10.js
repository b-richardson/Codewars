var searchInsert = function(nums, target) {
    if(nums.includes(target) === true){
       let sortedArray = nums.sort((a,b) => a-b)
       console.log(sortedArray);
        console.log(sortedArray.indexOf(target))
        return(sortedArray.indexOf(target))
       } else{
         let newArr = nums
         console.log(newArr)
           newArr.push(target)
           console.log(newArr)
           newArr.sort((a,b) => a-b)
           console.log(newArr)
           console.log(newArr.indexOf(target))
           return(newArr.indexOf(target)) 
       }
    
};