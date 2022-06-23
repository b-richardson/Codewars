// Reverse string thats passed into function

function solution(str){
    return str.split('').reverse().join('');
 }
 


 var fizzBuzz = function(n) {
    for(let i = 0; i < n.length; i++){
        if(i % 3){
           console.log('fizz')
           }else if(i % 5){
               console.log('buzz')     
           }else if((i % 3 === 0) && (i % 5 === 0)){
               console.log('fizz buzz')
           }else{
               console.log(i)
           }
    }
};