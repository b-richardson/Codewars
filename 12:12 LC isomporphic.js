// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.




var isIsomorphic = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    
    let sHash = {}
    let tHash = {}
    let current = 0

    while(current <= s.length - 1){
        if(sHash[s[current]] !== tHash[t[current]]){
            return false;
        }
        sHash[s[current]] = current +1;
        tHash[t[current]] = current +1;
        current ++
    }
    return true;
};