// Sorted Squares. Learned the easy way to sort and unsorted array
var sortedSquares = function(nums) {
    let square = nums.map(x => Math.pow(x,2))
    console.log(square)
    square.sort((a,b) => a-b)
    console.log(square)
    return (square)
    
};