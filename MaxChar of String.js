

function maxCharacter(str){
if(str === ''){
  return 'Please enter valid string'  
}
  
  let mystring = str.replace(/[^a-zA-Z]/gi,'')
          console.log(mystring)
  const string = mystring.toLowerCase()
  console.log(string)
  let charMap = {}
  let count = 0
  let maxChar = null

  for(const char of string){
       charMap[char] = charMap[char] + 1 || 1;
  }

    for (const char in charMap) {
    if(charMap[char] > count){
      count = charMap[char]
      maxChar = char
    }
  }
  console.log(count)
  return maxChar
}

console.log(maxCharacter('Who was the last person on Earth to ever go to a gladiator match?'))