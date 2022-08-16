// Find the longest substring in the array given. Sliding Window Practice

var lengthOfLongestSubstring = function(s) {
    let max = 0
       let begin = 0
       let set = new Set()
           
           for(let end = 0; end < s.length; end++){
               while(set.has(s[end])){
                   set.delete(s[begin])
                   begin = begin + 1
               } set.add(s[end])
               max = Math.max(max, end - begin + 1)
           }
   return(max)
   }
