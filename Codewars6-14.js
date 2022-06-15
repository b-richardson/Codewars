//  Create a function that extracts the middle charactes from a string

function getMiddle(s){
    var position;
    var length;
    
    if (s.length % 2 == 1){
      position = s.length / 2;
      length = 1
    }else{
      position = s.length / 2 - 1;
      length = 2
    }
    return s.substring(position, position + length)
  }