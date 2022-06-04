function positiveSum(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    }
    return sum;
}

positiveSum([1,2,3,4,5])

// Worked through above  function after tests cases came back failed. The below Solution works using the same for loop method. added if()
function positiveSum(arr) {
    let sum = 0;
   for(let i = 0; i < arr.length; i++) {
       if(arr[i] > 0) sum += arr[i]
   }
   return sum
}

// New attempt below

function getSum(arrTwo){
    let sum = array.reduce(function(a,b){
        return a + b;
    }, 0);
    console.log(sum);
}


//  Newer Attempt below
function positiveSum(arr){
    let sum = 0
    arr.forEach(num => num > 0 && (sum += num))
    return sum
}