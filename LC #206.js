// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let prev = null;

    while(head){
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
        console.log(prev)
    }
    return prev;
};