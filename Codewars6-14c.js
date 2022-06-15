// it takes 2 bullets to kill a dragon. determine if the hero wins against any number of dragons depending on how many bullets they have.

function hero(bullets, dragons){
    if(bullets >= (dragons*2)){
      return true
    }else{
      return false
    }
  }
  