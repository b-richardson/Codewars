// return the length of the shortest word in astring

function findShort(s){

    let stringArray = s.split(' ')
    const orderedArray = stringArray.sort((a, b) => {
     return a.length - b.length;
  })
    return orderedArray[0].length;
    }