var search = function(nums, target) {
    // console.log(nums.includes(target))
    if(nums.includes(target) == true){
       console.log(nums.indexOf(target))
        return (nums.indexOf(target))
       } else{
           console.log(-1)
           return(-1)
       }
};