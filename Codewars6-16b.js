// Simple operation based on 3 variables in argument

function basicOp(operation, value1, value2){
    if(operation === '+'){
      return(value1 + value2)
    }else if(operation === '-'){
      return(value1 - value2)
    }else if(operation === '*'){
      return(value1 * value2)
    }else{
      return(value1 / value2)
    }
  }