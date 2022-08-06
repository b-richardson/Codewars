var solution = function(isBadVersion){
    return function(n){
        let start = 1
        let end = n
        while (start < end){
            let mid = Math.floor((start + end) /2)
            if(isBadVersion(mid)){
                end = mid
            } else {
                if(start === mid) return end;
                start = mid
            }
        }
        return end;
    }
}