// Create a function that returns the correct BMI for the weight and height given


function bmi(weight, height) {
    let myBmi = (weight / Math.pow(height, 2))
    if (myBmi <= 18.5){
      return('Underweight')
    }else if(myBmi <= 25.0){
      return('Normal')
    }else if(myBmi <= 30.0){
      return('Overweight')
    }else{
      return('Obese')
    }
  }