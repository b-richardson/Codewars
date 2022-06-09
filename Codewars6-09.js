// Take every interger from an array and return a new array containing the numbers doubled.

function maps(num){
    let arr = num
  console.log(arr)
    const newArr = num.map(myFunction)
    console.log(newArr)
    return (newArr)
  }
  
  function myFunction(arr){
    return (arr * 2)
  }