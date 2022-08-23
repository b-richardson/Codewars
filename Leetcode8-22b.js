// Remove nth

var removeNthFromEnd = function(head, n) {
    let newLinkedList = new ListNode(0);
    newLinkedList.next = head;
      let fast = newLinkedList;
      let slow = newLinkedList;
      for(let i = 1; i <= n + 1; i++){
          fast = fast.next;
      }
  //     This moves both pointers forwards in the List as long as the fast pointer does not equal null(which would mean the end of the list)
      while(fast !== null){
            fast = fast.next;
          slow = slow.next;
            }
      slow.next = slow.next.next;
      
      return newLinkedList.next;
      
  };