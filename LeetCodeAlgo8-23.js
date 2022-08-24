// LeetCode: LRU Cache

class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }
    
    get(key){
        if(this.map.has(key)){
            let val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }else {
            return -1
        }
    }
    
    put(key, val){
//         So, If the key isn't in there, run the next sequence
//         We need to check If the key is not in the cache currently
        if(this.get(key) === -1){
//             If we are at capacity, we want to loop through and delete the first element from out cache
            if(this.capacity === this.map.size){
                for(let keyVal of this.map){
                    this.map.delete(keyVal[0]);
                    break;
                }
            }
        }
//         If the key is not in the cache AND the cache is not at capacity, just put it in the cache
        this.map.set(key,val)
    }
};