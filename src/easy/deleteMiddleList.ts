const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: null // The end of the head
                        }
                    }
                }
            }
        }
    }
};



function deleteSelectedItem (head:ListNode,value:number){
    let prev: any = null;
    let curr = head;
    while(curr.next != undefined){
        if(curr.val == value){
            prev.next = curr.next
            return head;
        }
        const temp = curr;
        curr = curr.next;
        prev = temp
        // prev.next = curr

    }
    throw new Error('There is nothing else')
}


const result = deleteSelectedItem(head,4)
console.log(JSON.stringify(result));