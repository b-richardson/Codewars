// Reverse a Linked List

var reverseList = function(head) {
    prev = null 
    next = null 
    curr = head 
    
    while (curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    return prev
};