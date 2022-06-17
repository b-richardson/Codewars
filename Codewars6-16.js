// Create a function to compare your grade to the class average. return true is higher and false if lower

function betterThanAverage(classPoints, yourPoints) {
    let gradeTotal = classPoints.reduce((a, b) => a + b) / classPoints.length;
    console.log(gradeTotal)
    if (gradeTotal < yourPoints){
      console.log(true)
      return(true)
    }else{
      return(false)
    }
  }
  