// An function that takes an array manipulates it and returns new resulting array
function arrayManip(array){
    for (let i=0;i<array.length;i++){
      let arr=[];
        for (let j=i+1;j<array.length;j++){
        if (array[i]<array[j]) arr.push(array[j]);  
      }
      let min=Math.min(...arr)
      if (arr.length>0){
      array[i]=min
      } else {array[i]=-1};
      arr=[];
      }
      return array
  }